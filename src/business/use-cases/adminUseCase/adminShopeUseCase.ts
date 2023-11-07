import shopeRepositoryGetQuery from "../../../adapters/data-access/repositories/shopeRepository/shopeRepositoryGetQuery";

export default {
    getAllShopes: async () => {
        try {
            return await shopeRepositoryGetQuery.getAllShopes()
        } catch (error) {
            throw new Error((error as Error).message);

        }
    }
}