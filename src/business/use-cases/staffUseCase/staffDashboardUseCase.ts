import { ObjectId } from "mongoose"
import staffRepositoryGetQuery from "../../../adapters/data-access/repositories/staffRepository/staffRepositoryGetQuery"

export default {
    getStaffDashboardData: async (staffId: ObjectId) => {
        try {
            return staffRepositoryGetQuery.getCountOfShopByStaffId(staffId)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}