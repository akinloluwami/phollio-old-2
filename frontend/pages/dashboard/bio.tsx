import { useState, useEffect } from "react";
import ProfilePicture from "../../components/ProfilePicture";
import { useUser } from "../../contexts/userContext";
import DashboardLayout from "../../layouts/DashboardLayout";
import { postData } from "../../utils/requests";

const Bio = () => {
  const { displayName, username, bio } = useUser();
  const [displayNameSt, setDisplayNameSt] = useState("");
  const [usernameSt, setUsernameSt] = useState("");
  const [bioSt, setBioSt] = useState("");

  useEffect(() => {
    setDisplayNameSt(displayName);
    setUsernameSt(username);
    setBioSt(bio);
  }, [displayName, username, bio]);

  const handleUpdate = () => {
    const payload = {
      displayName: displayNameSt,
      username: usernameSt,
      bio: bioSt,
    };
    postData("/profile/update", { payload }).then((data) => console.log(data));
  };

  return (
    <DashboardLayout>
      <div className="w-full">
        <ProfilePicture />
      </div>
      <div className="w-full  p-3 ">
        <div className="w-full my-5">
          <p>Profile name</p>
          <input
            type="text"
            placeholder="Display name"
            className="w-full h-10 pl-3 border-[1px] bg-gray-50"
            defaultValue={displayNameSt}
          />
        </div>
        <div className="w-full my-5">
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            className="w-full h-10 pl-3 border-[1px] bg-gray-50"
            defaultValue={usernameSt}
          />
        </div>
        <div className="my-2">
          <p>Profile description</p>
          <textarea
            placeholder="Bio"
            maxLength={300}
            className="w-full h-32 py-2 pl-3 border-[1px] bg-gray-50"
            defaultValue={bioSt}
          />
        </div>
        <button
          className="w-full h-10 bg-accent text-white"
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
