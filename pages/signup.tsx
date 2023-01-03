import Link from "next/link";
import AuthTopbar from "../components/AuthTopbar";
import GitHubButton from "../components/GitHubButton";
import Or from "../components/Or";
import AuthLayout from "../layouts/AuthLayout";
import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/requests";
import { debounce } from "lodash";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [emailChecked, setEmailChecked] = useState(false);
  const [usernameChecked, setUsernameChecked] = useState(false);

  const checkEmail = () => {
    fetchData("/auth/check-email", { email: "atatat" }).then((data) => {
      console.log(data.response.data);
    });
    console.log(email);
  };

  const debouncedCheckEmail = debounce((e) => {
    setEmail(e.target.value);
    checkEmail();
  }, 1500);

  useEffect(() => {
    checkEmail();
  }, []);

  return (
    <>
      <AuthTopbar
        href="login"
        hrefText="Login"
        question="Already have an account?"
      />
      <AuthLayout>
        <div className="w-1/3 mx-auto pb-4">
          <h1 className="text-4xl font-bold text-center">Sign up</h1>
          <div className="w-full mt-7">
            {currentStep === 1 && (
              <>
                {/**STEP 1*************************************************************************/}
                <div className="mt-6 mb-1">
                  <p className="mb-2 text-lg">What's your email?</p>
                  <input
                    type="text"
                    className="w-full bg-blue-50 pl-3 text-lg py-3"
                    placeholder="example@mail.com"
                    onChange={debouncedCheckEmail}
                    // value={email}
                  />
                </div>
                <div className="mt-6 mb-1">
                  <p className="mb-2 text-lg">Choose a username</p>
                  <input
                    type="text"
                    className="w-full bg-blue-50 pl-3 text-lg py-3"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                </div>
                <button
                  disabled={!usernameChecked || !emailChecked}
                  className="w-full bg-accent pl-3 text-lg py-3 text-white mt-8 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setCurrentStep(2)}
                >
                  Continue
                </button>
              </>
            )}
            {/**STEP 2 *************************************************************************/}
            {currentStep === 2 && (
              <>
                <b onClick={() => setCurrentStep(1)} className="cursor-pointer">
                  back
                </b>

                <div className="mt-6 mb-1">
                  <p className="mb-2 text-lg">Choose a password</p>
                  <input
                    type="password"
                    className="w-full bg-blue-50 pl-3 text-lg py-3"
                    placeholder="********************"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="mt-6 mb-1">
                  <p className="mb-2 text-lg">Confirm password</p>
                  <input
                    type="confirm password"
                    className="w-full bg-blue-50 pl-3 text-lg py-3"
                    placeholder="******************"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                </div>
                <button
                  className="w-full bg-accent pl-3 text-lg py-3 text-white mt-8 font-bold"
                  onClick={() => setCurrentStep(3)}
                >
                  Continue
                </button>
              </>
            )}
            {/**STEP 3 *************************************************************************/}
            {currentStep === 3 && (
              <>
                <b onClick={() => setCurrentStep(2)} className="cursor-pointer">
                  back
                </b>

                <div className="mt-6 mb-1">
                  <p className="mb-2 text-lg">What's your name?</p>
                  <input
                    type="confirm password"
                    className="w-full bg-blue-50 pl-3 text-lg py-3"
                    placeholder="your name"
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </div>
                <button className="w-full bg-accent pl-3 text-lg py-3 text-white mt-8 font-bold">
                  Complete Signup
                </button>
              </>
            )}
          </div>
          <Or />
          <GitHubButton />
        </div>
      </AuthLayout>
    </>
  );
};

export default Signup;
