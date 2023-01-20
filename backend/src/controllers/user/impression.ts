import { Request, Response } from "express";
import impression from "../../schema/impression";

const userImpression = async (req: Request, res: Response) => {
  const {
    ipAddress,
    userAgent,
    deviceType,
    browser,
    os,
    fullDeviceInfo,
    userId,
  } = req.body;

  const newImpression = new impression({
    ipAddress,
    userAgent,
    deviceType,
    browser,
    os,
    fullDeviceInfo,
    userId,
  });

  setTimeout(async () => {
    await newImpression.save();
  }, 1000);
  return res.status(200).json({ newImpression });
};

export default userImpression;
