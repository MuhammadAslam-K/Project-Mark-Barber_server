"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shopeEntite_1 = __importDefault(require("../../../../../entites/shopeEntite"));
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
            return await shopeEntite_1.default.find({ staff_Id: staffId });
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    findNearestByUserLatAndLong: async (latitude, longitude, radius) => {
        try {
            if (isNaN(latitude) || isNaN(longitude)) {
                throw new Error('Invalid latitude or longitude values');
            }
            const nearbyShops = await shopeEntite_1.default.find({
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude],
                        },
                        $maxDistance: radius,
                    },
                },
            });
            return nearbyShops;
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getAllShopes: async () => {
        try {
            return shopeEntite_1.default.find();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
