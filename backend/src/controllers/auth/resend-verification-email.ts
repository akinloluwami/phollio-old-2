import { Request, Response } from "express";
import User from "../../schema/user";
import speakeasy from "speakeasy";

const resendVerificationEmail = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Id is required" });
    }

    const user = await User.User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if OTP was sent within the past 2 minutes
    if (user.otpExpiry && user.otpExpiry > new Date()) {
      const timeRemaining = user.otpExpiry.getTime() - new Date().getTime();
      const minutes = Math.round(timeRemaining / 60000);
      return res.status(400).json({
        message: `OTP was already sent within the past 2 minutes. Please try again in ${minutes} minutes.`,
      });
    }

    // Generate new OTP
    const secret = speakeasy.generateSecret({ length: 20 }).base32;
    const otp = speakeasy.totp({ secret, digits: 6 });

    // Set new OTP expiry time to 2 minutes
    let otpExpiry = new Date();
    otpExpiry.setMinutes(otpExpiry.getMinutes() + 2);

    // If the user has previously requested an OTP, increment the expiry time by 1 minute
    if (user.otpExpiry) {
      otpExpiry.setMinutes(otpExpiry.getMinutes() + 1);
    }

    user.otp = otp;
    user.otpExpiry = otpExpiry;

    await user.save();

    // Send OTP

    // Send OTP to user's email address
    // SendEmail(user.email, otp);

    res.status(200).json({ message: "OTP resent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error resending OTP", error });
  }
};

export default resendVerificationEmail;
