// this coupon model is used to store the coupon details in the database

import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    couponCode: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    isClaimed: {
        type: Boolean,
        default: false
    },
    isClaimedBy: {
        type: [String], // stores Ip address of the user or session id
        default: []
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
})

const Coupon = mongoose.model("Coupon", couponSchema);
export default Coupon;
