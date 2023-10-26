import shopeRepositoryGetQuery from "../../repository/shopeRepository/shopeRepositoryGetQuery"

export default {
    getNearbySaloan: async (data: { latitude: string, longitude: string }) => {
        try {
            const longitude = parseFloat(data.longitude);
            const latitude = parseFloat(data.latitude);

            const MetersPerKilometer = 1000;
            const radius = 1 * MetersPerKilometer;

            return await shopeRepositoryGetQuery.findNearestByUserLatAndLong(latitude, longitude, radius)
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