"use client";
import React, { useRef, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ProductCard from "./cards/ProductCard";
import ProductSkeleton from "./cards/ProductSkeleton";
import SectionTitle from "./shared/SectionTitle";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const ProductSlider = ({ products = [], isLoading }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const mobileGroups = useMemo(() => {
    const result = [];
    for (let i = 0; i < products.length; i += 4) {
      result.push(products.slice(i, i + 4));
    }
    return result;
  }, [products]);

  return (
    <div className="lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end pb-4 lg:pb-8 px-4 lg:px-0">
          <SectionTitle
            className="text-darkgray text-[24px] lg:text-[48px]"
            title="Categories"
          />
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`p-3 bg-darkgray text-white rounded-md transition-opacity ${isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
                }`}
            >
              <HiChevronLeft size={16} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`p-3 bg-darkgray text-white rounded-md transition-opacity ${isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
                }`}
            >
              <HiChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="block lg:hidden px-4">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={handleSlideChange}
            pagination={{ clickable: true, el: ".mobile-pagination" }}
            className="pb-12"
          >
            {isLoading
              ? Array.from({ length: 2 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="grid grid-cols-2 gap-4">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <ProductSkeleton key={j} />
                    ))}
                  </div>
                </SwiperSlide>
              ))
              : mobileGroups.map((group, i) => (
                <SwiperSlide key={i}>
                  <div className="grid grid-cols-2 gap-4">
                    {group.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="mobile-pagination flex justify-center mt-4" />
        </div>

        <div className="hidden lg:block">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={4}
            onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={handleSlideChange}
            pagination={{ clickable: true, el: ".desktop-pagination" }}
            className="pb-12"
          >
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <ProductSkeleton />
                </SwiperSlide>
              ))
              : products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="desktop-pagination flex justify-center mt-10" />
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;