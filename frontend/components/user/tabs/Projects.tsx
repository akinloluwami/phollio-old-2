import React from "react";
import Project from "../Project";

const Projects = ({ projects }: any) => {
  return (
    <div className="w-full">
      {projects.map((project: any) => (
        <Project key={project.id} url={project.url} title={project.title} />
      ))}
    </div>
  );
};

export default Projects;
