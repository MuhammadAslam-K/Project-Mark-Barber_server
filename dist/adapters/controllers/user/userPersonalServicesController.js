"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userPersonalServicesUseCase_1 = __importDefault(require("../../../business/use-cases/user/userPersonalServicesUseCase"));
exports.default = {
    getNearestPersonalServices: async (req, res) => {
        try {
            res.json(await userPersonalServicesUseCase_1.default.getNearByPersonalServices(req.body));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAllPersonalServices: async (req, res) => {
        try {
            res.json(await userPersonalServicesUseCase_1.default.getAllPersonalServices());
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
