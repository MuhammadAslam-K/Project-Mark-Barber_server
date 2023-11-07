"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminPersonalServicesUseCase_1 = __importDefault(require("../../../business/use-cases/adminUseCase/adminPersonalServicesUseCase"));
exports.default = {
    getAllpersonalServices: async (req, res) => {
        try {
            res.json(await adminPersonalServicesUseCase_1.default.getAllpersonalServices());
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
