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
  console.log(data);
  return (
    <div className="max-w-2xl mx-auto py-8">
      <Header />
      <Tabs />
    </div>
  );
};

export default User;
