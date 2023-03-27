"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './.env' });
exports.default = {
    port: process.env.PORT || '9000',
    baseUrl: process.env.BASE_URL || `https://localhost:${process.env.PORT || '9000'}`,
};
