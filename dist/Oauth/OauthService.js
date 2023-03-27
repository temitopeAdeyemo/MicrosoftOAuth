"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Passport_1 = __importDefault(require("../passport-setup/Passport"));
class OauthService extends Passport_1.default {
    constructor() {
        super();
    }
    async setUpMicrosoftOauth() {
        const options = {
            callbackURL: `http://localhost:9000/redirect`,
            clientID: '1b0b1e2b-308d-4c21-8de0-617453cd4665',
            clientSecret: 'CSG8Q~-Aom8CBHiU2Vo1rv2AsuYzoSFdN0Rhda2i',
            scope: ['user.read'],
        };
        await this.setUp(options);
        return;
    }
}
exports.default = OauthService;
