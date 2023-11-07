import personalServicesGetQuery from "../../../adapters/data-access/repositories/personalServicesRepository/personalServicesGetQuery";

export default {
    getNearByPersonalServices: async (data: { latitude: string, longitude: string }) => {
        try {
            const longitude = parseFloat(data.longitude);
            const latitude = parseFloat(data.latitude);

            const MetersPerKilometer = 1000;
            const radius = 10 * MetersPerKilometer;

            return await personalServicesGetQuery.findNearestpersonalServicesByUserLatAndLong(latitude, longitude, radius)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    getAllPersonalServices: async () => {
        try {
            return personalServicesGetQuery.getAllPersonalServices()
        } catch (error) {
            throw new Error((error as Error).message);

        }
    }
}