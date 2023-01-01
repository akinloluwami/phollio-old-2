import { useState } from "react";
import AddNewLinkComp from "../../components/AddNewLinkComp";
import LinkCard from "../../components/LinkCard";
import DashboardLayout from "../../layouts/DashboardLayout";

const Links = () => {
  const [showAddLinkComp, setShowAddLinkComp] = useState(false);
  return (
    <DashboardLayout>
      <div className="w-full">
        <button
          className="w-full h-10 bg-accent text-lg text-white my-2 font-bold"
          onClick={() => setShowAddLinkComp(!showAddLinkComp)}
        >
          {showAddLinkComp ? "Close" : "Add New Link"}
        </button>
        {showAddLinkComp && <AddNewLinkComp />}
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
