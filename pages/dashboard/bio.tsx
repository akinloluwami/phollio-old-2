import React from "react";
import ProfilePicture from "../../components/ProfilePicture";
import DashboardLayout from "../../layouts/DashboardLayout";

const Bio = () => {
  return (
    <DashboardLayout>
      <div className="w-full">
        <ProfilePicture />
      </div>
      <div className="w-full shadow p-3 my-10">
        <div className="w-full my-2">
          <p>Profile name</p>
          <input
            type="text"
            placeholder="Display name"
            className="w-full h-10 pl-3 border-[1px] border-accent"
          />
        </div>
        <div className="my-2">
          <p>Profile description</p>
          <textarea
            placeholder="Bio"
            maxLength={300}
            className="w-full h-32 py-2 pl-3 border-[1px] border-accent"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Bio;
