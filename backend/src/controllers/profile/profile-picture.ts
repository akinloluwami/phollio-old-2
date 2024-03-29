import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import User from "../../schema/user";
import jwt from "jsonwebtoken";
import cloudinaryConfig from "../../config/cloudinary";

const uploadProfilePicture = async (req: Request, res: Response) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = decoded.uuid;

    const user = await User.User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const file: any = req.file;

    if (!file) {
      return res
        .status(400)
        .json({ message: "Please select an image to upload" });
    }

    const result = await cloudinaryConfig.uploader.upload(file.tempFilePath, {
      folder: "profile-pictures",
      public_id: `phollio_${user._id}${Date.now()}`,
      resource_type: "image",
    });
    user.profilePicture = result.secure_url;
    await user.save();
    return res.status(200).json({
      message: "Profile picture uploaded successfully",
      profilePicture: result.secure_url,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error uploading profile picture", error });
  }
};

export default uploadProfilePicture;
