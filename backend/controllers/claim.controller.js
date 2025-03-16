import Claim from "../models/claim.model.js";
import Coupon from "../models/coupon.model.js";

const claimHistory = async (req, res) => {
  try {
    const claims = await Claim.find().populate("coupon", "couponCode");

    res.json(
      claims.map((claim) => ({
        ip: claim.ip,
        sessionId: claim.sessionId,
        couponCode: claim.coupon ? claim.coupon.couponCode : "Unknown",
        claimedAt: claim.claimedAt,
      }))
    );
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export default claimHistory;