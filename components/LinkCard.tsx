import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { HiEye, HiOutlineTrash } from "react-icons/hi2";
import { TbClick } from "react-icons/tb";

const LinkCard = () => {
  const linkStats = [
    {
      title: "Impressions",
    },
  ];

  return (
    <div className="w-full px-4 bg-white shadow-sm py-5 my-10 flex items-center justify-between">
      <div className="">
        <h1 className="font-semibold text-lg">Link title</h1>
        <h2 className="font-medium text-gray-600">linktitle.com</h2>
        <div className="flex items-center gap-4 my-2 text-gray-600">
          <div className="flex items-center gap-[4px]">
            <HiEye />
            1.1k
          </div>
          <div className="flex items-center gap-[4px]">
            <TbClick />
            100
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button>
          <ToggleSwitch />
        </button>
        <button className="text-xl mt-5">
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
