import React from "react";

const ProfilePicture = () => {
  return (
    <div className="flex items-center gap-10 justify-between">
      <div className="w-1/5">
        <div className="h-32 w-32 bg-accent rounded-full"></div>
      </div>
      <div className="flex flex-col w-4/5">
        <button className="bg-accent m-2 text-white h-10 w-full">
          Change image
        </button>
        <button className="bg-red-400 m-2 text-white h-10 w-full">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProfilePicture;
