import React, { useState } from "react";
import { RiShareLine } from "react-icons/ri";
import { SlArrowRight, SlGlobe, SlShareAlt } from "react-icons/sl";
import { IoQrCodeOutline } from "react-icons/io5";
const LinkR = ({ title, icon }: any) => {
  return (
    <div className="flex items-center justify-between px-3 py-2 my-3 hover:bg-slate-300 transition-colors cursor-pointer">
      <div className="flex items-center">
        <div className="w-10 h-10  flex items-center mr-2 justify-center text-2xl">
          {icon}
        </div>
        <h1>{title}</h1>
      </div>
      <SlArrowRight />
    </div>
  );
};

const Share = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 border-2 border-accent bg-accent text-white font-semibold px-3 py-2"
        onClick={() => setOpen(!open)}
      >
        <RiShareLine />
        Share
      </button>
      <div
        className={`z-[9999] bg-white w-80 shadow-sm absolute my-5 py-3 ${
          open ? "block" : "hidden"
        }`}
        style={{
          boxShadow: "0 4px 8px #00000029",
        }}
      >
        <h1 className="text-center font-semibold">Share your YouPage</h1>
        <p className="text-gray-400 text-sm font-normal pl-3 mt-4">
          Get more visitors by sharing your YouPage everywhere.
        </p>
        <div className="">
          <LinkR title="Share my YouPage to..." icon={<SlShareAlt />} />
          <LinkR title="My YouPage QR code" icon={<IoQrCodeOutline />} />
          <LinkR title="Open my YouPage" icon={<SlGlobe />} />
        </div>
        <div className="flex items-center justify-between  my-2 border-[1px] border-accent">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent flex items-center mr-2 justify-center text-2xl"></div>
            <h1>youpa.ge/akinkunmi</h1>
          </div>
          <h2>Copy</h2>
        </div>
      </div>
    </div>
  );
};

export default Share;
