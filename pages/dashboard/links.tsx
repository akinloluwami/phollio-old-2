import { useState, useEffect } from "react";
import AddNewLinkComp from "../../components/AddNewLinkComp";
import LinkCard from "../../components/LinkCard";
import { useUser } from "../../contexts/userContext";
import DashboardLayout from "../../layouts/DashboardLayout";
import { fetchData } from "../../utils/requests";

const Links = () => {
  const [show, setShow] = useState(false);
  const [links, setLinks] = useState([]);
  const { token } = useUser();

  const getLinks = () => {
    fetchData(
      "/link",
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    ).then((data) => {
      setLinks(data.data.link);
    });
  };

  useEffect(() => {
    getLinks();
  }, [token]);
  return (
    <DashboardLayout>
      <div className="w-full">
        <button
          className="w-full h-10 bg-accent text-lg text-white my-2 font-bold"
          onClick={() => setShow(!show)}
        >
          {show ? "Close" : "Add New Link"}
        </button>
        {show && <AddNewLinkComp />}
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
