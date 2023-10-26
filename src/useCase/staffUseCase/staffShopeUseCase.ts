import { ObjectId } from "mongoose"
import { ShopData } from "../../types/StaffInterfaces"
import shopeRepositorySaveQuery from "../../repository/shopeRepository/shopeRepositorySaveQuery"
import staffRepositoryUpdateQuery from "../../repository/staffRepository/staffRepositoryUpdateQuery"
import shopeRepositoryGetQuery from "../../repository/shopeRepository/shopeRepositoryGetQuery"

export default {
    addNewShop: async (data: ShopData, staffId: ObjectId) => {
        try {
            await Promise.all([
                shopeRepositorySaveQuery.saveNewShop(data, staffId),
                staffRepositoryUpdateQuery.updateTotalSopNo(staffId)
            ])
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    getShopeWithStaffId: async (staffId: ObjectId) => {
        try {
            return await shopeRepositoryGetQuery.getShopWithStaffId(staffId)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}

