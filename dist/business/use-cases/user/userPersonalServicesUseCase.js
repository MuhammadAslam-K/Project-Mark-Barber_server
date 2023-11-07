"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personalServicesGetQuery_1 = __importDefault(require("../../../adapters/data-access/repositories/personalServicesRepository/personalServicesGetQuery"));
exports.default = {
    getNearByPersonalServices: async (data) => {
        try {
            const longitude = parseFloat(data.longitude);
            const latitude = parseFloat(data.latitude);
            const MetersPerKilometer = 1000;
            const radius = 10 * MetersPerKilometer;
            return await personalServicesGetQuery_1.default.findNearestpersonalServicesByUserLatAndLong(latitude, longitude, radius);
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getAllPersonalServices: async () => {
        try {
            return personalServicesGetQuery_1.default.getAllPersonalServices();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
