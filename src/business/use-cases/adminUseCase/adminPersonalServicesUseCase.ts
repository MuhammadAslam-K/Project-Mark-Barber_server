import personalServicesGetQuery from "../../../adapters/data-access/repositories/personalServicesRepository/personalServicesGetQuery";

export default {
    getAllpersonalServices: async () => {
        try {
            return personalServicesGetQuery.getAllPersonalServices()
        } catch (error) {
            throw new Error((error as Error).message);

        }
    }
}