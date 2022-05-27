import { Response, Request, NextFunction } from "express"
import { Result } from "../types/routes"

export default (err: any, req: Request, res: Response<Result<any>>, next: NextFunction) => {
  res.status(500).json({ success: false, message: err.message })
}
