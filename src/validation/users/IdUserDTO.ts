import type { JSONSchemaType } from "ajv"
import { IdUserDTO } from "../../types/validation"

export const idSchema: JSONSchemaType<IdUserDTO> = {
  type: "object",
  properties: {
    id: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["id"],
  additionalProperties: false,
}
