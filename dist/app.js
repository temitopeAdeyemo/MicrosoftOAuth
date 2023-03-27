"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = __importDefault(require("./config/environment"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const route_1 = __importDefault(require("./routes/route"));
const session = require('express-session');
require('dotenv').config();
const passport = require('passport');
const OauthService_1 = __importDefault(require("./Oauth/OauthService"));
// const fs = require('fs');
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        new OauthService_1.default().setUpMicrosoftOauth();
        this.setRoutes();
        this.app.use(errorHandler_1.default);
    }
    setRoutes() {
        this.app.use(route_1.default);
    }
    getApp() {
        return this.app;
    }
    listen() {
        const { port } = environment_1.default;
        this.app.listen(port, () => {
            console.log(`Listening at port ${parseInt(port)}`);
        });
    }
}
exports.default = App;
