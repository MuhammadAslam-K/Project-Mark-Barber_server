import { ObjectId } from "mongoose"
import ShopeSchema from "../../entites/shopeEntite"
import { ShopData } from "../../types/StaffInterfaces"

export default {
    saveNewShop: async (data: ShopData, staff_Id: ObjectId) => {
        try {
            const shop = new ShopeSchema({
                ...data,
                'shopeCoordinates.latitude': data.shoplatitude,
                'shopeCoordinates.longitude': data.shoplongitude,
                staff_Id,
            })
            await shop.save()
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}

