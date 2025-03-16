import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import couponRoutes from "./routes/coupon.route.js";
import claimRoutes from "./routes/claim.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.set("trust proxy", true);

app.use(
  cors({
    origin: "https://round-robin-coupon-distribution-app.onrender.com", // Allow frontend
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
); // allows cross origin resource sharing
app.use(express.json()); // payload is parse as JSON data

app.use("/api/auth", authRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/claims", claimRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})