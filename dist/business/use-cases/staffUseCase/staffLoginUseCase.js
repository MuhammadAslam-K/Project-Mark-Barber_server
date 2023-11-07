"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staffRepositoryGetQuery_1 = __importDefault(require("../../../adapters/data-access/repositories/staffRepository/staffRepositoryGetQuery"));
const encriptionDecription_1 = __importDefault(require("../../../adapters/external-services/encriptionDecription"));
exports.default = {
    login: async (data) => {
        try {
            const staffExistes = await staffRepositoryGetQuery_1.default.getStaffWithEmail(data.email);
            if (staffExistes) {
                const checkPassword = await encriptionDecription_1.default.comparePassword(data.password, staffExistes.password);
                if (checkPassword) {
                    if (staffExistes.adminApproved) {
                        if (staffExistes.blocked) {
                            throw new Error("Your Account had been blocked by Admin");
                        }
                        else {
                            const token = encriptionDecription_1.default.createToken(staffExistes._id, "staff", "5h");
                            return token;
                        }
                    }
                    else {
                        throw new Error("Admin had not been approved your request");
                    }
                }
                else {
                    throw new Error("Incorrect Email or Password");
                }
            }
            else {
                throw new Error("This Email is not Registered");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
