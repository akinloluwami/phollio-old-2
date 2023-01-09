import { useState, useEffect } from "react";
import AddNewLinkComp from "../../components/AddNewLinkComp";
import LinkCard from "../../components/LinkCard";
import { useUser } from "../../contexts/userContext";
import DashboardLayout from "../../layouts/DashboardLayout";
import LinkProps from "../../types/link";
import { fetchData } from "../../utils/requests";

const Links = () => {
  const [show, setShow] = useState(false);
  const [links, setLinks] = useState([]);
  const { token } = useUser();
  const [errorMsg, setErrorMsg] = useState("");
  const getLinks = () => {
    fetchData(
      "/link",
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    ).then((data) => {
      if (data.status !== 200) {
        setErrorMsg(data.data.message);
      } else {
        // setLinks(data.data.links);
      }
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
          {links.length < 1 ? (
            <div className="my-3">
              <h1 className="font-semibold text-center text-3xl">No links</h1>
              <p className="text-center">
                Click the button above to add your first link
              </p>
            </div>
          ) : (
            links.map((link: LinkProps) => (
              <LinkCard
                key={link.id}
                title={link.title}
                url={link.url}
                impressions={link.impressions}
                clicks={link.clicks}
              />
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Links;
