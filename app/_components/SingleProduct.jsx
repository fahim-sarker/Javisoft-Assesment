"use client";

import { useProduct, useSingleProduct } from "@/api/data.hook";
import React, { useEffect, useState } from "react";
import { FiHeart, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SingleProductSkeleton from "./cards/SingleProductSkeleton";
import ProductSlider from "./ProductSlider";
import SingleProductMobileSkeleton from "./cards/SingleProductMobileSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSingleCart,
  loadCartFromStorage,
} from "@/feature/product/CartSlice";
import { toast } from "react-toastify";
const SingleProduct = ({ id }) => {
  const { data, isLoading } = useSingleProduct(id);
  const { data: products, isLoading: singleLoading } = useProduct();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const sizes = [38, 39, 40, 41, 42, 43];
  const outOfStock = [39, 40];

  useEffect(() => {
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  if (isLoading)
    return (
      <>
        <SingleProductMobileSkeleton />
        <SingleProductSkeleton />;
      </>
    );
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.warn("Please select a size", { position: "bottom-left" });
      return;
    }

    const existingItem = cartItems.find(
      (item) => item._id === data._id && item.sizeAtr === selectedSize,
    );

    dispatch(
      addToSingleCart({
        id: data._id,
        title: data.title,
        price: data.price,
        image: data.images[0],
        sizeAtr: selectedSize,
        colorAtr: "Default",
        cartQuantity: 1,
      }),
    );

    if (existingItem) {
      toast.info("Quantity updated in cart", { position: "bottom-left" });
    } else {
      toast.success("Product added to cart", { position: "bottom-left" });
    }
  };
  return (
    <div className="min-h-screen p-4 md:p-10 font-sans text-darkgray ">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10">
        <div className="lg:col-span-8">
          <div className="block lg:hidden space-y-4">
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm">
              <img
                src={data?.images?.[activeImg]}
                alt="Product"
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {data?.images?.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 w-2 rounded-full transition-all ${activeImg === idx ? "bg-primary " : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {data?.images?.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`aspect-square w-20 rounded-xl overflow-hidden border transition-all shrink-0
        ${
          activeImg === idx ? "border-primary" : "border-transparent opacity-60"
        }
      `}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="thumb"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {data?.images?.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt={data?.title}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-3 lg:space-y-6">
          <section>
            <span className="inline-block bg-primary text-white text-[10px] font-bold px-2 py-1 rounded mb-4 uppercase tracking-widest">
              New Release
            </span>
            <h1 className="text-3xl font-black uppercase tracking-tight leading-none text-[#1A1A1A]">
              {data?.title}
            </h1>
            <p className="text-2xl font-bold text-primary mt-3">
              ${data?.price}
            </p>
          </section>

          {/* Color Selection */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3 text-gray-500">
              Color
            </p>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-[#253043] border-2 border-white ring-1 ring-darkgray" />
              <button className="w-8 h-8 rounded-full bg-[#707E6E] border-2 border-transparent hover:ring-1 hover:ring-gray-400 transition-all" />
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-end mb-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                Size
              </p>
              <button className="text-[10px] font-bold underline uppercase hover:text-primary">
                Size Chart
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {sizes.map((size) => {
                const isUnavailable = outOfStock.includes(size);
                const isActive = selectedSize === size;
                return (
                  <button
                    key={size}
                    disabled={isUnavailable}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 text-sm font-bold rounded-xl border transition-all 
                      ${isUnavailable ? "opacity-20 cursor-not-allowed bg-gray-100 border-transparent" : "hover:border-darkgray shadow-sm"}
                      ${isActive ? "bg-darkgray text-white border-darkgray scale-95" : "bg-white text-darkgray border-transparent"}
                    `}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleAddToCart}
              className="flex-3 cursor-pointer bg-darkgray text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-colors shadow-lg shadow-gray-200"
            >
              Add to Cart
            </button>
            <button className="flex-1 flex cursor-pointer items-center justify-center border-2 border-gray-200 rounded-xl hover:bg-white hover:border-darkgray transition-all">
              <FiHeart size={20} />
            </button>
          </div>

          <button className="w-full cursor-pointer bg-primary text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#3d5cd9] transition-all shadow-lg shadow-blue-100">
            Buy It Now
          </button>

          {/* Description */}
          <div className="border-t border-gray-200 pt-6 mt-4">
            <h3 className="font-bold text-darkgray uppercase text-sm mb-2">
              About the Product
            </h3>
            <p className="text-xs font-medium text-gray-400 mb-4 tracking-wide">
              SHADOW NAVY / ARMY GREEN
            </p>
            <p className="text-[13px] leading-relaxed text-gray-600 italic">
              {data?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 lg:mt-16">
        <ProductSlider products={products} isLoading={singleLoading} />
      </div>
    </div>
  );
};

export default SingleProduct;
