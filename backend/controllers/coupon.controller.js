import crypto from "crypto";

import Coupon from "../models/coupon.model.js";
import Claim from "../models/claim.model.js";

// Function to generate session ID (for tracking)
const generateSessionId = (req) => {
  return req.headers["user-agent"] + crypto.randomBytes(16).toString("hex");
};

// Fetch all coupons from database
export const getCoupons = async (req, res) => {
  try {
      const coupons = await Coupon.find({});
        res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Claim a coupon
export const claimCoupon = async (req, res) => {
  const userIP = req.ip;
  const userSession = generateSessionId(req);

    try {
      // checks if any coupon is claimed with the specific IP or sessionId
    const existingClaim = await Claim.findOne({
      $or: [{ ip: userIP }, { sessionId: userSession }],
    });

    if (existingClaim) {
      return res
        .status(400)
        .json({
          message: "You have already claimed a coupon. Try again later.",
        });
    }

    const coupon = await Coupon.findOne({ isClaimed: false });

    if (!coupon) {
      return res.status(400).json({ message: "No coupons available." });
    }

    // Mark coupon as claimed
      coupon.isClaimed = true;
    coupon.isClaimedBy = userIP;
    await coupon.save();

    // Store claim record
    const newClaim = new Claim({
      ip: userIP,
      sessionId: userSession,
      coupon: coupon._id,
    });
    await newClaim.save();

    res.json({ message: `You received coupon: ${coupon.couponCode}` });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Admin can add new coupons
export const addCoupon = async (req, res) => {
  try {
    const { couponCode,description } = req.body;
    const coupon = new Coupon({ couponCode, description });
    await coupon.save();
    res.json({ message: "Coupon added successfully." });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Admin can enable/disable the coupons 
export const toggleCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);

    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    // Toggle availability
    coupon.isAvailable = !coupon.isAvailable;
    await coupon.save();

    res.json({
      message: `Coupon ${
        coupon.isAvailable ? "Enabled" : "Disabled"
      } successfully`,
      coupon,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};