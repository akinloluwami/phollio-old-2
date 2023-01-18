import { Request, Response } from "express";

const linkClick = async (req: Request, res: Response) => {
  res.send("Hey durling!");
};

export default linkClick;
