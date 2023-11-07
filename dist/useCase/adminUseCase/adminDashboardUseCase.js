"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shopeRepositoryGetQuery_1 = __importDefault(require("../../adapters/data-access/repositories/shopeRepository/shopeRepositoryGetQuery"));
const staffRepositoryGetQuery_1 = __importDefault(require("../../adapters/data-access/repositories/staffRepository/staffRepositoryGetQuery"));
exports.default = {
    getDashboardData: async () => {
        try {
            const [totalStaffs, totalShops] = await Promise.all([
                staffRepositoryGetQuery_1.default.getTotalCount(),
                shopeRepositoryGetQuery_1.default.getTotalCount()
            ]);
            return { totalStaffs, totalShops };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
