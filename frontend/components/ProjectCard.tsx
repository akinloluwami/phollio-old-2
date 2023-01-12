import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { HiEye, HiOutlineTrash } from "react-icons/hi2";
import { TbClick } from "react-icons/tb";
import { deleteData, postData } from "../utils/requests";
import { useUser } from "../contexts/userContext";

const ProjectCard = ({
  title,
  url,
  description,
  impressions,
  clicks,
  isOn,
  id,
}: any) => {
  const { token } = useUser();
  const ToggleProject = () => {
    postData(
      "/project/toggle",
      { projectId: id },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  };

  const DeleteProject = () => {
    deleteData(
      "/project",
      { projectId: id },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  };

  return (
    <div className="w-full px-4 bg-white shadow-sm py-5 my-10 flex items-center justify-between">
      <div className="">
        <h1 className="font-semibold text-lg">{title}</h1>
        <h2 className="font-medium text-gray-600">{description}</h2>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <h3 className="font-medium text-accent text-sm">{url}</h3>
        </a>
        <div className="flex items-center gap-4 my-2 text-gray-600">
          <div className="flex items-center gap-[4px]">
            <HiEye />
            {impressions}
          </div>
          <div className="flex items-center gap-[4px]">
            <TbClick />
            {clicks}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button>
          <ToggleSwitch isOn={isOn} Toggle={ToggleProject} />
        </button>
        <button className="text-xl mt-5" onClick={DeleteProject}>
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
