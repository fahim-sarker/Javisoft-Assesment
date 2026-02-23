"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import "swiper/css";
import SectionTitle from "./shared/SectionTitle";
import { useCategory } from "@/api/data.hook";
import CartegoryCard from "./cards/CategoryCard";
import CategorySkeleton from "./cards/CategorySkeleton";

const CategorySection = () => {
  const { data: categories, isLoading } = useCategory();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="bg-darkgray min-h-screen lg:min-h-206 mb-10 lg:mb-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-end pt-[30px] mb-[30px] lg:pt-22.5 lg:pb-22.5">
          <SectionTitle className={"text-white"} title={"Categories"} />

          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`p-3 bg-background text-darkgray rounded-md transition-colors ${isBeginning
                  ? "opacity-50 cursor-not-allowed "
                  : "opacity-100 cursor-pointer  hover:bg-white"
                }`}
            >
              <HiChevronLeft size={10} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`p-3 bg-background text-darkgray rounded-md transition-colors ${isEnd
                  ? "opacity-50 cursor-not-allowed "
                  : "opacity-100 cursor-pointer hover:bg-white"
                }`}
            >
              <HiChevronRight size={10} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          spaceBetween={10}
          direction="vertical"
          slidesPerView={2}
          breakpoints={{
            640: {
              direction: "horizontal",
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              direction: "horizontal",
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }}
          className="mySwiper h-[730px]"
        >
          {isLoading
            ? Array.from({ length: 2 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CategorySkeleton />
              </SwiperSlide>
            ))
            : categories?.map((cat, index) => (
              <SwiperSlide key={index}>
                <CartegoryCard
                  cat={cat}
                  index={index}
                  activeIndex={activeIndex}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySection;