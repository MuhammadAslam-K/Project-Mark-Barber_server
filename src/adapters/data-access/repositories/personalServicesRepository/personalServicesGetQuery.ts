import PersonalServicesSchema from "../../models/personalServices";

export default {
    getPersonByMobile: async (mobile: string) => {
        try {
            return await PersonalServicesSchema.findOne({ mobile: mobile })
        } catch (error) {
            throw new Error((error as Error).message);

        }
    },

    getPersonByEmail: async (email: string) => {
        try {
            return await PersonalServicesSchema.findOne({ email: email })
        } catch (error) {
            throw new Error((error as Error).message);

        }
    },

    getByStaffId: async (staff_Id: string) => {
        try {
            return await PersonalServicesSchema.find({ staff_Id: staff_Id })
        } catch (error) {
            throw new Error((error as Error).message);

        }
    },

    getAllPersonalServices: async () => {
        try {
            return await PersonalServicesSchema.find()
        } catch (error) {
            throw new Error((error as Error).message);

        }
    },


    findNearestpersonalServicesByUserLatAndLong: async (latitude: number, longitude: number, radius: number) => {
        try {
            if (isNaN(latitude) || isNaN(longitude)) {
                throw new Error('Invalid latitude or longitude values');
            }

            const nearbyShops = await PersonalServicesSchema.find({
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude],
                        },
                        $maxDistance: radius,
                    },
                },
            })

            return nearbyShops;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
}