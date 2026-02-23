import React from "react";

const SingleProductSkeleton = () => {
  return (
    <div className="mx-auto max-w-7xl hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-10 animate-pulse">
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square bg-gray-500 rounded-3xl" />
        ))}
      </div>

      <div className="lg:col-span-4 space-y-6">
        <div className="space-y-4">
          <div className="h-6 w-24 bg-gray-500 rounded" />
          <div className="h-10 w-full bg-gray-500 rounded" />
          <div className="h-8 w-32 bg-gray-500 rounded" />
        </div>

        <div className="space-y-3">
          <div className="h-4 w-12 bg-gray-500 rounded" />
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-500" />
            <div className="w-8 h-8 rounded-full bg-gray-500" />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="h-12 bg-gray-500 rounded-md" />
            ))}
        </div>

        <div className="space-y-2">
          <div className="h-14 w-full bg-gray-500 rounded-md" />
          <div className="h-14 w-full bg-gray-500 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default SingleProductSkeleton;
