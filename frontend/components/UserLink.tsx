import { useUser } from ".././contexts/userContext";
const UserLink = () => {
  const { username } = useUser();
  return (
    <div className="flex items-center gap-2">
      <a href={`http://localhost:1000/${username}`}>phollio.com/${username}</a>
    </div>
  );
};
