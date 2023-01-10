import { Request, Response } from "express";
import User from "../../schema/user";
import validator from "validator";

const checkEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existingUser = await User.User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already taken" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    res.status(200).json({ message: "Email is available" });
  } catch (error) {
    res.status(500).json({ message: "Error checking email", error });
  }
};

export default checkEmail;
