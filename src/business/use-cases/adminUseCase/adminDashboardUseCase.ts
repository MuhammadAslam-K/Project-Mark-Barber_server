import shopeRepositoryGetQuery from "../../../adapters/data-access/repositories/shopeRepository/shopeRepositoryGetQuery";
import staffRepositoryGetQuery from "../../../adapters/data-access/repositories/staffRepository/staffRepositoryGetQuery";

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