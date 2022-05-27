import mongoose from "mongoose"
import { User } from "../types/model"

const UserSchema = new mongoose.Schema<User>({
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  birthday: String,
  isActive: {
    type: Boolean,
    default: false,
  },
  desctiption: String,
  lastAccess: {
    mac: String,
    ip: String,
    userAgent: String,
  },
})

export default mongoose.model("user", UserSchema)
