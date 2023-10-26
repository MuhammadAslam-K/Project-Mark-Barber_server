"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffRepositoryGetQuery_1 = __importDefault(require("../../repository/staffRepository/staffRepositoryGetQuery"));
exports.default = {
    getStaffDashboardData: async (staffId) => {
        try {
            return staffRepositoryGetQuery_1.default.getCountOfShopByStaffId(staffId);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
