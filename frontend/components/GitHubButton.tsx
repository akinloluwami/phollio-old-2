import React from "react";
import { SiGithub } from "react-icons/si";

const GitHubButton = ({ action }: any) => {
  return (
    <button className="w-full flex items-center justify-center mt-4 bg-gray-800 text-white px-3 py-3  gap-2">
      <SiGithub /> Continue with GitHub
    </button>
  );
};

export default GitHubButton;
