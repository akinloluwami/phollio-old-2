import React, { useEffect, useState } from "react";
import NewProject from "../../components/NewProject";
import ProjectCard from "../../components/ProjectCard";
import { useUser } from "../../contexts/userContext";
import DashboardLayout from "../../layouts/DashboardLayout";
import ProjectProps from "../../types/project";
import { fetchData } from "../../utils/requests";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [projects, setProjects] = useState([]);
  const { token } = useUser();
  const [errorMsg, setErrorMsg] = useState("");

  const getProjects = () => {
    fetchData(
      "/project",
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    ).then((data) => {
      if (data.status !== 200) {
        setErrorMsg(data.data.message);
      } else {
        setProjects(data.data.projects);
      }
    });
  };

  useEffect(() => {
    getProjects();
  }, [token]);

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
          {projects.length < 1 ? (
            <div className="my-3">
              <h1 className="font-semibold text-center text-3xl">
                No projects
              </h1>
              <p className="text-center">
                Click the button above to add your first project
              </p>
            </div>
          ) : (
            projects.map((project: ProjectProps) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                url={project.url}
                description={project.description}
                impressions={project.impressions}
                clicks={project.clicks}
                isOn={project.isOn}
              />
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
