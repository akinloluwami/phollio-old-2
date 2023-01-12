import { useState } from "react";
import { useUser } from "../contexts/userContext";
import { postData } from "../utils/requests";

const NewProject = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const { token } = useUser();

  const handleSubmit = () => {
    setLoading(true);
    const payload = { title, url };

    postData("/project", payload, {
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
    <div className="w-full  p-3 ">
      <div className="w-full my-5">
        <p>Project title</p>
        <input
          type="text"
          placeholder="Name of your project"
          className="w-full h-10 pl-3 border-[1px] bg-gray-50"
        />
      </div>
      <div className="my-2">
        <p>Project description</p>
        <textarea
          placeholder="What's your project about?"
          maxLength={150}
          className="w-full h-24 py-2 pl-3 border-[1px] bg-gray-50"
        />
      </div>
      <div className="w-full my-2">
        <p>Project URL</p>
        <input
          type="text"
          placeholder="Your project URL"
          className="w-full h-10 pl-3 border-[1px] bg-gray-50"
        />
      </div>
      <button className="w-full h-10 bg-accent text-white">Publish</button>
    </div>
  );
};

export default NewProject;
