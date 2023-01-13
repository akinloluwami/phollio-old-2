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
    <div className="bg-accent h-screen w-screen text-white">
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
        <button className="lg:hidden">
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
              <b>Sign up</b>- it's fine
            </button>
          </Link>
        </div>
      </div>
      <h1 className="lg:text-7xl text-5xl mt-10 text-center font-bold">
        Your{" "}
        <Typewriter
          words={["projects", "links", "tech stack", "...everything"]}
          loop={1000000000000000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />{" "}
        <br /> all in one place.{" "}
      </h1>
      <div className="max-w-xl mt-8 mx-auto"></div>
    </div>
  );
};

export default Hero;
