"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const OauthUserService_1 = __importDefault(require("../Oauth/OauthUserService"));
const passport_microsoft_1 = __importDefault(require("passport-microsoft"));
const MicrosoftStrategy = passport_microsoft_1.default.Strategy;
class PassportService {
    constructor() {
        this.oauthUserService = new OauthUserService_1.default();
        this.passport = passport_1.default;
        this.serialiseUser();
        this.deSerialiseUser();
    }
    async serialiseUser() {
        this.passport.serializeUser(async (user, done) => {
            done(null, user);
        });
    }
    async deSerialiseUser() {
        this.passport.deserializeUser((id, done) => { });
    }
    async setUp(options) {
        this.passport.use(new MicrosoftStrategy(options, async (accessToken, refreshToken, profile, done) => {
            try {
                const userData = {
                    email: profile.emails[0].value,
                    id: profile.id,
                };
                const user = await this.oauthUserService.create(userData);
                return done(null, user);
            }
            catch (error) {
                console.log(error);
                done(error);
            }
        }));
    }
}
exports.default = PassportService;
