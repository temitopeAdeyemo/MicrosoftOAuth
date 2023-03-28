"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { File } from 'buffer';
const fs_1 = __importDefault(require("fs"));
const node_path_1 = __importDefault(require("node:path"));
const dbPath = node_path_1.default.join(__dirname, '../Database/database.json');
class OauthUserRepositoryService {
    async create(data) {
        const rawData = fs_1.default.readFileSync(dbPath, {
            encoding: 'utf8',
        });
        const users = JSON.parse(rawData);
        users.push(data);
        fs_1.default.writeFileSync(dbPath, JSON.stringify(users));
        return data;
    }
    async getUser(email) {
        const rawData = fs_1.default.readFileSync(dbPath, {
            encoding: 'utf8',
        });
        const users = JSON.parse(rawData);
        for (let user of users) {
            if (user.email == email) {
                return user;
            }
        }
        return null;
    }
    getAllUsers() {
        const rawData = fs_1.default.readFileSync(dbPath, {
            encoding: 'utf8',
        });
        const users = JSON.parse(rawData);
        return users;
    }
}
exports.default = OauthUserRepositoryService;
