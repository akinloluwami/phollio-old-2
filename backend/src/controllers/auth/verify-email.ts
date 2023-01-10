import { Request, Response } from "express";
import User from "../../schema/user";

const verifyEmail = async (req: Request, res: Response) => {
  try {
    const { id, otp } = req.body;

    if (!id || !otp) {
      return res.status(400).json({ message: "Id and OTP are required" });
    }

    const userRecord: any = await User.User.findById(id);

    if (!userRecord) {
      return res.status(404).json({ message: "User not found" });
    }

    if (userRecord.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (userRecord.otpExpiry < new Date()) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    userRecord.isEmailVerified = true;
    userRecord.emailVerifiedTime = new Date();
    userRecord.otp = null;
    userRecord.otpExpiry = null;

    await userRecord.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error verifying email", error });
  }
};

export default verifyEmail;
