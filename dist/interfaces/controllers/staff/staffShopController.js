"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffShopeUseCase_1 = __importDefault(require("../../../useCase/staffUseCase/staffShopeUseCase"));
exports.default = {
    addNewShop: async (req, res) => {
        try {
            res.json(await staffShopeUseCase_1.default.addNewShop(req.body, req.token.data));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getShopeDetails: async (req, res) => {
        try {
            res.json(await staffShopeUseCase_1.default.getShopeWithStaffId(req.token.data));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
