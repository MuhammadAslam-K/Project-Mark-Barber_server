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
                location: {
                    type: 'Point',
                    coordinates: [data.shoplongitude, data.shoplatitude],
                },
                images: [data.Image1, data.Image2, data.Image3, data.Image4],
                staff_Id,
            });
            await shop.save();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
