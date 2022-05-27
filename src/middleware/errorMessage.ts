import { Response, Request, NextFunction } from "express"
import { Result } from "../types/routes"
import { logger } from "../winston"

export default (err: any, req: Request, res: Response<Result<any>>, next: NextFunction) => {
  logger.info(err.message)
  res.status(500).json({ success: false, message: err.message })
}
