import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Project from "../../schema/project";
import projectImpression from "../../schema/project-impression";
import projectClick from "../../schema/project-click";
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

    const projectsWithStats = userProjects.map(async (project) => {
      const clicks = await projectClick.countDocuments({
        projectId: project._id,
      });
      const impressions = await projectImpression.countDocuments({
        projectId: project._id,
      });

      return {
        id: project._id,
        title: project.title,
        url: project.url,
        isOn: project.isOn,
        clicks,
        impressions,
      };
    });

    const projectsWithStatsArray = await Promise.all(projectsWithStats);
    res.status(200).json({ projects: projectsWithStatsArray });
  } catch (error) {
    res.status(500).json({ message: "Error getting projects", error });
  }
};

export default getProjects;
