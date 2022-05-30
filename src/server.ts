import express, { Express } from "express"
import "express-async-errors"
import swaggerUi from "swagger-ui-express"
import { swaggerDocument } from "./swagger"

import { UsersRoutes } from "./routes"
import { errorMessage } from "./middleware"

export const startServer = (): Express => {
  const app: Express = express()

  app.use(express.json())
  app.use("/users", UsersRoutes)
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  //error middleware
  app.use(errorMessage)

  return app
}
