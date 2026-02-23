import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const CartegoryCard = ({ cat, index, activeIndex }) => {
  return (
    <div
      className={`relative h-[370px] lg:h-143.5 flex flex-col ${
        index === activeIndex
          ? "rounded-tl-[80px] bg-light"
          : "rounded-tl-0 bg-white"
      } overflow-hidden text-darkgray group cursor-pointer`}
    >
      <div className="relative w-full h-[284px] lg:h-112.5 flex items-center justify-center pointer-events-none">
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex justify-between items-center py-4 px-4 lg:items-end lg:px-16 lg:py-5">
        <h3 className="lg:text-3xl text-xl font-bold leading-tight lg:w-1/2">
          {cat.name}
        </h3>
        <div className="bg-darkgray p-3 rounded-md text-white">
          <FiArrowUpRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default CartegoryCard;
