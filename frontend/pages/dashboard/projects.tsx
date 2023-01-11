import React, { useState } from "react";
import NewProject from "../../components/NewProject";
import ProjectCard from "../../components/ProjectCard";
import DashboardLayout from "../../layouts/DashboardLayout";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [projects, setProjects] = useState([]);
  const { token } = useUser();
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <DashboardLayout>
      <div className="w-full">
        <button
          className="w-full h-10 bg-accent text-lg text-white my-2 font-bold"
          onClick={() => setShow(!show)}
        >
          {show ? "Close" : "Add New Project"}
        </button>
        {show && <NewProject />}
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
