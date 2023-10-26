"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminDashboardUseCase_1 = __importDefault(require("../../../useCase/adminUseCase/adminDashboardUseCase"));
exports.default = {
    getDashboardData: async (req, res) => {
        try {
            res.json(await adminDashboardUseCase_1.default.getDashboardData());
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
