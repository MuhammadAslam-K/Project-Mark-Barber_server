import mongoose, { Schema } from "mongoose";

const personalServicesSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, required: true },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    personalLocation: { type: String, required: true },
    services: { type: String, required: true },
    images: [{ type: String, required: true }],
    listedDate: { type: Date, default: Date.now },

    staff_Id: {
        type: Schema.Types.ObjectId,
        ref: 'staff',
        required: true
    },
    // staff_Id: { type: String, required: true }
});


personalServicesSchema.index({ location: "2dsphere" });

const PersonalServicesSchema = mongoose.model("personalServices", personalServicesSchema);

export default PersonalServicesSchema;
