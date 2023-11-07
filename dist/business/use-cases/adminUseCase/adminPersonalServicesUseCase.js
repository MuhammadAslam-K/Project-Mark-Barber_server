"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personalServicesGetQuery_1 = __importDefault(require("../../../adapters/data-access/repositories/personalServicesRepository/personalServicesGetQuery"));
exports.default = {
    getAllpersonalServices: async () => {
        try {
            return personalServicesGetQuery_1.default.getAllPersonalServices();
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
