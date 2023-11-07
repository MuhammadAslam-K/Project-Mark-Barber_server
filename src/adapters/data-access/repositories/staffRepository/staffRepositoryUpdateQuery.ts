import { ObjectId } from "mongoose";
import StaffSchema from "../../models/staff-model";

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

    updateTotalShope: async (staffId: ObjectId) => {
        try {
            return await StaffSchema.findByIdAndUpdate(
                staffId,
                { $inc: { totalShops: 1 } },
                { new: true }
            );
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    updateTotalPersonalServices: async (staffId: string) => {
        try {
            return await StaffSchema.findByIdAndUpdate(
                staffId,
                { $inc: { totalPersonalServices: 1 } },
                { new: true }
            );
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
}