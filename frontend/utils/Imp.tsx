import { useEffect } from "react";
import { useVisitor } from "../contexts/visitorContext";
import { postData } from "./requests";

const Imp = ({ userId }: any) => {
  const { ipAddress, userAgent, deviceType, browser, os, fullDeviceInfo } =
    useVisitor();
  const payload = {
    ipAddress,
    userAgent,
    deviceType,
    browser,
    os,
    fullDeviceInfo,
    userId,
  };
  useEffect(() => {
    postData("/user/impression", payload, {}).then((data) => {
      console.log(data);
    });
  }, []);
  return <></>;
};

export default Imp;
