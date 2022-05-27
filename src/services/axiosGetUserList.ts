import axios from "axios"
import config from "config"
import { User } from "../types/model"

const axiosInstance = axios.create({
  baseURL: config.get("GIVEN_ENDPOINT"),
})

// Gets user List fro given endpoint
export const getUserList = async () => {
  const url = ""
  const result: Array<User> | null = await axiosInstance
    .get(url)
    .then((response) => {
      return response.data as Array<User>
    })
    .catch(() => {
      return null
    })

  return result
}
