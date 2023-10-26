"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminStaffsUseCase_1 = __importDefault(require("../../../useCase/adminUseCase/adminStaffsUseCase"));
exports.default = {
    getApprovedStaffs: async (req, res) => {
        try {
            res.json(await adminStaffsUseCase_1.default.getApprovedStaffs());
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getNotApprovedStaffs: async (req, res) => {
        try {
            res.json(await adminStaffsUseCase_1.default.getNotApprovedStaffs());
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    approveStaff: async (req, res) => {
        try {
            res.json(await adminStaffsUseCase_1.default.approveStaff(req.body.staffId));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    blockUnblockStaff: async (req, res) => {
        try {
            res.json(await adminStaffsUseCase_1.default.blockUnblockStaff(req.body.staffId));
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};