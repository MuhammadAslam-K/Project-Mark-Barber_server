"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shopeRepositoryGetQuery_1 = __importDefault(require("../../../adapters/data-access/repositories/shopeRepository/shopeRepositoryGetQuery"));
exports.default = {
    getAllShopes: async () => {
        try {
            return await shopeRepositoryGetQuery_1.default.getAllShopes();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
