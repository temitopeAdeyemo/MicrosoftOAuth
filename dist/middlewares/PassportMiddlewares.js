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
        return passport_1.default.authenticate(serviceName, { session: true });
    }
    redirect(serviceName) {
        return passport_1.default.authenticate(serviceName, {
            session: true,
            failureRedirect: `${environment_1.default.baseUrl}/login`,
        });
    }
    authLogin(req, res, next) {
        try {
            if (!req.user) {
                return res.redirect('/');
            }
            next();
        }
        catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
    homepageAuth(req, res, next) {
        try {
            if (req.user) {
                return res.redirect('/auth/ok');
            }
            next();
        }
        catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}
exports.default = PassportMiddlewares;
