import StaffSchema from "../../models/staff-model"
import { staffSignup } from "../../../../business/interfaces/signUp"

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