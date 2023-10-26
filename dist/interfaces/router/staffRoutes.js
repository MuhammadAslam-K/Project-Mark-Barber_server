"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const staffAuthController_1 = __importDefault(require("../controllers/staff/staffAuthController"));
const staff_router = express_1.default.Router();
staff_router.post("/login", staffAuthController_1.default.login);
staff_router.post("/signup", staffAuthController_1.default.signUp);
exports.default = staff_router;
