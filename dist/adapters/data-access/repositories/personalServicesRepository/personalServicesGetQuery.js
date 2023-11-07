"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personalServices_1 = __importDefault(require("../../models/personalServices"));
exports.default = {
    getPersonByMobile: async (mobile) => {
        try {
            return await personalServices_1.default.findOne({ mobile: mobile });
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getPersonByEmail: async (email) => {
        try {
            return await personalServices_1.default.findOne({ email: email });
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getByStaffId: async (staff_Id) => {
        try {
            return await personalServices_1.default.find({ staff_Id: staff_Id });
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getAllPersonalServices: async () => {
        try {
            return await personalServices_1.default.find();
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    findNearestpersonalServicesByUserLatAndLong: async (latitude, longitude, radius) => {
        try {
            if (isNaN(latitude) || isNaN(longitude)) {
                throw new Error('Invalid latitude or longitude values');
            }
            const nearbyShops = await personalServices_1.default.find({
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
};
