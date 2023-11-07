"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userSaloanController_1 = __importDefault(require("../../../adapters/controllers/user/userSaloanController"));
const user_route = express_1.default.Router();
user_route.post("/saloan/nearest", userSaloanController_1.default.getNearestSaloan);
user_route.get("/saloan/all", userSaloanController_1.default.getAllSaloan);
exports.default = user_route;
