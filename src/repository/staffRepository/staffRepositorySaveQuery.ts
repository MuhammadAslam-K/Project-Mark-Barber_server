import StaffSchema from "../../entites/staffEntite"
import { staffSignup } from "../../types/signUp"

export default {
    saveNewStaff: async (data: staffSignup) => {
        try {
            const result = new StaffSchema({
                ...data,
            })
            return await result.save()
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}