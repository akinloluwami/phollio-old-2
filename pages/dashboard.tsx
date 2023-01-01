import React from "react";
import { BiCodeCurly, BiLink } from "react-icons/bi";
import DashboardTopbar from "../components/DashboardTopbar";
import { TfiBag } from "react-icons/tfi";
import Link from "next/link";
import { RiUserStarLine } from "react-icons/ri";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }: any) => {
  const pages = [
    {
      title: "Links",
      route: "/links",
      icon: <BiLink />,
    },
    {
      title: "Projects",
      route: "/projects",
      icon: <TfiBag />,
    },
    {
      title: "Tech stack",
      route: "/tech-stack",
      icon: <BiCodeCurly />,
    },
    {
      title: "Bio",
      route: "/bio",
      icon: <RiUserStarLine />,
    },
  ];

  const router = useRouter();

  const pageSwitch = () => {
    router.push("/links", undefined, {
      shallow: true,
    });
  };

  return (
    <div>
      <DashboardTopbar />
      <div
        className="flex items-center justify-center bg-pink-500 flex-col mx-auto"
        style={{
          flexDirection: "column",
          maxWidth: "40rem",
        }}
      >
        <div className="flex items-center justify-between w-full">
          {pages.map((page, _) => (
            <Link
              href={`?/dashboard${page.route}`}
              as={`/dashboard${page.route}`}
              key={_}
              onClick={() => console.log(router)}
              className="flex items-center gap-1 font-semibold"
            >
              {page.icon} {page.title}
            </Link>
          ))}
        </div>
        <div
          className="w-full h-5 bg-black"
          style={{
            backgroundColor: "grey",
            height: "3px",
          }}
        >
          <div
            className="h-full bg-red-500"
            style={{
              width: "100px",
              backgroundColor: "orangered",
              transform: "translateX(160%)",
            }}
          ></div>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
