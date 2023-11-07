"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personalServicesGetQuery_1 = __importDefault(require("../../../adapters/data-access/repositories/personalServicesRepository/personalServicesGetQuery"));
const personalServicesSaveQuery_1 = __importDefault(require("../../../adapters/data-access/repositories/personalServicesRepository/personalServicesSaveQuery"));
const staffRepositoryUpdateQuery_1 = __importDefault(require("../../../adapters/data-access/repositories/staffRepository/staffRepositoryUpdateQuery"));
exports.default = {
    addNewPersonalService: async (data, staffId) => {
        try {
            const checkMobileExists = await personalServicesGetQuery_1.default.getPersonByMobile(data.mobile);
            if (checkMobileExists) {
                throw new Error("Mobile number already exists");
            }
            else {
                const checkEmailExists = await personalServicesGetQuery_1.default.getPersonByEmail(data.email);
                if (checkEmailExists) {
                    throw new Error("Email already exists");
                }
                else {
                    return await Promise.all([
                        personalServicesSaveQuery_1.default.addNewPersonalService(data, staffId),
                        staffRepositoryUpdateQuery_1.default.updateTotalPersonalServices(staffId)
                    ]);
                }
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    getAllPersonalServicesByStaffId: async (staff_id) => {
        try {
            return await personalServicesGetQuery_1.default.getByStaffId(staff_id);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
