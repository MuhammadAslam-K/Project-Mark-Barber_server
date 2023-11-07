"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffLoginUseCase_1 = __importDefault(require("../../../business/use-cases/staffUseCase/staffLoginUseCase"));
const staffSignupUseCase_1 = __importDefault(require("../../../business/use-cases/staffUseCase/staffSignupUseCase"));
exports.default = {
    login: async (req, res) => {
        try {
            res.json(await staffLoginUseCase_1.default.login(req.body));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    signUp: async (req, res) => {
        try {
            res.json(await staffSignupUseCase_1.default.signUp(req.body));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
