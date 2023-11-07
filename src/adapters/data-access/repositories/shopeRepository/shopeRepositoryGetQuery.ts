import { ObjectId } from "mongoose";
import ShopeSchema from "../../models/shope-model";

export default {

    getTotalCount: async () => {
        try {
            return await ShopeSchema.find().count()
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    getShopWithStaffId: async (staffId: ObjectId) => {
        try {
            return await ShopeSchema.find({ staff_Id: staffId })
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },

    findNearestByUserLatAndLong: async (latitude: number, longitude: number, radius: number) => {
        try {
            if (isNaN(latitude) || isNaN(longitude)) {
                throw new Error('Invalid latitude or longitude values');
            }

            const nearbyShops = await ShopeSchema.find({
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

    getAllShopes: async () => {
        try {
            return ShopeSchema.find()
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}