import { useUser } from ".././contexts/userContext";
import { MdContentCopy } from "react-icons/md";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
const UserLink = () => {
  const { username } = useUser();
  const [value, copy] = useCopyToClipboard();
  return (
    <div className="flex items-center gap-2">
      <a
        href={`http://localhost:1000/${username}`}
        className="text-sm text-accent"
      >
        phollio.com/{username}
      </a>

      <button>
        <MdContentCopy />
      </button>
    </div>
  );
};

export default UserLink;
