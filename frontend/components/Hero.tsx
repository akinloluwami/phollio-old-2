import Link from "next/link";
import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { fetchData } from "../utils/requests";
import { debounce } from "lodash";
import { RiLoader3Fill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BsCheckAll } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Hero = () => {
  const [username, setUsername] = useState("");
  const [usernameAvaibable, setUsernameAvailable] = useState(false);
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [usernameCheckMsg, setUsernameCheckMsg] = useState("");

  const checkUsename = (username: any) => {
    setIsCheckingUsername(true);
    const payload = { username };
    fetchData("/auth/check-username", payload).then((data) => {
      const res = data;
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
  return (
    <div className="bg-white h-screen w-screen text-black">
      <div className="lg:hidden "></div>
      <div className="lg:px-20 px-3 flex justify-between py-8 items-center">
        <h1>YouPage</h1>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-10 font-bold">
            <li>
              <a href="#">Explore Developers</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <button className="lg:hidden text-3xl">
          <HiOutlineMenuAlt4 />
        </button>
        <div className="hidden lg:block">
          <Link href={"/login"}>
            <button className="mr-5 bg-white text-black h-12 w-24">
              <b>Login</b>
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="bg-black text-white h-12 w-36">
              {" "}
              <b>Sign up</b> - it's free
            </button>
          </Link>
        </div>
      </div>
      <h1 className="lg:text-7xl text-5xl mt-10 text-center font-bold">
        Your{" "}
        <span className="text-accent">
          <Typewriter
            words={["projects", "links", "tech stack", "...everything"]}
            loop={1000000000000000}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <br /> all in one place.{" "}
      </h1>
      <div className="max-w-xl mt-8 mx-auto">
        <div className="flex items-center justify-between lg:w-full w-11/12 mx-auto  bg-white border-2 border-accent text-black  text-xl">
          <div className="w-4/5 flex items-center py-3">
            <b className="pl-2">youpage.dev/</b>
            <input
              type="text"
              placeholder="yourname"
              className="outline-none font-semibold w-1/2"
              spellCheck={"false"}
              onChange={debouncedCheckUsername}
            />
          </div>
          <Link href={`/signup?username=${username}`} className="w-1/5">
            <button
              className="bg-accent text-white px-3 flex items-center py-3 disabled:opacity-50 w-full"
              disabled={username !== "" && !usernameAvaibable}
            >
              Signup
            </button>
          </Link>
        </div>
        <div className="lg:w-full w-11/12 mx-auto">
          {isCheckingUsername && (
            <div className="flex items-center text-accent my-2">
              <p className="text-xl animate-spin">
                <RiLoader3Fill />
              </p>
              <small>Checking...</small>
            </div>
          )}
          {!usernameAvaibable && !isCheckingUsername && username && (
            <div className="flex items-center text-red-500 my-2">
              <p className="text-xl">
                <IoCloseCircleOutline />
              </p>
              <small>{usernameCheckMsg}</small>
            </div>
          )}
          {usernameAvaibable && !isCheckingUsername && (
            <div className="flex items-center text-green-500 my-2">
              <p className="text-xl">
                <BsCheckAll />
              </p>
              <small>{usernameCheckMsg}</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
