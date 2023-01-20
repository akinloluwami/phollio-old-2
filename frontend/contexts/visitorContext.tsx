import { createContext, useContext, useEffect, useState } from "react";
import useDeviceType from "./useDeviceType";
import { browserName } from "react-device-detect";

interface VisitorContext {
  ipAddress: string;
  userAgent: string;
  deviceType: string;
  browser: string;
}

const VisitorContext = createContext<VisitorContext | null>(null);

const VisitorProvider = ({ children }: any) => {
  const [ipAddress, setIpAddress] = useState("");
  const deviceType = useDeviceType();
  const [browser, setBrowser] = useState("");
  const [status, setStatus] = useState("");
  const [userAgent, setUserAgent] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      setIpAddress(data.ip);
    };
    fetchData();
    setBrowser(browserName || "Unknown");
    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <VisitorContext.Provider
      value={{ ipAddress, userAgent, deviceType, browser }}
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
