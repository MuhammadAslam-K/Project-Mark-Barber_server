"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffEntite_1 = __importDefault(require("../../../../entites/staffEntite"));
exports.default = {
    saveNewStaff: async (data) => {
        try {
            const result = new staffEntite_1.default({
                ...data,
            });
            return await result.save();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
