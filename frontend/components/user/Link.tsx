import React from "react";

const Link = ({ title, url }: any) => {
  const linkUrl = url.includes("http://") ? url : `https://${url}`;
  return (
    <a href={linkUrl} className="w-full" target={"_blank"}>
      <div className="bg-slate-200 py-3 my-3 px-3">
        <h1 className="text-xl text-center">{title}</h1>
      </div>
    </a>
  );
};

export default Link;
