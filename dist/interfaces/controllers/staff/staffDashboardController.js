"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffDashboardUseCase_1 = __importDefault(require("../../../useCase/staffUseCase/staffDashboardUseCase"));
exports.default = {
    getDashboardData: async (req, res) => {
        try {
            res.json(await staffDashboardUseCase_1.default.getStaffDashboardData(req.token.data));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
