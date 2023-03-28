"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Passport_1 = __importDefault(require("../passport-setup/Passport"));
const environment_1 = __importDefault(require("../config/environment"));
class OauthService extends Passport_1.default {
    constructor() {
        super();
        this.setUpMicrosoftOauth();
    }
    async setUpMicrosoftOauth() {
        return await this.config({
            callbackURL: `${environment_1.default.baseUrl}/redirect`,
            clientID: environment_1.default.clientID,
            clientSecret: environment_1.default.clientSecret,
            scope: ['user.read'],
        });
    }
}
exports.default = OauthService;
