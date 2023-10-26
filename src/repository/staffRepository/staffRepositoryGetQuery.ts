import StaffSchema from "../../entites/staffEntite"

export default {
    getStaffWithEmail: async (email: string) => {
        try {
            const result = await StaffSchema.findOne({ email: email })
            return result ? result : false
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}