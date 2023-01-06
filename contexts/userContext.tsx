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
}

const UserContext = createContext<UserContext | null>(null);

const UserProvider = ({ children }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get("/api/user");
  //       const data = response.data;
  //       setUsername(data.username);
  //       setEmail(data.email);
  //       setToken(data.token);
  //     }
  //     fetchData();
  //   }, []);

  return (
    <UserContext.Provider value={{ username, email, token }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
