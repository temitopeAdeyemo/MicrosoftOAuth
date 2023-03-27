"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../controllers/auth"));
const PassportMiddlewares_1 = __importDefault(require("../passport-setup/PassportMiddlewares"));
const router = (0, express_1.Router)();
const passportMiddlewares = new PassportMiddlewares_1.default('microsoft');
const auth = new auth_1.default();
router.get('/', auth.homepage);
router.get('/auth/ok', auth.welcome);
router.get('/auth/logout', auth.logout);
router.get('/auth/microsoft', passportMiddlewares.authenticate('microsoft'));
router.get('/redirect', passportMiddlewares.redirect('microsoft'), auth.redirect);
exports.default = router;
