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

  return (
    <div>
      <DashboardTopbar />
      <div className="flex items-center justify-center  flex-col mx-auto max-w-xl mt-5">
        <div className="flex items-center justify-between w-full sticky top-0 bg-white z-50">
          {pages.map((page, _) => (
            <Link
              href={`/dashboard${page.route}`}
              key={_}
              className="flex items-center flex-col justify-center"
            >
              <div className="flex items-center gap-1 justify-center">
                {page.icon} {page.title}
              </div>
              <div
                className={`w-full ${router.asPath.includes(
                  page.route ? "bg-accent" : "transparent"
                )}`}
                style={{
                  height: "3px",
                }}
              ></div>
              <div
                className={`w-full ${
                  router.pathname.includes(page.route)
                    ? "bg-accent"
                    : "transparent"
                }`}
                style={{
                  height: "3px",
                }}
              ></div>
            </Link>
          ))}
        </div>
        <div
          className="w-full h-5 bg-gray-100"
          style={{
            height: "2px",
          }}
        ></div>
        <div className="mt-5 w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
