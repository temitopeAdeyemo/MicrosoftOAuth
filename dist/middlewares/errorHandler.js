"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../utils/AppError"));
function errorHandler(error, request, response, _) {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            success: false,
            message: error,
            data: null,
        });
    }
    return response.status(500).json({
        success: false,
        message: error,
        data: null,
    });
}
exports.default = errorHandler;
