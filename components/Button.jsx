import React from "react";

const Button = ({ text }) => {
  return (
    <div className=" flex px-4 py-2 bg-black text-white rounded-3xl cursor-pointer">
      {text}
    </div>
  );
};

export default Button;
