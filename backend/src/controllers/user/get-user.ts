import { Request, Response } from "express";
import User from "../../schema/user";

const getUser = async (req: Request, res: Response) => {
  const user = req.query.username;
  const UserData = await User.User.findOne({ username: user });
  if (!UserData) {
    return res.status(404).json({
      message: "User not found",
    });
  }
};

export default getUser;
