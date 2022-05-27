import mongoose from "mongoose"
import config from "config"

export const connectToDatabase = async () => {
  console.log("Connecting to database...")

  if (!config.has("DATABASE_URI")) {
    throw new Error("FATAL ERROR: DATABASE_URI env var is not defined")
  }

  const connection = await mongoose.connect(config.get("DATABASE_URI")!)

  console.log("Database connection established!")

  return connection
}
