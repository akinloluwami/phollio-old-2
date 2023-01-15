import express from "express";
import {
  getBasicInfo,
  updateProfile,
  uploadProfilePicture,
} from "../controllers/profile";

const router = express.Router();

router.get("/basic-info", getBasicInfo);
router.post("/update", updateProfile);
router.post("/profile-picture", uploadProfilePicture);

export default router;
