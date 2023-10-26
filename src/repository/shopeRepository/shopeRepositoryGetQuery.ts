export default {

    getTotalCount: async () => {
        try {
            return 5
        } catch (error) {
            throw new Error((error as Error).message);

        }
    }
}