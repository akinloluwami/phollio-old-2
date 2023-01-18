import { useState, useEffect } from "react";
import ProfilePicture from "../../components/ProfilePicture";
import { useUser } from "../../contexts/userContext";
import DashboardLayout from "../../layouts/DashboardLayout";
import { postData } from "../../utils/requests";

const Bio = () => {
  const { token } = useUser();
  const { displayName, username, bio } = useUser();
  const [displayNameSt, setDisplayNameSt] = useState("");
  const [usernameSt, setUsernameSt] = useState("");
  const [bioSt, setBioSt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    setDisplayNameSt(displayName);
    setUsernameSt(username);
    setBioSt(bio);
  }, [displayName, username, bio]);

  const handleUpdate = () => {
    setLoading(true);
    const payload = {
      displayName: displayNameSt,
      username: usernameSt,
      bio: bioSt,
    };
    postData("/profile/update", payload, {
      Authorization: `Bearer ${token}`,
    }).then((data) => {
      setLoading(false);
      if (data.status !== 200) {
        setError(true);
        setErrorMsg(data.data.message || data.data.error);
      } else {
        setSuccess(true);
        setSuccessMsg(data.data.message);
      }
    });
  };

  return (
    <DashboardLayout>
      <div className="w-full">
        <ProfilePicture />
      </div>
      <div className="w-full  p-3 ">
        {error && !loading && !success && (
          <p className="text-red-500 text-center my-5">{errorMsg}</p>
        )}

        {success && !loading && (
          <p className="text-green-500 text-center my-5">{successMsg}</p>
        )}

        <div className="w-full my-5">
          <p>Display name</p>
          <input
            type="text"
            placeholder="Display name"
            className="w-full h-10 pl-3 border-[1px] bg-gray-50"
            value={displayNameSt}
            onChange={(e) => setDisplayNameSt(e.target.value)}
          />
        </div>
        <div className="w-full my-5">
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            className="w-full h-10 pl-3 border-[1px] bg-gray-50"
            value={usernameSt}
            onChange={(e) => setUsernameSt(e.target.value)}
          />
        </div>
        <div className="my-2">
          <p>Bio</p>
          <textarea
            placeholder="Bio"
            maxLength={300}
            className="w-full h-32 py-2 pl-3 border-[1px] bg-gray-50"
            value={bioSt}
            onChange={(e) => setBioSt(e.target.value)}
          />
        </div>
        <button
          className="w-full h-10 bg-accent text-white disabled:cursor-not-allowed disabled:opacity-50"
          disabled={
            !displayNameSt ||
            displayNameSt.length < 4 ||
            displayNameSt.length > 15
          }
          onClick={handleUpdate}
        >
          Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Bio;
