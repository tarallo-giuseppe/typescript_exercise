import type { JSONSchemaType } from "ajv"
import { patchUserDTO } from "../../types/validation"

export const patchUserSchema: JSONSchemaType<patchUserDTO> = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 1,
      nullable: true,
    },
    lastName: {
      type: "string",
      minLength: 1,
      nullable: true,
    },
    email: {
      type: "string",
      format: "email",
      minLength: 1,
      nullable: true,
    },
    gender: {
      type: "string",
      nullable: true,
    },
    birthday: {
      type: "string",
      minLength: 8,
      nullable: true,
    },
    desctiption: {
      type: "string",
      minLength: 50,
      nullable: true,
    },
  },
  required: [],
  additionalProperties: false,
}
