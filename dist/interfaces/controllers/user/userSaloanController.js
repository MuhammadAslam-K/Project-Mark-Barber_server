"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSaloanUseCase_1 = __importDefault(require("../../../useCase/user/userSaloanUseCase"));
exports.default = {
    getNearestSaloan: async (req, res) => {
        try {
            res.json(await userSaloanUseCase_1.default.getNearbySaloan(req.body));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllSaloan: async (req, res) => {
        try {
            res.json(await userSaloanUseCase_1.default.getAllSaloan());
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
