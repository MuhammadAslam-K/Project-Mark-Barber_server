import { ObjectId } from "mongoose"
import staffRepositoryGetQuery from "../../repository/staffRepository/staffRepositoryGetQuery"
import staffRepositoryUpdateQuery from "../../repository/staffRepository/staffRepositoryUpdateQuery"

export default {
    getApprovedStaffs: async () => {
        try {
            return await staffRepositoryGetQuery.getApprovedStaffs()
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    getNotApprovedStaffs: async () => {
        try {
            return await staffRepositoryGetQuery.getNotApprovedStaffs()
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    approveStaff: async (staffId: ObjectId) => {
        try {
            return await staffRepositoryUpdateQuery.approveTheStaff(staffId)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    blockUnblockStaff: async (staffId: ObjectId) => {
        try {
            return await staffRepositoryUpdateQuery.blockUnblockStaff(staffId)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },
}