import { ObjectId } from "mongoose"
import StaffSchema from "../../models/staff-model"

export default {
    getStaffWithEmail: async (email: string) => {
        try {
            const result = await StaffSchema.findOne({ email: email })
            return result ? result : false
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    getAllStaffs: async () => {
        try {
            return await StaffSchema.find()
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },


    getTotalCount: async () => {
        try {
            return await StaffSchema.find().count()
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    getCountOfShopByStaffId: async (staffId: ObjectId) => {
        try {
            const result = await StaffSchema.findById(staffId)
            return result ? result.totalShops : 0
        } catch (error) {
            throw new Error((error as Error).message);

        }
    }
}