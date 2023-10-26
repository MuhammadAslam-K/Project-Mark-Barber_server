"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shopeEntite_1 = __importDefault(require("../../entites/shopeEntite"));
exports.default = {
    getTotalCount: async () => {
        try {
            return await shopeEntite_1.default.find().count();
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getShopWithStaffId: async (staffId) => {
        try {
            return await shopeEntite_1.default.find({ staff_id: staffId });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
