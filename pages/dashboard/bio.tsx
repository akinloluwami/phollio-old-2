import { useState, useEffect } from "react";
import ProfilePicture from "../../components/ProfilePicture";
import { useUser } from "../../contexts/userContext";
import DashboardLayout from "../../layouts/DashboardLayout";

const Bio = () => {
  const { displayName } = useUser();
  const [displayNameSt, setDisplayNameSt] = useState("");

  useEffect(() => {
    setDisplayNameSt(displayName);
  }, [displayName]);

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
        <div className="my-2">
          <p>Profile description</p>
          <textarea
            placeholder="Bio"
            maxLength={300}
            className="w-full h-32 py-2 pl-3 border-[1px] bg-gray-50"
          />
        </div>
        <button
          className="w-full h-10 bg-accent text-white"
          disabled={!displayNameSt}
        >
          Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Bio;
