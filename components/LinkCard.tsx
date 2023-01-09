import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { HiEye, HiOutlineTrash } from "react-icons/hi2";
import { TbClick } from "react-icons/tb";
import { deleteData, postData } from "../utils/requests";
import { useUser } from "../contexts/userContext";

const LinkCard = ({ title, url, impressions, clicks, isOn, id }: any) => {
  const { token } = useUser();
  const ToggleLink = () => {
    postData(
      "/link/toggle",
      { linkId: id },
      {
        Authorization: `Bearer ${token}`,
      }
    );
  };

  const DeleteLink = () => {
    deleteData(
      "/link",
      { linkId: id },
      {
        Authorization: `Bearer ${token}`,
      }
    ).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="w-full px-4 bg-white shadow-sm py-5 my-10 flex items-center justify-between">
      <div className="">
        <h1 className="font-semibold text-lg">{title}</h1>
        <h2 className="font-medium text-gray-600">{url}</h2>
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
          <ToggleSwitch ToggleLink={ToggleLink} isOn={isOn} />
        </button>
        <button className="text-xl mt-5" onClick={DeleteLink}>
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
