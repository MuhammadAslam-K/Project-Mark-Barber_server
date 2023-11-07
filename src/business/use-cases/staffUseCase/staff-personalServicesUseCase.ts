import personalServicesGetQuery from "../../../adapters/data-access/repositories/personalServicesRepository/personalServicesGetQuery"
import personalServicesSaveQuery from "../../../adapters/data-access/repositories/personalServicesRepository/personalServicesSaveQuery"
import staffRepositoryUpdateQuery from "../../../adapters/data-access/repositories/staffRepository/staffRepositoryUpdateQuery"
import { personaServices } from "../../interfaces/StaffInterfaces"

export default {
    addNewPersonalService: async (data: personaServices, staffId: string) => {
        try {
            const checkMobileExists = await personalServicesGetQuery.getPersonByMobile(data.mobile)
            if (checkMobileExists) {
                throw new Error("Mobile number already exists")
            } else {
                const checkEmailExists = await personalServicesGetQuery.getPersonByEmail(data.email)
                if (checkEmailExists) {
                    throw new Error("Email already exists")
                } else {
                    return await Promise.all([
                        personalServicesSaveQuery.addNewPersonalService(data, staffId),
                        staffRepositoryUpdateQuery.updateTotalPersonalServices(staffId)
                    ])
                }
            }

        } catch (error) {
            throw new Error((error as Error).message)
        }
    },


    getAllPersonalServicesByStaffId: async (staff_id: string) => {
        try {
            return await personalServicesGetQuery.getByStaffId(staff_id)
        } catch (error) {
            throw new Error((error as Error).message);

        }
    }
}

