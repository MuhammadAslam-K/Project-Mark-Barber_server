"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffRepositoryGetQuery_1 = __importDefault(require("../../repository/staffRepository/staffRepositoryGetQuery"));
const staffRepositorySaveQuery_1 = __importDefault(require("../../repository/staffRepository/staffRepositorySaveQuery"));
const encriptionDecription_1 = __importDefault(require("../../services/encriptionDecription"));
exports.default = {
    signUp: async (data) => {
        try {
            const staffExistes = await staffRepositoryGetQuery_1.default.getStaffWithEmail(data.email);
            if (staffExistes) {
                throw Error("This Email exists signin");
            }
            else {
                data.password = await encriptionDecription_1.default.hashPassword(data.password);
                return await staffRepositorySaveQuery_1.default.saveNewStaff(data);
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
