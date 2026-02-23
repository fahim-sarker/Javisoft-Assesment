import React from "react";

const SectionTitle = ({ title, className }) => {
  return (
    <h3 className={`lg:max-w-147.25 text-2xl md:text-[3.85vw] text-darkgray font-semibold uppercase leading-none md:leading-[70.3px] ${className}`}>
      {title}
    </h3>
  );
};

export default SectionTitle;
