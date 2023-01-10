import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Project from "../../schema/link";
import user from "../../schema/user";

const deleteProject = async (req: Request, res: Response) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = decoded.uuid;

    const existingUser = await user.User.findOne({ _id: userId });
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const { linkId } = req.query;
    const link = await Project.findOne({ _id: linkId, userId });
    if (!link) {
      return res.status(400).json({ message: "Project does not exist" });
    }

    link.isDeleted = true;
    await link.save();

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting link", error });
  }
};

export default deleteProject;
