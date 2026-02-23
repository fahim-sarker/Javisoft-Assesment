import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="relative h-143.5 flex flex-col rounded-tl-[80px] bg-white overflow-hidden animate-pulse">
      <div className="w-full h-112.5 bg-gray-300" />
      <div className="flex justify-between items-end px-16 py-5">
        <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-12 w-12 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
