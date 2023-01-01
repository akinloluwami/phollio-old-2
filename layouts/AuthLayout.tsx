import Link from "next/link";
import AuthTopbar from "../components/AuthTopbar";

interface AuthTypes {
  question: string;
  hrefPage: string;
  buttonHrefText: string;
  pageTitle: string;
  children?: any;
}

const AuthLayout = ({ children }: any) => {
  return <div className="mx-auto">{children}</div>;
};

export default AuthLayout;
