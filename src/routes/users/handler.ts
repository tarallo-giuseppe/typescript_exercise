import { Request, Response } from "express"

import { User } from "../../types"
import { Result } from "../../types/routes"
import { addUserDTO, patchUserDTO } from "../../types/validation"

import { isValidObjectId } from "mongoose"
import { UserModel } from "../../models"
import { increaseIdCounter } from "../../utils"

export const RetriveData = async (req: Request, res: Response<Result<User>>) => {}

// Gets all users
export const GetUsers = async (req: Request, res: Response<Result<Array<User>>>) => {
  let Users: Array<User> = []

  await UserModel.find((err: any, foundUsers: Array<User>) => {
    if (err) return res.status(500).send({ success: false, message: "Error during Users research" })
    else Users = foundUsers
  })

  return res.status(200).send({ success: true, message: "Users Found", data: Users })
}

// Adds a user
export const AddUser = async (req: Request, res: Response<Result<User>>) => {
  const userToAdd = req.body as addUserDTO

  // Check if the email is already used by another user
  const emailOwner = await UserModel.findOne({ email: userToAdd.email })

  if (emailOwner) {
    return res.status(400).send({ success: false, message: "Email already used" })
  }

  // Create the user
  const user = new UserModel(userToAdd)
  user.id = increaseIdCounter()
  user.isActive = false

  // Save the user
  const savedUser = await user.save()
  return res.status(201).send({ success: true, data: savedUser })
}

// Gets a single user
export const GetUser = async (req: Request, res: Response<Result<User>>) => {
  const { id } = req.params

  // Check if is valid ObjectId
  if (!isValidObjectId(id)) return res.status(400).send({ success: false, message: "Invalid User ID" })

  // Checks if the User exists in the DB and retrieve it eventually
  const user: User | null = await UserModel.findById(id)
  if (!user) return res.status(404).send({ success: false, message: "User Not Found" })

  // Success response: returns requested User
  return res.status(200).send({ success: true, message: "User Found", data: user })
}

// Patch a user
export const PatchUser = async (req: Request, res: Response<Result<User>>) => {
  const patch = req.body as patchUserDTO
}

// Delete a user
export const DeleteUser = async (req: Request, res: Response<Result<string>>) => {
  const { id } = req.params

  const user = await UserModel.findByIdAndDelete(id)

  if (!user) {
    return res.status(404).send({ success: false, message: "Cannot find a user with the specified ID" })
  }

  res.status(200).send({ success: true, data: "User deleted" })
}
