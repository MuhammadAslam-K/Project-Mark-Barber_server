import { ObjectId } from "mongoose"
import ShopeSchema from "../../models/shope-model";
import { ShopData } from "../../../../business/interfaces/StaffInterfaces";

export default {
    saveNewShop: async (data: ShopData, staff_Id: ObjectId) => {
        console.log("data", data)
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
            console.log(error)
            throw new Error((error as Error).message);
        }
    }
}