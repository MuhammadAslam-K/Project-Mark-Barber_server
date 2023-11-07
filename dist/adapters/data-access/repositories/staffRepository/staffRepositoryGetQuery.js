"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staff_model_1 = __importDefault(require("../../models/staff-model"));
exports.default = {
    getStaffWithEmail: async (email) => {
        try {
            const result = await staff_model_1.default.findOne({ email: email });
            return result ? result : false;
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getAllStaffs: async () => {
        try {
            return await staff_model_1.default.find();
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getTotalCount: async () => {
        try {
            return await staff_model_1.default.find().count();
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getCountOfShopByStaffId: async (staffId) => {
        try {
            const result = await staff_model_1.default.findById(staffId);
            return result ? result.totalShops : 0;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
