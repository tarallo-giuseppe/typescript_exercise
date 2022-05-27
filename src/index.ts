import config from "config"

import { startServer } from "./server"
import { connectToDatabase } from "./db"

const port = config.get("SERVICE_PORT")

connectToDatabase()

const app = startServer()

app.listen(port, () => {
  console.log(`⚡️[server]: Server is listening at ${port}`)
})
