import React from "react";
import ProfilePicture from "../../components/ProfilePicture";
import DashboardLayout from "../../layouts/DashboardLayout";

const Bio = () => {
  return (
    <DashboardLayout>
      <div className="w-full">
        <ProfilePicture />
      </div>
      <div className="w-full">
        <div className="w-full">
          <p>Profile name</p>
          <input type="text" placeholder="Display name" />
        </div>
        <div className="">
          <p>Profile description</p>
          <textarea placeholder="Bio" maxLength={300} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Bio;
