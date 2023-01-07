import axios from "axios";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchData } from "../utils/requests";

interface UserContext {
  username: string;
  email: string;
  token: string;
  isEmailVerified: boolean;
}

const UserContext = createContext<UserContext | null>(null);

const UserProvider = ({ children }: any) => {
  const [username, setUsername] = useState("akinkunmi");
  const [email, setEmail] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [token, setToken] = useState("");

  const getBasicInfo = () => {
    fetchData(
      "/profile/basic-info",
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    ).then((data) => {
      console.log(data);
      setUsername(data.data.username);
      setEmail(data.data.email);
      setIsEmailVerified(data.data.isEmailVerified);
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("tkn");
    setToken(token as string);
  }, []);

  useEffect(() => {
    getBasicInfo();
  }, [token]);

  return (
    <UserContext.Provider value={{ username, email, token, isEmailVerified }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser: any = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
