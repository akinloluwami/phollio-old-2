import express from "express";
import { getUser, userImpression } from "../controllers/user";

const router = express.Router();

router.get("/", getUser);
router.post("/impression", userImpression);

export default router;
