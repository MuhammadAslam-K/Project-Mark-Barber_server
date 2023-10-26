import { ObjectId } from "mongoose"
import staffRepositoryGetQuery from "../../repository/staffRepository/staffRepositoryGetQuery";
import staffRepositorySaveQuery from "../../repository/staffRepository/staffRepositorySaveQuery";
import { staffSignup } from "../../types/signUp";
import encriptionDecription from "../../services/encriptionDecription";

export default {
    signUp: async (data: staffSignup) => {
        try {
            const staffExistes = await staffRepositoryGetQuery.getStaffWithEmail(data.email)
            if (staffExistes) {
                throw Error("This Email exists signin")
            }
            else {
                data.password = await encriptionDecription.hashPassword(data.password)
                return await staffRepositorySaveQuery.saveNewStaff(data)
            }
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}