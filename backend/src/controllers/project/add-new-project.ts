import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import validator from "validator";
import Link from "../../schema/link";
import user from "../../schema/user";

const addProject = async (req: Request, res: Response) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { title, url } = req.body;
    const token = req.headers.authorization.split(" ")[1];

    if (!title || !url || !token) {
      return res.status(400).json({ message: "Title and url are required" });
    }

    if (!validator.isURL(url)) {
      return res.status(400).json({ message: "Invalid url" });
    }

    if (title.length < 3) {
      return res
        .status(400)
        .json({ message: "Title must be at least 3 characters long" });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = decoded.uuid;

    const existingUser = await user.User.findOne({ _id: userId });
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const newLink = new Link({
      title,
      url,
      userId,
    });

    await newLink.save();

    res.status(201).json({ message: "Link added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding link", error });
  }
};

export default addProject;
