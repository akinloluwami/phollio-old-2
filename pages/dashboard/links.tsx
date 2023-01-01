import React from "react";
import LinkCard from "../../components/LinkCard";
import DashboardLayout from "../../layouts/DashboardLayout";

const Links = () => {
  return (
    <DashboardLayout>
      <div className="w-full">
        <button className="w-full h-10 bg-accent text-lg text-white my-2 font-bold">
          Add Link
        </button>
        <div className="w-full">
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Links;
