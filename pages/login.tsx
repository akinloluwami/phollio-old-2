import Link from "next/link";
import AuthTopbar from "../components/AuthTopbar";
import GitHubButton from "../components/GitHubButton";
import Or from "../components/Or";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  return (
    <>
      <AuthTopbar href="signup" hrefText="Sign up" question="New to YouPage?" />
      <AuthLayout>
        <div className="w-1/3 mx-auto">
          <h1 className="text-4xl font-bold text-center">Login</h1>
          <div className="w-full mt-7">
            <div className="mt-6 mb-1">
              <p className="mb-2 text-lg">What's your email?</p>
              <input
                type="text"
                className="w-full bg-blue-50 pl-3 text-lg py-3"
                placeholder="example@mail.com"
              />
            </div>
            <div className="mt-6 mb-1">
              <p className="mb-2 text-lg">Shhhh....it's a secret</p>
              <input
                type="text"
                className="w-full bg-blue-50 pl-3 text-lg py-3"
                placeholder="Your password"
              />
            </div>

            <Link
              href={"/forgot-password"}
              className="text-accent mt-5 hover:underline"
            >
              Forgot password?
            </Link>

            <button className="w-full bg-accent pl-3 text-lg py-3 text-white mt-8 font-bold">
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