"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffRepositoryGetQuery_1 = __importDefault(require("../../repository/staffRepository/staffRepositoryGetQuery"));
const staffRepositoryUpdateQuery_1 = __importDefault(require("../../repository/staffRepository/staffRepositoryUpdateQuery"));
exports.default = {
    getApprovedStaffs: async () => {
        try {
            return await staffRepositoryGetQuery_1.default.getApprovedStaffs();
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getNotApprovedStaffs: async () => {
        try {
            return await staffRepositoryGetQuery_1.default.getNotApprovedStaffs();
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    approveStaff: async (staffId) => {
        try {
            return await staffRepositoryUpdateQuery_1.default.approveTheStaff(staffId);
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    blockUnblockStaff: async (staffId) => {
        try {
            return await staffRepositoryUpdateQuery_1.default.blockUnblockStaff(staffId);
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
};
