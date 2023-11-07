"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staff_personalServicesUseCase_1 = __importDefault(require("../../../business/use-cases/staffUseCase/staff-personalServicesUseCase"));
exports.default = {
    addNewPersonalService: async (req, res) => {
        try {
            res.json(await staff_personalServicesUseCase_1.default.addNewPersonalService(req.body, req.token.data));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getPersonalServices: async (req, res) => {
        try {
            res.json(await staff_personalServicesUseCase_1.default.getAllPersonalServicesByStaffId(req.token.data));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
