import React from "react";
import Marquee from "react-fast-marquee";

const Comapnies = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6">
      <div className="pb-10 pt-10 w-full max-w-7xl">
        <Marquee>
          <div className="flex flex-wrap md:flex-nowrap gap-10 sm:gap-16 md:gap-20 border-b border-t border-gray-400 w-full justify-center items-center p-5">
            <img
              src="/logo1.svg"
              alt="logo1"
              className="h-10 sm:h-12 md:h-14"
            />
            <img
              src="/logo2.svg"
              alt="logo2"
              className="h-10 sm:h-12 md:h-14"
            />
            <img
              src="/logo3.svg"
              alt="logo3"
              className="h-10 sm:h-12 md:h-14"
            />
            <img
              src="/logo4.svg"
              alt="logo4"
              className="h-10 sm:h-12 md:h-14"
            />
            <img
              src="/logo5.svg"
              alt="logo5"
              className="h-10 sm:h-12 md:h-14"
            />
            <img
              src="/logo6.svg"
              alt="logo6"
              className="h-10 sm:h-12 md:h-14"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Comapnies;
