import { Router } from "express"

import { RetriveData, GetUsers, AddUser, GetUser, PatchUser, DeleteUser } from "./handler"

import { validateBody, validateParams } from "../../middleware"

import { validateAddUser, validatePatchUser, validateUserId } from "../../validation"

const UsersRoutes = Router()

//routes...
UsersRoutes.get("/retrive-data", RetriveData)
UsersRoutes.get("/", GetUsers)
UsersRoutes.post("/", validateBody(validateAddUser), AddUser)
UsersRoutes.get("/:id", validateParams(validateUserId), GetUser)
UsersRoutes.patch("/:id", validateParams(validateUserId), validateBody(validatePatchUser), PatchUser)
UsersRoutes.delete("/:id", validateParams(validateUserId), DeleteUser)

export default UsersRoutes
