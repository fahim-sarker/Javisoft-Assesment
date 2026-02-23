"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import banner from "../../public/banner.jpg";
import banner1 from "../../public/banner1.jpg";
import banner2 from "../../public/banner2.jpg";

const HeroSection = () => {
  const h1Ref = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const sideTextRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(h1Ref.current, {
      clipPath: "inset(0 100% 0 0)", 
      duration: 3,
      opacity: 0,
    });

    tl.from(
      [titleRef.current, paragraphRef.current, buttonRef.current],
      {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
      },
      "-=0.6"
    );

    tl.from(sideTextRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6");

    tl.from([img1Ref.current, img2Ref.current], {
      y: 50,
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      duration: 0.8,
    }, "-=0.6");
  }, []);

  return (
    <section className="container mx-auto xl:px-0 px-4">
      <h1
        ref={h1Ref}
        className="text-[11.64vw] font-bold text-black flex items-center justify-center leading-none overflow-hidden"
      >
        DO IT <span className="text-primary">RIGHT</span>
      </h1>

      <div
        className="w-full bg-center bg-cover rounded-3xl lg:rounded-[64px] px-4 lg:px-8 pb-4 lg:pb-8 relative overflow-hidden mt-4"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="flex justify-between items-end min-h-[300px] lg:min-h-187.5">
          <div>
            <h3
              ref={titleRef}
              className="text-white font-semibold text-2xl lg:text-[74px] leading-none"
            >
              NIKE AIR MAX
            </h3>
            <p
              ref={paragraphRef}
              className="text-sm lg:text-2xl text-white font-semibold line-clamp-2"
            >
              Nike introducing the new air max for
              <br /> everyone&apos;s comfort
            </p>
            <button
              ref={buttonRef}
              className="bg-primary py-2 lg:py-4 px-4 lg:px-8 rounded-lg border border-primary text-white text-xs lg:text-sm font-medium hover:bg-transparent duration-300 ease-in-out lg:mt-5 uppercase cursor-pointer"
            >
              Shop now
            </button>
          </div>

          <div className="flex flex-col gap-2 lg:gap-4">
            <Image
              ref={img1Ref}
              src={banner1}
              alt="banneritem1"
              width={160}
              height={160}
              className="object-cover border-[3px] border-white rounded-2xl lg:rounded-4xl"
              priority
            />
            <Image
              ref={img2Ref}
              src={banner2}
              alt="banneritem2"
              width={160}
              height={160}
              className="object-cover border-[3px] border-white rounded-2xl lg:rounded-4xl"
              priority
            />
          </div>
        </div>

        <h5
          ref={sideTextRef}
          className="-rotate-90 bg-darkgray p-2 lg:p-6 rounded-lg absolute top-20 lg:top-40 -left-[60px] lg:-left-21.25 text-white text-xs lg:text-base font-medium"
        >
          Nike product of the year
        </h5>
      </div>
    </section>
  );
};

export default HeroSection;