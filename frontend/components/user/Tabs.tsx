import React, { useState } from "react";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(1);
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
    <div className="w-full mx-auto my-3">
      <div className="flex items-center justify-center gap-4">
        {tabs.map((tab) => (
          <button
            className="px-2 text-accent"
            onClick={() => setCurrentTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
