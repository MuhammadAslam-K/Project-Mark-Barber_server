"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminAuthController_1 = __importDefault(require("../../adapters/controllers/admin/adminAuthController"));
const adminStaffsController_1 = __importDefault(require("../../adapters/controllers/admin/adminStaffsController"));
const adminDashboardController_1 = __importDefault(require("../../adapters/controllers/admin/adminDashboardController"));
const admin_router = express_1.default.Router();
admin_router.post("/login", adminAuthController_1.default.login);
// STAFF
admin_router.get("/staffs/approved", adminStaffsController_1.default.getStaffs);
admin_router.patch("/staff/approve", adminStaffsController_1.default.approveStaff);
admin_router.patch("/staff/blockUnblock", adminStaffsController_1.default.blockUnblockStaff);
// DASHBOARD
admin_router.get("/dashboard", adminDashboardController_1.default.getDashboardData);
exports.default = admin_router;
