import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`h-5 rounded-full w-10 ${
        isChecked ? "bg-accent" : "bg-gray-200"
      } px-[0.5px] transition-colors cursor-pointer`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <div
        className={`h-5 w-5 bg-white transition-all shadow-md rounded-full ${
          isChecked ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
