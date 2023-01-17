import React from "react";
import Link from "../Link";

const Links = ({ links }: any) => {
  return (
    <div>
      {links.map((link: any) => {
        <Link url={link.url} title={link.title} />;
      })}
    </div>
  );
};

export default Links;
