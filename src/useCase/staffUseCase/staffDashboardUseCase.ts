import { ObjectId } from "mongoose"
import staffRepositoryGetQuery from "../../repository/staffRepository/staffRepositoryGetQuery"

export default {
    getStaffDashboardData: async (staffId: ObjectId) => {
        try {
            return staffRepositoryGetQuery.getCountOfShopByStaffId(staffId)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}