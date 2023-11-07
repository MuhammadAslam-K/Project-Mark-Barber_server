import staffRepositoryGetQuery from "../../../adapters/data-access/repositories/staffRepository/staffRepositoryGetQuery"
import staffRepositoryUpdateQuery from "../../../adapters/data-access/repositories/staffRepository/staffRepositoryUpdateQuery"

export default {
    getStaffs: async () => {
        try {
            const staffs = await staffRepositoryGetQuery.getAllStaffs()
            const approvedStaff = staffs.filter((staff) => staff.adminApproved)
            const notApprovedStaff = staffs.filter((staff) => !staff.adminApproved)

            return { approvedStaff, notApprovedStaff }
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },


    approveStaff: async (staffId: string) => {
        try {
            return await staffRepositoryUpdateQuery.approveTheStaff(staffId)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    blockUnblockStaff: async (staffId: string) => {
        try {
            return await staffRepositoryUpdateQuery.blockUnblockStaff(staffId)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },
}