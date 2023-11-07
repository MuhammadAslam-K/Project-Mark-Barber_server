"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminShopeUseCase_1 = __importDefault(require("../../../business/use-cases/adminUseCase/adminShopeUseCase"));
exports.default = {
    getAllShopes: async (req, res) => {
        try {
            res.json(await adminShopeUseCase_1.default.getAllShopes());
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
