import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Project from "../../schema/link";
import linkImpression from "../../schema/link-impression";
import linkClick from "../../schema/link-click";
import user from "../../schema/user";

const getProjects = async (req: Request, res: Response) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const userId = decoded.uuid;

    const existingUser = await user.User.findOne({ _id: userId });
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const userProjects = await Project.find({ userId, isDeleted: false });

    const projectsWithStats = userProjects.map(async (link) => {
      const clicks = await linkClick.countDocuments({ linkId: link._id });
      const impressions = await linkImpression.countDocuments({
        linkId: link._id,
      });

      return {
        id: link._id,
        title: link.title,
        url: link.url,
        isOn: link.isOn,
        clicks,
        impressions,
      };
    });

    const projectsWithStatsArray = await Promise.all(projectsWithStats);
    res.status(200).json({ projects: projectsWithStatsArray });
  } catch (error) {
    res.status(500).json({ message: "Error getting links", error });
  }
};

export default getProjects;
