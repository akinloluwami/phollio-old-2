import express from "express";
import { getBasicInfo, updateProfile } from "../controllers/profile";

const router = express.Router();

router.get("/basic-info", getBasicInfo);
router.post("/update", updateProfile);

export default router;
