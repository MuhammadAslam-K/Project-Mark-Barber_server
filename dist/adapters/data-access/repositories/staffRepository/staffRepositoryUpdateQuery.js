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
    updateTotalShope: async (staffId) => {
        try {
            return await staff_model_1.default.findByIdAndUpdate(staffId, { $inc: { totalShops: 1 } }, { new: true });
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    updateTotalPersonalServices: async (staffId) => {
        try {
            return await staff_model_1.default.findByIdAndUpdate(staffId, { $inc: { totalPersonalServices: 1 } }, { new: true });
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
};
