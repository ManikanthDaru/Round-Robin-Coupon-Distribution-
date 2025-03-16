import express from "express";
import { getCoupons, claimCoupon, addCoupon, toggleCoupon } from "../controllers/coupon.controller.js";

const router = express.Router();

router.get("/",getCoupons);
router.post("/claim", claimCoupon);
router.post("/add", addCoupon);
router.patch("/toggle/:id",toggleCoupon);
export default router;
