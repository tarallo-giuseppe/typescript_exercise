import type { DefinedError, ValidateFunction } from "ajv"
import type { Request, Response, NextFunction, RequestHandler } from "express"
import type { Result } from "../types/routes"
import type { ValidationOption } from "../types/validation"

import { buildErrorMessage } from "../validation"

export const validateRequest = (field: ValidationOption, validate: ValidateFunction): RequestHandler => {
  return (req: Request, res: Response<Result<any>>, next: NextFunction) => {
    const isValid = validate(req[field])

    if (!isValid) {
      const message = buildErrorMessage(field, validate.errors as DefinedError[])

      return res.status(400).send({ success: false, message })
    }

    next()
  }
}

export const validateBody = (validate: ValidateFunction): RequestHandler => validateRequest("body", validate)
export const validateParams = (validate: ValidateFunction): RequestHandler => validateRequest("params", validate)
export const validateQuery = (validate: ValidateFunction): RequestHandler => validateRequest("query", validate)
export const validateHeaders = (validate: ValidateFunction): RequestHandler => validateRequest("headers", validate)
