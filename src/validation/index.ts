import Ajv, { DefinedError } from "ajv"
import { addUserSchema, patchUserSchema, idSchema } from "./users"
import addFormats from "ajv-formats"
import { ValidationOption } from "../types/validation"

const ajv = new Ajv({ coerceTypes: true, allErrors: true })

addFormats(ajv)

// Defining validation function
export const validateAddUser = ajv.compile(addUserSchema)
export const validatePatchUser = ajv.compile(patchUserSchema)
export const validateUserId = ajv.compile(idSchema)

export const buildErrorMessage = (field: ValidationOption, errors: DefinedError[]): string => {
  const [error] = errors

  // Check if error is defined, otherwise use the default error message
  if (!error || !error.message) return ajv.errorsText(errors)

  // Remove the first slash and then replace all slashes with dots
  const instancePath = error.instancePath.slice(1).replace(/\//g, ".")

  // Build the error message based on error keyword
  let message = ""
  switch (error.keyword) {
    case "additionalProperties":
      message = `"${error.params.additionalProperty}" isn"t allowed`
      break
    case "dependencies":
      message = error.message
      break
    case "enum":
      message = `"${instancePath}" ${error.message}: [${error.params.allowedValues.join(", ")}]`
      break
    default:
      message = `"${instancePath}" ${error.message}`
      break
  }

  // Build the prefix for the error message
  let prefix = ""
  switch (field) {
    case "body":
      prefix = "The body field"
      break
    case "params":
      prefix = "The param"
      break
    case "query":
      prefix = "The query param"
      break
    case "headers":
      prefix = "The header"
      break
  }

  return `${prefix} ${message}`
}
