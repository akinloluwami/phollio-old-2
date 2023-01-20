import { useEffect } from "react";
import { useVisitor } from "../../contexts/visitorContext";
import HeaderProps from "../../types/header";
import { postData } from "../../utils/requests";

const Header = ({ displayName, bio, userId }: HeaderProps) => {
  return (
    <div className="w-full">
      <center>
        <div className="h-36 w-36 bg-accent rounded-full"></div>
      </center>
      <h1 className="text-center font-bold text-3xl my-3">{displayName}</h1>
      <p className="text-center">{bio}</p>
    </div>
  );
};

export default Header;
