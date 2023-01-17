import React from "react";

const User404 = () => {
  return (
    <div className="mt-20">
      <center>
        <div className="h-32 w-32 bg-accent rounded-full"></div>
      </center>
      <h1 className="text-center text-2xl my-10">
        The page you're looking for doesn't exist.
      </h1>
      <p className="text-center">
        Want this to be your username?{" "}
        <a href="#" className="underline">
          Create your Phollio now.
        </a>{" "}
      </p>
    </div>
  );
};

export default User404;
