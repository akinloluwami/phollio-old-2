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

  await newImpression.save();
};

export default userImpression;
