import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const detectDeviceType = () => {
      const userAgent = navigator.userAgent;
      if (
        userAgent.match(/Android/i) ||
        userAgent.match(/webOS/i) ||
        userAgent.match(/iPhone/i) ||
        userAgent.match(/iPad/i) ||
        userAgent.match(/iPod/i) ||
        userAgent.match(/BlackBerry/i) ||
        userAgent.match(/Windows Phone/i)
      ) {
        setDeviceType("mobile");
      } else if (userAgent.match(/Tablet/i)) {
        setDeviceType("tablet");
      } else if (userAgent.match(/Desktop/i)) {
        setDeviceType("desktop");
      } else {
        setDeviceType("other");
      }
    };
    detectDeviceType();
  }, []);

  return deviceType;
};

export default useDeviceType;
