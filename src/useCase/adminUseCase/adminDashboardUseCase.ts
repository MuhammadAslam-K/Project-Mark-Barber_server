import shopeRepositoryGetQuery from "../../repository/shopeRepository/shopeRepositoryGetQuery";
import staffRepositoryGetQuery from "../../repository/staffRepository/staffRepositoryGetQuery";

export default {
    getDashboardData: async () => {
        try {
            const [totalStaffs, totalShops] = await Promise.all([
                staffRepositoryGetQuery.getTotalCount(),
                shopeRepositoryGetQuery.getTotalCount()
            ]);
            return { totalStaffs, totalShops }
        } catch (error) {
            throw new Error((error as Error).message);

        }
    }
}