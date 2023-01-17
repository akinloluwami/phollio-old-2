import React, { useState } from "react";
import Links from "./tabs/Links";
import Projects from "./tabs/Projects";
import TechStack from "./tabs/TechStack";

interface TabProps {
  projects: [];
  links: [];
}

const Tabs = ({ projects, links }: TabProps) => {
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
    <div className="w-full mx-auto my-5">
      <div className="flex items-center justify-between">
        {tabs.map((tab) => (
          <button
            className={`px-2 text-lg ${
              tab.id === currentTab
                ? "text-white bg-accent"
                : "text-accent bg-transparent"
            }`}
            onClick={() => setCurrentTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="w-full">
        {currentTab === 1 ? (
          <Projects />
        ) : currentTab === 2 ? (
          <Links links={links} />
        ) : (
          <TechStack />
        )}
      </div>
    </div>
  );
};

export default Tabs;
