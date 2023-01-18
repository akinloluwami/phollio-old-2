import Head from "next/head";
import User404 from "../../components/404";
import Header from "../../components/user/Header";
import Tabs from "../../components/user/Tabs";
import UserNotVerified from "../../components/UserNotVerified";
import { VisitorProvider } from "../../contexts/visitorContext";

export async function getServerSideProps({ query }: any) {
  const { username } = query;
  const res = await fetch(`http://localhost:2004/user?username=${username}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const User = ({ data }: any) => {
  const userData = data.data;
  return (
    <>
      {data.message === "User not found" && (
        <>
          <Head>
            <title>Page Not found | Phollio</title>
          </Head>
          <User404 />
        </>
      )}

      {data.message === "This profile is not yet verified" && (
        <>
          <Head>
            <title>Phollio</title>
          </Head>
          <UserNotVerified />
        </>
      )}

      {userData && (
        <>
          <VisitorProvider>
            <Head>
              <title>
                {userData?.displayName} | {userData?.bio} | Phollio
              </title>
            </Head>
            <div className="max-w-2xl mx-auto py-8">
              <Header displayName={userData.displayName} bio={userData.bio} />
              <Tabs projects={userData?.projects} links={userData?.links} />
            </div>
          </VisitorProvider>
        </>
      )}
    </>
  );
};

export default User;
