import { ObjectId } from "mongoose";
import ShopeSchema from "../../entites/shopeEntite";

export default {

    getTotalCount: async () => {
        try {
            return await ShopeSchema.find().count()
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    getShopWithStaffId: async (staffId: ObjectId) => {
        try {
            return await ShopeSchema.find({ staff_id: staffId })
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}