import { ObjectId } from "mongoose"
import ShopeSchema from "../../entites/shopeEntite"
import { ShopData } from "../../types/StaffInterfaces"

export default {
    saveNewShop: async (data: ShopData, staff_Id: ObjectId) => {
        try {
            const shop = new ShopeSchema({
                ...data,
                location: {
                    type: 'Point',
                    coordinates: [data.shoplongitude, data.shoplatitude],
                },
                images: [data.Image1, data.Image2, data.Image3, data.Image4],
                staff_Id,
            });
            await shop.save();
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}