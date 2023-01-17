const Project = ({ id, url, title, description }: any) => {
  return (
    <a href={url} className="w-full" target={"_blank"}>
      <div className="bg-slate-200 py-3 my-3 px-3">
        <h1 className="text-xl">{title}</h1>
        <p>{description}</p>
        <small>{url}</small>
      </div>
    </a>
  );
};

export default Project;
