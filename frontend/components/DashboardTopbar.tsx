import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { RiShareLine } from "react-icons/ri";
import { IoAnalyticsSharp } from "react-icons/io5";
import Share from "./Share";
import UserLink from "./UserLink";

const DashboardTopbar = ({ username }: any) => {
  return (
    <div className="px-20 py-8 flex items-center justify-between">
      <div className="">
        <p>YouPage</p>
      </div>
      <div className="flex items-center gap-10">
        <Link
          href={"/dashboard/analytics"}
          className="flex items-center gap-1 hover:bg-gray-200 px-2 py-1 transition-colors"
        >
          <IoAnalyticsSharp />
          <p>Analytics</p>
        </Link>
        <UserLink />
        {/* <Share /> */}
        <div className="flex items-center gap-2 hover:bg-gray-200 px-2 py-1 transition-colors cursor-pointer">
          <div className="h-10 w-10 rounded-full">
            <img
              src="https://media.istockphoto.com/id/1042424400/photo/teenager-with-afro-hair-style.jpg?s=612x612&w=0&k=20&c=ItyWr7CYUor8AMu1YZrtHkh8ZOPKGPZd1U8EMWJiskE="
              alt=""
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex items-center">
            <h1 className="">{username}</h1>
            <b className="text-2xl">
              <BiChevronDown />
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
