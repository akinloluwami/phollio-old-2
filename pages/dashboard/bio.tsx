import React from "react";
import ProfilePicture from "../../components/ProfilePicture";
import DashboardLayout from "../../layouts/DashboardLayout";

const Bio = () => {
  return (
    <DashboardLayout>
      <div className="w-full">
        <ProfilePicture />
      </div>
    </DashboardLayout>
  );
};

export default Bio;
