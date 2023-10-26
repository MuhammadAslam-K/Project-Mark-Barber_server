"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shopeRepositoryGetQuery_1 = __importDefault(require("../../repository/shopeRepository/shopeRepositoryGetQuery"));
exports.default = {
    getNearbySaloan: async (data) => {
        try {
            const longitude = parseFloat(data.longitude);
            const latitude = parseFloat(data.latitude);
            const MetersPerKilometer = 1000;
            const radius = 1 * MetersPerKilometer;
            return await shopeRepositoryGetQuery_1.default.findNearestByUserLatAndLong(latitude, longitude, radius);
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getAllSaloan: async () => {
        try {
            return await shopeRepositoryGetQuery_1.default.getAllShopes();
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
};
