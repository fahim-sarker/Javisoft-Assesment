import React from "react";

const Button = ({ title }) => {
  return (
    <button className="h-8 lg:h-12 py-2  px-2 lg:px-8 flex items-center justify-center text-xs lg:text-sm font-medium bg-primary text-white rounded-lg leading-none uppercase cursor-pointer tracking-[0.25px] whitespace-nowrap">
      {title}
    </button>
  );
};

export default Button;
