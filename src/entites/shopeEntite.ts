import mongoose, { Schema } from "mongoose";

const shopeSchema: Schema = new Schema({
    shopeName: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    ownerMobile: { type: String, required: true },

    shopeCoordinates: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
    },

    shopeLocation: { type: String, required: true },
    services: { type: String, required: true },
    Image1: { type: String, required: true },
    Image2: { type: String, required: true },
    Image3: { type: String, required: true },
    Image4: { type: String, required: true },

    listedDate: { type: Date, default: Date.now },
    staff_Id: { type: String, required: true }


})

const ShopeSchema = mongoose.model("shope", shopeSchema)

export default ShopeSchema