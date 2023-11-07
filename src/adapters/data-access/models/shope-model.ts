// import mongoose, { Schema } from "mongoose";

// const shopeSchema: Schema = new Schema({
//     shopeName: { type: String, required: true },
//     ownerName: { type: String, required: true },
//     ownerEmail: { type: String, required: true },
//     ownerMobile: { type: String, required: true },

//     location: {
//         type: {
//             type: String,
//             enum: ['Point'],
//             default: 'Point',
//         },
//         coordinates: {
//             type: [Number],
//             required: true,
//         },
//     },

//     shopeLocation: { type: String, required: true },
//     services: { type: String, required: true },
//     images: [{ type: String, required: true, }],
//     listedDate: { type: Date, default: Date.now },
//     staff_Id: { type: String, required: true }


// })

// const ShopeSchema = mongoose.model("shope", shopeSchema)

// export default ShopeSchema


import mongoose, { Schema } from "mongoose";

const shopeSchema: Schema = new Schema({
    shopeName: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    ownerMobile: { type: String, required: true },
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
    shopeLocation: { type: String, required: true },
    services: { type: String, required: true },
    images: [{ type: String, required: true }],
    listedDate: { type: Date, default: Date.now },
    staff_Id: { type: String, required: true }
});


shopeSchema.index({ location: "2dsphere" });

const ShopeSchema = mongoose.model("shope", shopeSchema);

export default ShopeSchema;
