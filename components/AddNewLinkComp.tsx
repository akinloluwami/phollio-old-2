import { useState } from "react";
import { useUser } from "../contexts/userContext";

const AddNewLinkComp = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const { token } = useUser();

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <div className="h-44 w-full pt-3 my-5 bg-gray-100">
      <div className="px-5">
        <div className="my-3">
          <p>Link title</p>
          <input
            type="text"
            placeholder="My Twitter"
            className="w-full h-10 pl-3"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-3">
          <p>Link URL</p>
          <input
            type="text"
            className="w-full h-10 pl-3"
            placeholder="https://twitter.com/xing0x"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </div>
      <button
        className="w-full h-10 bg-gray-300 text-accent hover:text-white hover:bg-accent transition-colors"
        disabled={!title || !url || loading}
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  );
};

export default AddNewLinkComp;
