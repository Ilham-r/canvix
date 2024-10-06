import React from "react";

const Button = ({ text, color }) => {
  return (
    <div
      className={` flex px-4 z-10 py-2 rounded-3xl cursor-pointer ${
        color ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {text}
    </div>
  );
};

export default Button;
