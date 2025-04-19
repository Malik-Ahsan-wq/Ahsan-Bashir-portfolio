import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5"; // Importing Close Icon
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[rgba(255,233,217,1)]">
      <div className="flex justify-center relative border-b">
        {/* Background Image */}
        <div className="absolute  top-0 right-0 z-10">
          <img
            className="hidden md:inline-block animate__animated animate__fadeInRight w-180"
            src="/header.png"
            alt="header image"
          />
        </div>

        {/* Navbar Content */}
        <div className="w-full flex p-3 items-center justify-between z-10 md:p-2 md:px-10">
          <Link to="/">
            <img className="w-24 h-7" src="/logo..png" alt="Logo" />
          </Link>
          <ul className="flex items-center">
            {/* Desktop "Let's Talk" */}
            <div className="hidden md:flex items-center">
              <Link to="/contact">
                {" "}
                <a
                  className="text-ms font-bold hover:text-white duration-400"
                  href="#contact"
                >
                  Let's Talk
                </a>
              </Link>

              <span className="text-2xl ml-5 cursor-pointer">
                <MdOutlineArrowOutward />
              </span>
            </div>

            {/* Hamburger Menu - Mobile */}
            <button
              onClick={handleToggle}
              className="ml-5 md: bg-black text-white p-3 md:px-6 md:py-6 text-2xl  cursor-pointer"
            >
              <HiMenuAlt4 />
            </button>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Overlay on Content) */}
      <div
        className={` fixed md:fixed top-0 righ-0 w-95 h-full  md:top-0 md:right-0    md:w-110 md:h-200  bg-black text-white px-4 cursor-pointer py-6 border-b border-gray-700 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : " translate-x-full md:translate-x-full"
        } z-20`}
      >
        <div className="flex justify-between items-center mb-6 border-b py-5">
          <img className="" src="/offcanvas-logo.png" alt="Logo" />
          <button
            onClick={handleToggle}
            className="   cursor-pointer text-white px-3 rounded border  py-2 text-4xl"
          >
            <IoCloseOutline />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <ul className="space-y-4 text-lg font-bold text-start ">
          <li className="border-b-1 border-gray-500">
            <Link to="/">
              <a
                href="#home"
                className="hover:text-orange-400  text-base md:text-lg "
              >
                Home
              </a>
            </Link>
          </li>

          <li className="border-b-1 border-gray-500">
            <Link to="/about">
              <a
                href="/about"
                className="hover:text-orange-400 text-base md:text-lg"
              >
                About
              </a>
            </Link>
          </li>

          <li className="border-b-1 border-gray-500">
            <Link to="/project">
              <a
                href="#work"
                className="hover:text-orange-400 text-base md:text-lg"
              >
                Projects
              </a>
            </Link>
          </li>
          <li className="border-b-1 border-gray-500">
            <Link to="/detail">
              <a
                href="#contact"
                className="hover:text-orange-400 text-base md:text-lg"
              >
                Projects detail
              </a>
            </Link>
          </li>
          <li className="border-b-1 border-gray-500">
            <Link to="/blog">
              {" "}
              <a
                href="#contact"
                className="hover:text-orange-400 text-base md:text-lg"
              >
                Blog
              </a>
            </Link>
          </li>
          <li className="border-b-1 border-gray-500">
            <Link to="/blogDetail">
              <a
                href="#contact"
                className="hover:text-orange-400 text-base md:text-lg"
              >
                Blog detail
              </a>
            </Link>
          </li>
          <li className="border-b-1 border-gray-500">
            <Link to="/contact">
              <a
                href="#contact"
                className="hover:text-orange-400 text-base md:text-lg"
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <span className="flex gap-6 text-3xl mt-7">
          <FaBehance className="hover:text-amber-600 duration-150 cursor-pointer" />
          <FaLinkedinIn className="hover:text-amber-600 duration-150 cursor-pointer" />
          <IoBasketballOutline className="hover:text-amber-600 duration-150 cursor-pointer" />
          <FaGithub className="hover:text-amber-600 duration-150 cursor-pointer" />
        </span>
      </div>

      {/* Hero Content */}
      <div className=" md:mr-200 flex justify-center items-center px-4 py-16 md:py-32 max-w-screen-xl  mx-auto">
        <div className="flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 md:ml-20">
          <p className="text-4xl font-bold text-gray-700">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold animate__animated animate__fadeInUp font-Syne">
            <span className="text-orange-400">M</span>ark Henry.
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 font-bold mt-5">
            Products Designer <span className="font-bold text-black">|</span>{" "}
            Based in Pakistan
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
          <div className="flex flex-col md:flex-row gap-6 md:gap-20 mt-11  items-center animate__animated animate__fadeInUp">
            <span className="text-4xl font-bold mt-2 text-center md:text-left">
              1.2k <span className="text-yellow-600">+</span>
              <span className=" text-xl md:text-lg ml-2 text-gray-600">
                Worldwide Client |
              </span>
            </span>

            <span className="flex gap-6 text-3xl md:text-xl mt-4">
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

export default Navbar;
