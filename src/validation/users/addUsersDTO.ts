import type { JSONSchemaType } from "ajv"
import { addUserDTO } from "../../types/validation"

export const addUserSchema: JSONSchemaType<addUserDTO> = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 1,
    },
    lastName: {
      type: "string",
      minLength: 1,
    },
    email: {
      type: "string",
      format: "email",
      minLength: 1,
    },
    gender: {
      type: "string",
    },
    birthday: {
      type: "string",
      minLength: 8,
    },
  },
  required: ["firstName", "lastName", "email", "birthday"],
  additionalProperties: false,
}
