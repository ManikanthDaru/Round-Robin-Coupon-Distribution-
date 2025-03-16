import express from "express";
import claimHistory from "../controllers/claim.controller.js";

const router = express.Router();

router.get("/", claimHistory);

export default router;