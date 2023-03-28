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
    secret: process.env.SECRET || 'secret',
    clientID: process.env.CLIENT_ID || '1b0b1e2b-308d-4c21-8de0-617453cd4665',
    clientSecret: process.env.CLIENT_SECRET || 'CSG8Q~-Aom8CBHiU2Vo1rv2AsuYzoSFdN0Rhda2i',
};
