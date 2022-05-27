import express, { Express } from "express"
import "express-async-errors"

import { UsersRoutes } from "./routes"
import { errorMessage } from "./middleware"

export const startServer = (): Express => {
  const app: Express = express()

  app.use(express.json())
  app.use("/users", UsersRoutes)

  //error middleware
  app.use(errorMessage)

  return app
}
