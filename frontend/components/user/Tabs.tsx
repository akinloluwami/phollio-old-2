import React from "react";

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      title: "Projects",
    },
    {
      id: 2,
      title: "Links",
    },
    {
      id: 3,
      title: "Tech stack",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-center">
        {tabs.map((tab) => (
          <button>{tab.title}</button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
