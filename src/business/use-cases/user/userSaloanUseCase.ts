import shopeRepositoryGetQuery from "../../../adapters/data-access/repositories/shopeRepository/shopeRepositoryGetQuery"

export default {
    getNearbySaloan: async (data: { latitude: string, longitude: string }) => {
        try {
            const longitude = parseFloat(data.longitude);
            const latitude = parseFloat(data.latitude);

            const MetersPerKilometer = 1000;
            const radius = 10 * MetersPerKilometer;

            return await shopeRepositoryGetQuery.findNearestSalonByUserLatAndLong(latitude, longitude, radius)
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },

    getAllSaloan: async () => {
        try {
            return await shopeRepositoryGetQuery.getAllShopes()
        } catch (error) {
            throw new Error((error as Error).message)
        }
    },
}