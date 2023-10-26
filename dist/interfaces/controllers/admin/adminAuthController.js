"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminLoginUseCase_1 = __importDefault(require("../../../useCase/adminUseCase/adminLoginUseCase"));
exports.default = {
    login: async (req, res) => {
        try {
            res.json(await adminLoginUseCase_1.default.validateAdmin(req.body));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
