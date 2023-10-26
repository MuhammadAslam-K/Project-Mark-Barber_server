"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shopeEntite_1 = __importDefault(require("../../entites/shopeEntite"));
exports.default = {
    saveNewShop: async (data, staff_Id) => {
        try {
            const shop = new shopeEntite_1.default({
                ...data,
                'shopeCoordinates.latitude': data.shoplatitude,
                'shopeCoordinates.longitude': data.shoplongitude,
                staff_Id,
            });
            await shop.save();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
