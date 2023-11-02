import { ObjectId } from "mongoose";
import StaffSchema from "../../entites/staffEntite";

export default {
    approveTheStaff: async (staffId: string) => {
        try {
            return await StaffSchema.findByIdAndUpdate(
                staffId,
                { adminApproved: true },
                { new: true },
            )
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    blockUnblockStaff: async (staffId: string) => {
        try {
            const staff = await StaffSchema.findById(staffId)
            if (staff) {
                staff.blocked = !staff.blocked
                await staff.save()
            }
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    updateTotalSopNo: async (staffId: ObjectId) => {
        try {
            const staff = await StaffSchema.findById(staffId)
            if (staff) {
                const count = staff.totalShops
                staff.totalShops = count + 1
                return await staff.save()
            }


        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}