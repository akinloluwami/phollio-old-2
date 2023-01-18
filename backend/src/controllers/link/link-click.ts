import { Request, Response } from "express";
import LinkClick from "../../schema/link-click";

const linkClick = async (req: Request, res: Response) => {
  const {
    userAgent,
    ipAddress,
    deviceType,
    browser,
    linkId,
    visitedAccountId,
  } = req.body;

  const linkClickData = new LinkClick({
    userAgent,
    ipAddress,
    deviceType,
    browser,
    linkId,
    visitedAccountId,
  });

  await linkClickData.save();
};

export default linkClick;
