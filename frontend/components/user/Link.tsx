import { postData } from "../../utils/requests";

const Link = ({ id, title, url }: any) => {
  const handleClick = () => {
    postData("/link/click", {}, {}).then((data) => console.log(data));
  };

  const linkUrl = url.includes("http://") ? url : `https://${url}`;
  return (
    <a
      href={linkUrl}
      className="w-full"
      target={"_blank"}
      onClick={handleClick}
    >
      <div className="bg-slate-200 py-3 my-3 px-3">
        <h1 className="text-xl text-center">{title}</h1>
      </div>
    </a>
  );
};

export default Link;
