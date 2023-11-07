"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const staffAuthController_1 = __importDefault(require("../../../adapters/controllers/staff/staffAuthController"));
const staffShopController_1 = __importDefault(require("../../../adapters/controllers/staff/staffShopController"));
const staffDashboardController_1 = __importDefault(require("../../../adapters/controllers/staff/staffDashboardController"));
const staff_router = express_1.default.Router();
staff_router.post("/login", staffAuthController_1.default.login);
staff_router.post("/signup", staffAuthController_1.default.signUp);
// DASHBOARD
staff_router.get("/dashboard", staffDashboardController_1.default.getDashboardData);
// SHOPE
staff_router.post("/shop/add", staffShopController_1.default.addNewShop);
staff_router.get("/shopeDetails", staffShopController_1.default.getShopeDetails);
exports.default = staff_router;
