import React from "react";

const AddNewLinkComp = () => {
  return (
    <div className="h-44 w-full pt-3 my-5 bg-gray-100">
      <div className="px-5">
        <div className="my-3">
          <p>Link title</p>
          <input
            type="text"
            placeholder="My Twitter"
            className="w-full h-10 pl-3"
          />
        </div>
        <div className="my-3">
          <p>Link URL</p>
          <input
            type="text"
            className="w-full h-10 pl-3"
            placeholder="https://twitter.com/xing0x"
          />
        </div>
      </div>
      <button className="w-full h-10 bg-gray-300 text-accent hover:text-white hover:bg-accent transition-colors">
        Save
      </button>
    </div>
  );
};

export default AddNewLinkComp;
