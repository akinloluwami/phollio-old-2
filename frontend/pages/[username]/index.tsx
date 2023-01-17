import Head from "next/head";
import Header from "../../components/user/Header";
import Tabs from "../../components/user/Tabs";

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
  return (
    <>
      <Head>
        <title>
          {data.data.displayName} | {data.data.bio} | Phollio
        </title>
      </Head>
      <div className="max-w-2xl mx-auto py-8">
        <Header displayName={data.data.displayName} bio={data.data.bio} />
        <Tabs projects={data.data.projects} links={data.data.links} />
      </div>
    </>
  );
};

export default User;
