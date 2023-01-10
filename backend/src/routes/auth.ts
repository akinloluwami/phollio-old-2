import express from "express";
import {
  checkEmail,
  checkUsername,
  login,
  resendVerificationEmail,
  signup,
  verifyEmail,
} from "../controllers/auth";

const router = express.Router();

router.post("/signup", signup);
router.post("/verify-email", verifyEmail);
router.post("/resend-verification-email", resendVerificationEmail);
router.post("/login", login);
router.get("/check-username", checkUsername);
router.get("/check-email", checkEmail);

export default router;
