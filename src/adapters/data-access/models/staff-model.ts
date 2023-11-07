import mongoose, { Schema } from "mongoose";

const staffSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    mobile: {
        type: Number
    },
    totalShops: {
        type: Number,
        default: 0
    },
    totalPersonalServices: {
        type: Number,
        default: 0
    },
    adminApproved: {
        type: Boolean,
        default: false
    },
    blocked: {
        type: Boolean,
        default: false
    }
})

const StaffSchema = mongoose.model("staff", staffSchema)

export default StaffSchema