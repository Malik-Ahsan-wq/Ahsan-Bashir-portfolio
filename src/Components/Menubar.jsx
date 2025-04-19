import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        {/* Navbar Section */}
        <div className="relative w-full border-b overflow-visible">
          {/* Navbar Content */}
          <div className="w-full flex p-3 items-center justify-between md:p-2 md:px-10 relative z-10">
            <Link to="/">
              <img className="w-24 h-7" src="/logo..png" alt="Logo" />
            </Link>

            <ul className="flex items-center">
              {/* Desktop "Let's Talk" */}
              <div className="hidden md:flex items-center">
                <Link to="/contact">
                  <span className="text-ms font-bold hover:text-white duration-400">
                    Let's Talk
                  </span>
                </Link>
                <span className="text-2xl ml-5 cursor-pointer">
                  <MdOutlineArrowOutward />
                </span>
              </div>

              {/* Hamburger Menu - Mobile */}
              <button
                onClick={handleToggle}
                className="ml-5 bg-black text-white p-3 md:px-6 md:py-6 text-2xl cursor-pointer"
              >
                <HiMenuAlt4 />
              </button>
            </ul>
          </div>

          {/* Right-Side Image BELOW Navbar */}
         
        </div>

        {/* Mobile Menu / Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] md:w-[440px] bg-black text-white px-4 py-6 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-10`}
        >
          {/* Top Logo & Close */}
          <div className="flex justify-between items-center mb-6 border-b py-4">
            <img src="/offcanvas-logo.png" alt="Logo" />
            <button
              onClick={handleToggle}
              className="text-white cursor-pointer bg-orange-400 hover:bg-black hover:text-white p-3 text-4xl"
            >
              <IoCloseOutline />
            </button>
          </div>

          {/* Menu Links */}
          <ul className="space-y-4 text-lg font-bold text-start">
            <li>
              <Link to="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-orange-400">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/detail" className="hover:text-orange-400">
                Projects Detail
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-orange-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blogDetail" className="hover:text-orange-400">
                Blog Detail
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl mt-16">
            <FaBehance className="hover:text-amber-600 duration-150 cursor-pointer" />
            <FaLinkedinIn className="hover:text-amber-600 duration-150 cursor-pointer" />
            <IoBasketballOutline className="hover:text-amber-600 duration-150 cursor-pointer" />
            <FaGithub className="hover:text-amber-600 duration-150 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menubar;
