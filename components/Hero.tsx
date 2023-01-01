import Link from "next/link";
import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const Hero = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="bg-accent h-screen w-screen text-white">
      <div className="px-20 flex justify-between py-8 items-center">
        <h1>YouPage</h1>
        <div className="">
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
        <div className="">
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
      <h1 className="text-7xl mt-10 text-center font-bold">
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
      <div className="flex items-center justify-center mt-16 bg-white text-black w-fit mx-auto text-xl pl-5">
        <b>youpage.dev/</b>
        <input
          type="text"
          placeholder="yourname"
          className="outline-none font-semibold"
          spellCheck={"false"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Link href={`/signup?username=${username}`}>
          <button className="bg-black text-white py-4 px-3 flex items-center">
            Start your page
            <AiOutlineCaretRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
