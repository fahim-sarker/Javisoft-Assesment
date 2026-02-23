"use client";
import React from "react";
import ProductCard from "./cards/ProductCard";
import SectionTitle from "./shared/SectionTitle";
import Button from "./shared/Button";
import { useProduct } from "@/api/data.hook";
import ProductSkeleton from "./cards/ProductSkeleton";

const ProductSection = () => {
  const { data: products, isLoading } = useProduct();

  return (
    <div className="container  mx-auto xl:px-0 px-4 py-10 lg:py-20 flex flex-col gap-4  lg:gap-8">
      <div className="flex items-end justify-between">
        <SectionTitle title={"Don’t miss out new drops"} />
        <Button title={"Shop New Drops"} />
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2 lg:flex-nowrap lg:gap-3">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : products
              ?.slice(10,14)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
      </div>
    </div>
  );
};

export default ProductSection;
