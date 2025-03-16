// this is the model for the claim details of the coupon

import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    sessionId: {
        type: String,
        required: true
    },
    coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon"
    },
    claimedAt: {
        type: Date,
        default: Date.now
    }
});

const Claim = mongoose.model("Claim", claimSchema);

export default Claim;
