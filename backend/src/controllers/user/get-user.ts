import { Request, Response } from "express";
import Link from "../../schema/link";
import Project from "../../schema/project";
import User from "../../schema/user";

const getUser = async (req: Request, res: Response) => {
  const user = req.query.username;
  const UserData = await User.User.findOne({ username: user });
  if (!UserData) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  //   if (!UserData.isEmailVerified) {
  //     return res.status(400).json({
  //       message: "This profile is not yet verified",
  //     });
  //   }
  const userId = UserData._id;

  const userLinks = await Link.find({ userId });

  const userProjects = await Project.find({ userId });

  const { username, bio, displayName } = UserData;

  const links: any = [];
  const projects: any = [];

  userLinks.forEach((link) => {
    links.push({ title: link.title, url: link.url });
  });

  userProjects.forEach((project) => {
    projects.push({ title: project.title, url: project.url });
  });
  const data = {
    username,
    bio,
    displayName,
    links,
    projects,
  };

  return res.status(200).json({ data });
};

export default getUser;
