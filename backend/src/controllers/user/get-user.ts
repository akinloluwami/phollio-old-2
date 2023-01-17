import { Request, Response } from "express";
import User from "../../schema/user";

const getUser = async (req: Request, res: Response) => {
  const user = req.query.username;
  console.log(user);
};

export default getUser;
