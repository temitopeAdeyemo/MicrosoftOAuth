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
      message: error.message,
      data: null,
    });
  }

  return response.status(500).json({
    success: false,
    message: "Internal server error.",
    data: null,
  });
}
