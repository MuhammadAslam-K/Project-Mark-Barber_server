"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staff_model_1 = __importDefault(require("../../models/staff-model"));
exports.default = {
    saveNewStaff: async (data) => {
        try {
            const result = new staff_model_1.default({
                ...data,
            });
            return await result.save();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
