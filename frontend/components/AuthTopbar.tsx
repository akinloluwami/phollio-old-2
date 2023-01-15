import Link from "next/link";
import React from "react";

interface CompTypes {
  question: string;
  href: string;
  hrefText: string;
}

const AuthTopbar = ({ question, href, hrefText }: CompTypes) => {
  return (
    <div className="flex justify-between lg:px-20 px-2 py-4">
      <Link href={"/"}>
        <h1>YouPage</h1>
      </Link>
      <div className="flex items-center">
        <p className="mr-5 font-semibold">{question}</p>
        <Link href={`/${href}`}>
          <button className="bg-accent text-white px-7 py-2 font-bold">
            {hrefText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AuthTopbar;
