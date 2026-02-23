"use client";
import { navData } from "@/data/navdata";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Logo, SearchIcon, UserIcon } from "../svg/svgContainer";
import { useSelector } from "react-redux";
import { HiXMark } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 lg:px-10">
        <div className="container mx-auto bg-light py-4 px-6 lg:py-8 lg:px-10 rounded-[24px] lg:rounded-3xl flex items-center justify-between relative shadow-sm">

          <div className="flex items-center">
            <button
              className="lg:hidden p-1"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <FaBars className="text-darkgray" />
            </button>

            <ul className="hidden lg:flex items-center gap-8">
              {navData?.map((item, i) => (
                <li key={i}>
                  <Link className="font-semibold text-darkgray hover:text-primary transition-colors" href={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href={"/"}>
              <Logo className="w-24 lg:w-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:gap-10">
            <div className="hidden lg:block"><SearchIcon /></div>
            <div className="hidden lg:block"><UserIcon /></div>
            <div className="block lg:hidden"><UserIcon /></div>
            <Link
              href={"/shopping_bag"}
              className="w-8 h-8 font-semibold text-[14px] flex items-center justify-center rounded-full bg-accent text-darkgray"
            >
              {cartItems.length}
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      <div className={`fixed top-0 left-0 bottom-0 z-[70] w-3/4 max-w-xs bg-light p-6 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex justify-between items-center ">
          <Logo className="w-20" />
          <button onClick={() => setIsOpen(false)}>
            <HiXMark size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6">
          {navData?.map((item, i) => (
            <li key={i} onClick={() => setIsOpen(false)}>
              <Link className="text-xl font-bold text-darkgray" href={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 pt-10 border-t border-gray-200 flex gap-6">
          <SearchIcon />
          <p className="font-semibold">Search</p>
        </div>
      </div>

      <div className="lg:h-28 h-15" />
    </>
  );
};

export default Navbar;