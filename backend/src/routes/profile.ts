import express from "express";
import { getBasicInfo } from "../controllers/profile";

const router = express.Router();

router.get("/basic-info", getBasicInfo);

export default router;
