"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const environment_1 = __importDefault(require("../config/environment"));
class PassportMiddlewares {
    constructor(serviceName) {
        this.serviceName = serviceName;
    }
    authenticate(serviceName) {
        return passport_1.default.authenticate(serviceName, { session: false });
    }
    redirect(serviceName) {
        return passport_1.default.authenticate(serviceName, {
            session: false,
            failureRedirect: `${environment_1.default.baseUrl}/login`,
        });
    }
}
exports.default = PassportMiddlewares;
