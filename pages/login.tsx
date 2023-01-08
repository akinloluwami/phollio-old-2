import { useState } from "react";
import Link from "next/link";
import AuthTopbar from "../components/AuthTopbar";
import GitHubButton from "../components/GitHubButton";
import Or from "../components/Or";
import AuthLayout from "../layouts/AuthLayout";
import { postData } from "../utils/requests";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = () => {
    setLoading(true);
    const payload = { username, password };
    postData("/auth/login", payload).then((data) => {
      setLoading(false);
      if (data.status !== 200) {
        setError(true);
        setErrorMsg(data.data.message);
      } else {
        setSuccess(true);
        setSuccessMsg(data.data.message);
      }
      console.log(data);
    });
  };

  return (
    <>
      <AuthTopbar href="signup" hrefText="Sign up" question="New to YouPage?" />
      <AuthLayout>
        <div className="w-1/3 mx-auto">
          <h1 className="text-4xl font-bold text-center">Login</h1>
          {error && !loading && (
            <p className="text-red-500 text-center my-5">{errorMsg}</p>
          )}
          <div className="w-full">
            <div className="mt-8 mb-1">
              <p className="mb-2 text-lg">What's your username?</p>
              <input
                type="text"
                className="w-full bg-blue-50 pl-3 text-lg py-3"
                placeholder="Your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-6 mb-1">
              <p className="mb-2 text-lg">Shhhh....it's a secret</p>
              <input
                type="password"
                className="w-full bg-blue-50 pl-3 text-lg py-3"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link
              href={"/forgot-password"}
              className="text-accent mt-5 hover:underline"
            >
              Forgot password?
            </Link>

            <button
              className="w-full bg-accent pl-3 text-lg py-3 text-white mt-8 font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              onClick={handleLogin}
              disabled={!username || !password || loading}
            >
              Login
            </button>
          </div>
          <Or />
          <GitHubButton />
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
