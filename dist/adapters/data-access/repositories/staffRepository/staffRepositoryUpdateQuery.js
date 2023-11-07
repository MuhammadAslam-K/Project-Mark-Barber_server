"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staff_model_1 = __importDefault(require("../../models/staff-model"));
exports.default = {
    approveTheStaff: async (staffId) => {
        try {
            return await staff_model_1.default.findByIdAndUpdate(staffId, { adminApproved: true }, { new: true });
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    blockUnblockStaff: async (staffId) => {
        try {
            const staff = await staff_model_1.default.findById(staffId);
            if (staff) {
                staff.blocked = !staff.blocked;
                await staff.save();
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    updateTotalSopNo: async (staffId) => {
        try {
            const staff = await staff_model_1.default.findById(staffId);
            if (staff) {
                const count = staff.totalShops;
                staff.totalShops = count + 1;
                return await staff.save();
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
