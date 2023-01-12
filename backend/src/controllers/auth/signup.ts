import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import validator from "validator";
import user from "../../schema/user";
import speakeasy from "speakeasy";
import jwt, { Secret } from "jsonwebtoken";

const signup = async (req: Request, res: Response) => {
  try {
    const { displayName, username, email, password, confirmPassword } =
      req.body;

    if (!displayName || !username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (username.length < 4 || username.length > 20) {
      return res
        .status(400)
        .json({ message: "Username must be between 4 and 20 characters" });
    }
    if (displayName.length < 4 || username.length > 20) {
      return res
        .status(400)
        .json({ message: "Display name must be between 4 and 20 characters" });
    }

    const existingUsername = await user.User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username is already taken" });
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return res.status(400).json({
        message: "Username can only contain letters and numbers",
      });
    }

    const existingEmail = await user.User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email is already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const secret = speakeasy.generateSecret({ length: 20 }).base32;
    const otp = speakeasy.totp({ secret, digits: 6 });

    const otpExpiry = new Date();
    otpExpiry.setMinutes(otpExpiry.getMinutes() + 30);

    const newUser = new user.User({
      displayName,
      username,
      email,
      password: hashedPassword,
      otp,
      otpExpiry,
    });

    const token: Secret = jwt.sign(
      { uuid: newUser._id },
      process.env.JWT_SECRET!
    );

    await newUser.save();

    //Send verification email

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

export default signup;
