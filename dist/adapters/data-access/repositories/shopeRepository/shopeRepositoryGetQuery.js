"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shope_model_1 = __importDefault(require("../../models/shope-model"));
exports.default = {
    getTotalCount: async () => {
        try {
            return await shope_model_1.default.find().count();
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getShopWithStaffId: async (staffId) => {
        try {
            return await shope_model_1.default.find({ staff_Id: staffId });
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
            const nearbyShops = await shope_model_1.default.find({
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
            return shope_model_1.default.find();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
