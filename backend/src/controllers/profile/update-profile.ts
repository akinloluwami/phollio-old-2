import User from "../../schema/user";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const updateProfile = async (req: Request, res: Response) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = decoded.uuid;

    const { username, displayName, bio } = req.body;
    const user = await User.User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!username || !displayName) {
      return res
        .status(400)
        .json({ message: "Username and display name cannot be empty" });
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return res.status(400).json({
        message: "Username can only contain letters and numbers",
      });
    }

    const userNameExist = await User.User.find({ username });

    if (
      userNameExist.length > 0 &&
      userNameExist[0].username !== user.username
    ) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    user.username = username.trim().toLowerCase();
    user.displayName = displayName;
    user.bio = bio;

    await user.save();

    return res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error updating profile", error });
  }
};

export default updateProfile;
