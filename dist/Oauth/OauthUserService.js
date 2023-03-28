"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepositories_1 = __importDefault(require("../Respositories/UserRepositories"));
class OauthUserService {
    constructor() {
        this.noauthUserRepositoryService = new UserRepositories_1.default();
    }
    async create(profile) {
        const { email, id } = profile;
        const userExists = await this.noauthUserRepositoryService.getUser(email);
        if (userExists) {
            return userExists;
        }
        const user = await this.noauthUserRepositoryService.create({ email, id });
        return user;
    }
}
exports.default = OauthUserService;
