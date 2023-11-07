"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shopeRepositorySaveQuery_1 = __importDefault(require("../../adapters/data-access/repositories/shopeRepository/shopeRepositorySaveQuery"));
const staffRepositoryUpdateQuery_1 = __importDefault(require("../../adapters/data-access/repositories/staffRepository/staffRepositoryUpdateQuery"));
const shopeRepositoryGetQuery_1 = __importDefault(require("../../adapters/data-access/repositories/shopeRepository/shopeRepositoryGetQuery"));
exports.default = {
    addNewShop: async (data, staffId) => {
        try {
            await Promise.all([
                shopeRepositorySaveQuery_1.default.saveNewShop(data, staffId),
                staffRepositoryUpdateQuery_1.default.updateTotalSopNo(staffId)
            ]);
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getShopeWithStaffId: async (staffId) => {
        try {
            return await shopeRepositoryGetQuery_1.default.getShopWithStaffId(staffId);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
