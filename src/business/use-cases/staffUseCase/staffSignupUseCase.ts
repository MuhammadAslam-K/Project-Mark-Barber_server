import staffRepositoryGetQuery from "../../../adapters/data-access/repositories/staffRepository/staffRepositoryGetQuery";
import staffRepositorySaveQuery from "../../../adapters/data-access/repositories/staffRepository/staffRepositorySaveQuery";
import { staffSignup } from "../../interfaces/signUp";
import encriptionDecription from "../../../adapters/external-services/encriptionDecription";

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