import mongoose from "mongoose";
import Coupon from "../models/coupon.model.js";
import Admin from "../models/admin.model.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedCoupons = async () => {
  await Coupon.deleteMany({});
  await Coupon.insertMany([
      {
          couponCode: "DISCOUNT50",
          description: "Get 50% off!",
          isClaimed: false
      },
      {
          couponCode: "FREESHIP",
          description: "Free shipping!",
          isClaimed: false
      },
        {
        couponCode: "WELCOME10",
        description: "₹10 off first order!",
        isClaimed: false,
        }
  ]);
  console.log("Coupons Seeded!");
};

const seedAdmin = async () => {
  await Admin.deleteMany({});
  await Admin.create({
    email: "admin@example.com",
    password: "123456",
  });
  console.log("Admin Seeded!");
};

const seedDatabase = async () => {
  await seedCoupons();
  await seedAdmin();
  mongoose.connection.close();
};

seedDatabase();
