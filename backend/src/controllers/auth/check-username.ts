import { Request, Response } from "express";
import User from "../../schema/user";
import validator from "validator";

const checkUsername = async (req: Request, res: Response) => {
  try {
    const username = req.query.username as string;

    if (!username) {
      return res.status(400).json({ message: "Username is required" });
    }

    const existingUser = await User.User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    if (username.length < 4 || username.length > 20) {
      return res
        .status(400)
        .json({ message: "Username must be between 4 and 20 characters" });
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return res.status(400).json({
        message: "Username can only contain letters and numbers",
      });
    }

    res.status(200).json({ message: "Username is available" });
  } catch (error) {
    res.status(500).json({ message: "Error checking username", error });
  }
};

export default checkUsername;
