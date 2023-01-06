import axios from "axios";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContext {
  username: string;
  email: string;
  token: string;
  isEmailVerified: boolean;
}

const UserContext = createContext<UserContext | null>(null);

const UserProvider = ({ children }: any) => {
  const [username, setUsername] = useState("zing");
  const [email, setEmail] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [token, setToken] = useState("");

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
