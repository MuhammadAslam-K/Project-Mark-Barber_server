"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffEntite_1 = __importDefault(require("../../entites/staffEntite"));
exports.default = {
    approveTheStaff: async (staffId) => {
        try {
            return await staffEntite_1.default.findByIdAndUpdate(staffId, { adminApproved: true }, { new: true });
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    blockUnblockStaff: async (staffId) => {
        try {
            const staff = await staffEntite_1.default.findById(staffId);
            if (staff) {
                staff.blocked = !staff.blocked;
                await staff.save();
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
