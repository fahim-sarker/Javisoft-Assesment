import Image from "next/image";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="w-full max-w-40 lg:max-w-80 min-h-[200px] lg:min-h-121.5 group">
      <div className="relative overflow-hidden rounded-4xl  border-4 lg:border-10 border-light">
        <p className="absolute left-0 top-0 z-10 rounded-tl-3xl rounded-br-3xl bg-primary w-12 h-8 px-4 flex items-center justify-center py-3 text-xs font-semibold text-white">
          New
        </p>

        <div className="relative h-[150px] lg:h-87.5 w-full group-hover:scale-105 cursor-pointer duration-300 ease-in-out">
          <Image
            src={product?.images[0]}
            alt="Adidas 4DFWD x Parley Running Shoes"
            fill
            unoptimized
            className="object-cover "
            priority
          />
        </div>
      </div>

      <div className="mt-3 px-2 ">
        <h2 className="text-base lg:text-2xl lg:h-11 font-semibold leading-none line-clamp-1 text-darkgray">
          {product?.title}
        </h2>

        <Link
          href={`/product_details/${product?.id}`}
          className="mt-3 flex w-full items-center justify-center rounded-xl bg-darkgray px-3 lg:px-0 py-3 lg:py-5 text-[10px] lg:text-sm font-bold tracking-widest text-white transition-transform active:scale-[0.98] whitespace-nowrap"
        >
          VIEW PRODUCT –
          <span className="ml-1 text-[#F1A23A]">${product?.price}</span>
        </Link>
      </div>
    </div>
  );
}
