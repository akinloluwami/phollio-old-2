import Link from "../Link";

const Links = ({ links }: any) => {
  return (
    <div>
      {links.map((link: any) => (
        <Link key={link.id} url={link.url} title={link.title} id={link.id} />
      ))}
    </div>
  );
};

export default Links;
