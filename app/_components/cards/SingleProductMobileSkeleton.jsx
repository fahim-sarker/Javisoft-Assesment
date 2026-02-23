import React from "react";

const SingleProductMobileSkeleton = () => {
  return (
    <div className="p-4 space-y-6 animate-pulse lg:hidden">
      {/* Main Image */}
      <div className="aspect-square bg-gray-300 rounded-3xl" />

      {/* Thumbnail  */}
      <div className="flex gap-3 overflow-x-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-20 h-20 rounded-xl bg-gray-300 shrink-0" />
        ))}
      </div>

      {/* Title , Price */}
      <div className="space-y-3">
        <div className="h-6 w-24 bg-gray-300 rounded" />
        <div className="h-10 w-full bg-gray-300 rounded" />
        <div className="h-8 w-32 bg-gray-300 rounded" />
      </div>

      {/* Color */}
      <div className="space-y-2">
        <div className="h-4 w-16 bg-gray-300 rounded" />
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <div className="w-8 h-8 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* Size Grid */}
      <div className="grid grid-cols-5 gap-2">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="h-12 bg-gray-300 rounded-md" />
          ))}
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        <div className="h-14 w-full bg-gray-300 rounded-xl" />
        <div className="h-14 w-full bg-gray-300 rounded-xl" />
      </div>
    </div>
  );
};

export default SingleProductMobileSkeleton;
