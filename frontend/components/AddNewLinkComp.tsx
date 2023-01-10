import { useState } from "react";
import { useUser } from "../contexts/userContext";
import { postData } from "../utils/requests";

const AddNewLinkComp = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const { token } = useUser();

  const handleSubmit = () => {
    setLoading(true);
    const payload = { title, url };

    postData("/link", payload, {
      Authorization: `Bearer ${token}`,
    }).then((data) => {
      console.log(data);
      setLoading(false);
      if (data.status !== 201) {
        setError(true);
        setErrorMsg(data.data.message || data.data.error);
      } else {
        setSuccess(true);
        setSuccessMsg(data.data.message);
        setTitle("");
        setUrl("");
      }
    });
  };

  return (
    <>
      {error && !loading && !success && (
        <p className="text-red-500 text-center my-5">{errorMsg}</p>
      )}

      {success && !loading && (
        <p className="text-green-500 text-center my-5">{successMsg}</p>
      )}

      <div className="h-44 w-full pt-3 my-5 bg-gray-100">
        <div className="px-5">
          <div className="my-3">
            <p>Link title</p>
            <input
              type="text"
              placeholder="My Twitter"
              className="w-full h-10 pl-3"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="my-3">
            <p>Link URL</p>
            <input
              type="text"
              className="w-full h-10 pl-3"
              placeholder="https://twitter.com/xing0x"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
          </div>
        </div>
        <button
          className="w-full h-10 text-white bg-accent disabled:cursor-not-allowed disabled:opacity-50 transition-opacity"
          disabled={!title || !url || loading}
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default AddNewLinkComp;
