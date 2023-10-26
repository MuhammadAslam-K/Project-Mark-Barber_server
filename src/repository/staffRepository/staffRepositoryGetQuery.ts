import StaffSchema from "../../entites/staffEntite"

export default {
    getStaffWithEmail: async (email: string) => {
        try {
            const result = await StaffSchema.findOne({ email: email })
            return result ? result : false
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    getApprovedStaffs: async () => {
        try {
            const result = await StaffSchema.find({ adminApproved: true })
            return result ? result : false
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    getNotApprovedStaffs: async () => {
        try {
            const result = await StaffSchema.find({ adminApproved: false })
            return result ? result : false
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
    }
}