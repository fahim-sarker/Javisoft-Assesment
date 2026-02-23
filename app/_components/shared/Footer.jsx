import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LargeLogo,
  MediumLogo,
  TiktokIcon,
  TwitterIcon,
} from "../svg/svgContainer";
import { FaPlus } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="min-h-136.25 bg-primary rounded-[24px] lg:rounded-[48px] p-4 lg:px-18 lg:py-16 flex flex-col lg:flex-row lg:justify-between">
        <div className="max-w-127.5 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-[32px] md:text-[30px] xl:text-[40px] 2xl:text-[48px] leading-tight text-white uppercase font-semibold text-whte">
              Join our KicksPlus Club & get 15% off
            </h4>
            <p className="font-sans text-base xl:text-xl text-background">
              Sign up for free! Join the community.
            </p>
          </div>

          <form className="flex items-center gap-1 ">
            <div className="max-w-86 w-full ">
              <input
                className="w-full rounded-lg  opacity-75 text-background h-12 px-2.5 py-4 bg-transparent outline outline-white"
                type="text"
                placeholder="Email Address"
              />
            </div>

            <button className="h-12 w-25.5 uppercase text-sm lg:text-base bg-darkgray text-white rounded-lg">
              submit
            </button>
          </form>
        </div>

        <div className="flex mt-5 md:mt-10 lg:mt-20 w-full lg:justify-center ">
          <div className="relative">
            <MediumLogo />
            <div className="lg:w-8 w-4 h-4 lg:h-8 flex items-center justify-center bg-accent absolute -right-2 -top-0 lg:-top-8 rounded-full text-primary text-xs lg:text-base">
              <FaPlus />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-147.75 bg-darkgray p-4 lg:p-10 rounded-[24px] lg:rounded-[48px] relative -mt-40  lg:-mt-48">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-30">
          <div className="max-w-100 xl:max-w-116.5 ">
            <h6 className="text-[24px] md:text-[36px] text-accent font-semibold">
              About us
            </h6>
            <p className="text-background font-sans text-base md:text-xl font-semibold">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 pb-18  sm:pb-0 gap-8 2xl:gap-32">
            <div className="flex flex-col gap-4">
              <h6 className="text-[20px] md:text-2xl text-accent font-semibold">
                Categories
              </h6>
              <ul className="flex flex-col gap-2">
                <li className="text-base md:text-xl font-semibold font-sans text-background">
                  Runners
                </li>
                <li className="text-base md:text-xl font-semibold font-sans text-background">
                  Sneakers
                </li>
                <li className="text-base md:text-xl font-semibold font-sans text-background">
                  Basketball
                </li>
                <li className="text-base md:text-xl font-semibold font-sans text-background">
                  Outdoor
                </li>
                <li className="text-base md:text-xl font-semibold font-sans text-background">
                  Golf
                </li>
                <li className="text-base md:text-xl font-semibold font-sans text-background">
                  Hiking
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[20px] md:text-2xl  text-accent font-semibold">
                Company
              </h6>
              <ul className="flex flex-col gap-2">
                <li className="text-base md:text-xl font-semibold font-sans text-background">
                  About
                </li>
                <li className="text-base md:text-xl font-semibold font-sans text-background">
                  Contact
                </li>
                <li className="text-base md:text-xl font-semibold font-sans text-background">
                  Blogs
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[20px] md:text-2xl text-accent font-semibold">
                Follow us
              </h6>
              <div className="flex items-center gap-3 md:gap-6">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <TiktokIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <LargeLogo />
        </div>
      </div>

      <div className="py-5 flex items-center justify-center">
        <p className="text-darkgray font-sans">&copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
