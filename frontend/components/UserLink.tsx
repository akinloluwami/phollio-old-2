import { useUser } from ".././contexts/userContext";
import { MdContentCopy } from "react-icons/md";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { useState } from "react";
const UserLink = () => {
  const { username } = useUser();
  const [copySt, setCopySt] = useState("Copy link");
  const [value, copy] = useCopyToClipboard();
  const link = `http://localhost:1000/${username}`;
  return (
    <div className="flex items-center gap-2">
      <a href={link} className="text-sm text-accent">
        phollio.com/{username}
      </a>

      <button
        onClick={() => {
          copy(link);
          setCopySt("Copied");
          setTimeout(() => {
            setCopySt("Copy link");
          }, 1500);
        }}
        className="p-1 transition-colors hover:bg-[rgba(0,0,0,0.2)] flex items-center text-sm"
      >
        <MdContentCopy /> {copySt}
      </button>
    </div>
  );
};

export default UserLink;
