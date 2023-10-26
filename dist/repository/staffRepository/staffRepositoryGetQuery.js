"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffEntite_1 = __importDefault(require("../../entites/staffEntite"));
exports.default = {
    getStaffWithEmail: async (email) => {
        try {
            const result = await staffEntite_1.default.findOne({ email: email });
            return result ? result : false;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
