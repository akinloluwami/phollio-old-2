import Link from "next/link";
import AuthTopbar from "../components/AuthTopbar";
import GitHubButton from "../components/GitHubButton";
import Or from "../components/Or";
import AuthLayout from "../layouts/AuthLayout";
import React, { useEffect, useState } from "react";
import { fetchData, postData } from "../utils/requests";
import { debounce } from "lodash";
import { BsCheckAll } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiLoader3Fill } from "react-icons/ri";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/router";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [emailAvaibable, setEmailAvailable] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [emailCheckMsg, setEmailCheckMsg] = useState("");
  const [usernameAvaibable, setUsernameAvailable] = useState(false);
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [usernameCheckMsg, setUsernameCheckMsg] = useState("");

  const getUsernameFromUrl = () => {
    const router = useRouter();
    console.log(router);
  };

  const checkEmail = (email: any) => {
    setIsCheckingEmail(true);
    const payload = { email };
    fetchData("/auth/check-email", payload).then((data) => {
      const res = data;
      if (res.status !== 200) {
        setEmailAvailable(false);
        setEmailCheckMsg(res.data.message);
      } else {
        setEmailAvailable(true);
        setEmailCheckMsg(res.data.message);
      }
      setIsCheckingEmail(false);
    });
  };

  const debouncedCheckEmail = debounce((e) => {
    setEmail(e.target.value.toLowerCase().trim());
    checkEmail(e.target.value.toLowerCase().trim());
  }, 500);

  const checkUsename = (username: any) => {
    setIsCheckingUsername(true);
    const payload = { username };
    fetchData("/auth/check-username", payload).then((data) => {
      const res = data;
      console.log(res);
      if (res.status !== 200) {
        setUsernameAvailable(false);
        setUsernameCheckMsg(res.data.message);
      } else {
        setUsernameAvailable(true);
        setUsernameCheckMsg(res.data.message);
      }
      setIsCheckingUsername(false);
    });
  };

  const debouncedCheckUsername = debounce((e) => {
    setUsername(e.target.value.toLowerCase().trim());
    checkUsename(e.target.value.toLowerCase().trim());
  }, 500);

  const handleSignup = () => {
    const payload = {
      username,
      email,
      password,
      confirmPassword,
      displayName,
    };
    postData("/auth/signup", payload).then((data) => {
      if (data.status === 201) {
        setCurrentStep(4);
      }
    });
  };

  return (
    <>
      <AuthTopbar
        href="login"
        hrefText="Login"
        question="Already have an account?"
      />
      <AuthLayout>
        <div className="w-1/3 mx-auto pb-4">
          {currentStep !== 4 && (
            <h1 className="text-4xl font-bold text-center">Sign up</h1>
          )}
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
                    defaultValue={email}
                  />
                  {isCheckingEmail && (
                    <div className="flex items-center text-accent my-2">
                      <p className="text-xl animate-spin">
                        <RiLoader3Fill />
                      </p>
                      <small>Checking...</small>
                    </div>
                  )}
                  {!emailAvaibable && email && (
                    <div className="flex items-center text-red-500 my-2">
                      <p className="text-xl">
                        <IoCloseCircleOutline />
                      </p>
                      <small>{emailCheckMsg}</small>
                    </div>
                  )}
                  {emailAvaibable && (
                    <div className="flex items-center text-green-500 my-2">
                      <p className="text-xl">
                        <BsCheckAll />
                      </p>
                      <small>{emailCheckMsg}</small>
                    </div>
                  )}
                </div>
                <div className="mt-6 mb-1">
                  <p className="mb-2 text-lg">Choose a username</p>
                  <input
                    type="text"
                    className="w-full bg-blue-50 pl-3 text-lg py-3"
                    placeholder="username"
                    onChange={debouncedCheckUsername}
                    defaultValue={username}
                  />
                  {isCheckingUsername && (
                    <div className="flex items-center text-accent my-2">
                      <p className="text-xl animate-spin">
                        <RiLoader3Fill />
                      </p>
                      <small>Checking...</small>
                    </div>
                  )}
                  {!usernameAvaibable && username && (
                    <div className="flex items-center text-red-500 my-2">
                      <p className="text-xl">
                        <IoCloseCircleOutline />
                      </p>
                      <small>{usernameCheckMsg}</small>
                    </div>
                  )}
                  {usernameAvaibable && (
                    <div className="flex items-center text-green-500 my-2">
                      <p className="text-xl">
                        <BsCheckAll />
                      </p>
                      <small>{usernameCheckMsg}</small>
                    </div>
                  )}
                </div>
                <button
                  disabled={!usernameAvaibable || !emailAvaibable}
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
                <b
                  onClick={() => setCurrentStep(1)}
                  className="cursor-pointer flex items-center gap-1"
                >
                  <MdArrowBack />
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
                  {password &&
                    password.length < 6 &&
                    password !== confirmPassword && (
                      <div className="flex items-center text-red-500 my-2">
                        <p className="text-xl">
                          <IoCloseCircleOutline />
                        </p>
                        <small>
                          Password should be at least 6 characters long
                        </small>
                      </div>
                    )}
                </div>
                <div className="mt-6 mb-1">
                  <p className="mb-2 text-lg">Confirm password</p>
                  <input
                    type="password"
                    className="w-full bg-blue-50 pl-3 text-lg py-3"
                    placeholder="******************"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />

                  {password &&
                    confirmPassword &&
                    password !== confirmPassword && (
                      <div className="flex items-center text-red-500 my-2">
                        <p className="text-xl">
                          <IoCloseCircleOutline />
                        </p>
                        <small>Passwords do not match</small>
                      </div>
                    )}
                </div>
                <button
                  className="w-full bg-accent pl-3 text-lg py-3 text-white mt-8 font-bold disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => setCurrentStep(3)}
                  disabled={
                    !password ||
                    !confirmPassword ||
                    password !== confirmPassword
                  }
                >
                  Continue
                </button>
              </>
            )}
            {/**STEP 3 *************************************************************************/}
            {currentStep === 3 && (
              <>
                <b
                  onClick={() => setCurrentStep(2)}
                  className="cursor-pointer flex items-center gap-1"
                >
                  <MdArrowBack />
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
                  {displayName && displayName.length < 4 && (
                    <div className="flex items-center text-red-500 my-2">
                      <p className="text-xl">
                        <IoCloseCircleOutline />
                      </p>
                      <small>
                        Display name should be at least 4 characters long
                      </small>
                    </div>
                  )}
                </div>
                <button
                  className="w-full bg-accent pl-3 text-lg py-3 text-white mt-8 font-bold disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={
                    !username ||
                    !email ||
                    !password ||
                    !confirmPassword ||
                    password !== confirmPassword ||
                    !displayName ||
                    displayName.length < 4
                  }
                  onClick={handleSignup}
                >
                  Complete Signup
                </button>
              </>
            )}
            {currentStep === 4 && (
              <>
                <div className="">
                  <div className="flex items-center justify-center my-3">
                    <img src="https://img.icons8.com/cute-clipart/64/null/confetti.png" />
                  </div>
                  <h1 className="text-center text-4xl font-bold text-accent">
                    Account created succefully
                  </h1>
                  <p className="text-center my-4 text-2xl">
                    A link to verify your account has been sent to your email.
                  </p>
                  <Link
                    href={"/dashboard/links"}
                    className="flex items-center justify-center"
                  >
                    <button className="bg-accent text-white px-3 py-2">
                      Continue to Dashboard
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
          {currentStep !== 4 && <Or />}
          {currentStep !== 4 && <GitHubButton />}
        </div>
      </AuthLayout>
    </>
  );
};

export default Signup;
