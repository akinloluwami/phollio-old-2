import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import DashboardLayout from "../../layouts/DashboardLayout";

const Projects = () => {
  const [show, setShow] = useState(false);

  return (
    <DashboardLayout>
      <div className="w-full">
        <button
          className="w-full h-10 bg-accent text-lg text-white my-2 font-bold"
          onClick={() => setShow(!show)}
        >
          {show ? "Close" : "Add New Project"}
        </button>
        <div className="w-full">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
