import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-[rgba(255,233,217,1)] overflow-hidden">
      {/* Background Image */}
     

      {/* Hero Content */}
      <div className="relative z-20 md:mr-[500px] flex justify-center items-center px-4 py-16 md:py-28 max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 md:ml-20">
          <p className="text-4xl font-bold text-gray-700">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold animate__animated animate__fadeInUp font-Syne">
            <span className="text-orange-400">M</span>ark Henry.
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 font-bold mt-5">
            Products Designer | Based in Pakistan
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10 animate__animated animate__fadeInUp">
            <Link to="/contact">
              <button className="flex border cursor-pointer px-5 py-3 rounded bg-black font-bold text-white hover:bg-[rgba(255,233,217,1)] hover:border hover:text-black duration-150">
                Let's Talk <MdOutlineArrowOutward className="mt-1 ml-2" />
              </button>
            </Link>
            <Link to="/project">
              <button className="flex items-center border cursor-pointer border-black px-5 py-3 rounded hover:bg-black hover:text-white font-bold text-black transition-colors duration-200">
                My Work <MdOutlineArrowOutward className="ml-2" />
              </button>
            </Link>
          </div>

          {/* Stats and Social Icons */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-20 mt-11 items-center animate__animated animate__fadeInUp">
            <span className="text-4xl font-bold mt-2 text-center md:text-left">
              1.2k <span className="text-yellow-600">+</span>
              <span className="text-xl md:text-lg ml-2 text-gray-600">
                Worldwide Client
              </span>
            </span>

            <span className="flex gap-6 text-3xl md:text-xl">
              <FaBehance className="hover:text-amber-600 duration-150 cursor-pointer" />
              <FaLinkedinIn className="hover:text-amber-600 duration-150 cursor-pointer" />
              <IoBasketballOutline className="hover:text-amber-600 duration-150 cursor-pointer" />
              <FaGithub className="hover:text-amber-600 duration-150 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
