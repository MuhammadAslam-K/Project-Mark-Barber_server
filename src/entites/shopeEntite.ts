import mongoose, { Schema } from "mongoose";

const shopeSchema: Schema = new Schema({
    shopeName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    },
    ownerMobile: {
        type: String,
    },
    shopeCoordinates: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
    },
    shopeLocation: {
        type: String,
    },
    services: [],
    images: {
        type: [String],
        required: true
    },
    shopeDescription: {
        type: String,
    },
    listedDate: {
        type: Date,
        default: Date.now
    }


})

const ShopeSchema = mongoose.model("staff", shopeSchema)

export default ShopeSchema