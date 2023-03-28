import { Request, Response, NextFunction } from "express";

import AppError from "../utils/AppError";

export default function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Response {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      success: false,
      message: error,
      data: null,
    });
  }
  console.log("ddddd", error);
  
  return response.status(500).json({
    success: false,
    message: error,
    data: null,
  });
}
