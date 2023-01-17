import Project from "../Project";

const Projects = ({ projects }: any) => {
  return (
    <div className="w-full">
      {projects.map((project: any) => (
        <Project
          key={project.id}
          url={project.url}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default Projects;
