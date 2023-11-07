import { ObjectId } from "mongoose"
import { ShopData } from "../../interfaces/StaffInterfaces"
import shopeRepositorySaveQuery from "../../../adapters/data-access/repositories/shopeRepository/shopeRepositorySaveQuery"
import staffRepositoryUpdateQuery from "../../../adapters/data-access/repositories/staffRepository/staffRepositoryUpdateQuery"
import shopeRepositoryGetQuery from "../../../adapters/data-access/repositories/shopeRepository/shopeRepositoryGetQuery"

export default {
    addNewShop: async (data: ShopData, staffId: ObjectId) => {
        try {
            await Promise.all([
                shopeRepositorySaveQuery.saveNewShop(data, staffId),
                staffRepositoryUpdateQuery.updateTotalShope(staffId)
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

