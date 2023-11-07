"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personalServices_1 = __importDefault(require("../../models/personalServices"));
exports.default = {
    addNewPersonalService: async (data, staff_Id) => {
        console.log("data", data);
        try {
            const person = new personalServices_1.default({
                ...data,
                personalLocation: data.location,
                location: {
                    type: 'Point',
                    coordinates: [data.personLongitude, data.personLatitude],
                },
                images: [data.Image1, data.Image2, data.Image3, data.Image4],
                staff_Id,
            });
            return await person.save();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
