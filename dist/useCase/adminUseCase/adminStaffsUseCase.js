"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffRepositoryGetQuery_1 = __importDefault(require("../../adapters/data-access/repositories/staffRepository/staffRepositoryGetQuery"));
const staffRepositoryUpdateQuery_1 = __importDefault(require("../../adapters/data-access/repositories/staffRepository/staffRepositoryUpdateQuery"));
exports.default = {
    getStaffs: async () => {
        try {
            const staffs = await staffRepositoryGetQuery_1.default.getAllStaffs();
            const approvedStaff = staffs.filter(staff => staff.adminApproved);
            const notApprovedStaff = staffs.filter(staff => !staff.adminApproved);
            return { approvedStaff, notApprovedStaff };
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
