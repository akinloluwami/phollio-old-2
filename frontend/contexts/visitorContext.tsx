import { createContext, useContext, useEffect, useState } from "react";

interface VisitorContext {
  ipAddress: string;
  userAgent: string;
}

const VisitorContext = createContext<VisitorContext | null>(null);

const VisitorProvider = ({ children }: any) => {
  const [ipAddress, setIpAddress] = useState("");
  const [deviceType, setDeviceType] = useState("");
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

    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <VisitorContext.Provider value={{ ipAddress, userAgent }}>
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
