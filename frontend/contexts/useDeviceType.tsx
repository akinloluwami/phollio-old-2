import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const detectDeviceType = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width <= 1024) {
        setDeviceType("tablet");
      } else if (width > 1024) {
        setDeviceType("desktop");
      } else {
        setDeviceType("other");
      }
    };
    detectDeviceType();
    window.addEventListener("resize", detectDeviceType);
    return () => window.removeEventListener("resize", detectDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;
