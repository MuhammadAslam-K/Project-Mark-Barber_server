"use strict";
// import mongoose, { Schema } from "mongoose";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const mongoose_1 = __importStar(require("mongoose"));
const shopeSchema = new mongoose_1.Schema({
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
// Create a 2dsphere index on the location field for geospatial queries
shopeSchema.index({ location: "2dsphere" });
const ShopeSchema = mongoose_1.default.model("shope", shopeSchema);
exports.default = ShopeSchema;
