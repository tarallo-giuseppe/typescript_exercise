import { Router } from "express"

import { RetriveData, GetUsers, AddUser, GetUser, PatchUser, DeleteUser } from "./handler"

import { validateBody } from "../../middleware"

import { validateAddUsers, validatePatchUser } from "../../validation"

const UsersRoutes = Router()

//routes...
UsersRoutes.get("/retrive-data", RetriveData)
UsersRoutes.get("/", GetUsers)
UsersRoutes.post("/", validateBody(validateAddUsers), AddUser)
UsersRoutes.get("/:id", GetUser)
UsersRoutes.patch(":id", validateBody(validatePatchUser), PatchUser)
UsersRoutes.delete(":id", DeleteUser)

export default UsersRoutes
