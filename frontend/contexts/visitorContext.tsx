import { createContext, useContext, useEffect, useState } from "react";
import useDeviceType from "./useDeviceType";
import DeviceDetector from "device-detector-js";

interface VisitorContext {
  ipAddress: string;
  userAgent: string;
  deviceType: string;
  browser: string;
  os: string;
  fullDeviceInfo: {};
}

const VisitorContext = createContext<VisitorContext | null>(null);

const VisitorProvider = ({ children }: any) => {
  const [ipAddress, setIpAddress] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [browser, setBrowser] = useState("");
  const [os, setOS] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const [fullDeviceInfo, setFullDeviceInfo] = useState<{}>({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      setIpAddress(data.ip);
    };
    fetchData();
    const deviceDetector = new DeviceDetector();
    const userAgent = navigator.userAgent;
    setUserAgent(userAgent);
    const device = deviceDetector.parse(userAgent);
    setBrowser(device.client?.name || "");
    setDeviceType(device.device?.type || "");
    setOS(device.os?.name || "");
    setFullDeviceInfo(device);
    console.log(device);
  }, []);

  return (
    <VisitorContext.Provider
      value={{ ipAddress, userAgent, deviceType, browser, os, fullDeviceInfo }}
    >
      {children}
    </VisitorContext.Provider>
  );
};

const useVisitor: any = () => {
  const context = useContext(VisitorContext);
  if (context === undefined) {
    throw new Error("useVisitor must be used within a VisitorProvider");
  }
  return context;
};

export { VisitorProvider, useVisitor };
