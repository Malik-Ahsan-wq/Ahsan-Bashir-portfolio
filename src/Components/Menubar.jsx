import React,{useState} from 'react'

import { HiMenuAlt4 } from "react-icons/hi";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5"; // Importing Close Icon
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
const Menubar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  return (
    <>
      <div>
        <div className="w-full flex p-3 items-center justify-between md:w-full z-10 md:p-2 md:px-10">
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
              className="ml-5 md: bg-black text-white p-3 md:px-6 md:py-6 text-2xl   cursor-pointer"
            >
              <HiMenuAlt4 />
            </button>
          </ul>
        </div>
        <div
        className={` fixed md:fixed top-0 righ-0 w-95 h-full  md:top-0 md:right-0    md:w-110 md:h-200  bg-black text-white px-4 cursor-pointer py-6 border-b border-gray-700 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : " translate-x-full md:translate-x-full"
        } z-20`}
      >

 <div className="flex justify-between items-center mb-6 border-b py-5 md:py-2">
          <img className="" src="/offcanvas-logo.png" alt="Logo" />
          <button
            onClick={handleToggle}
            className="   cursor-pointer text-white px-4 md:px-4 py-4 md:py-4 bg-orange-400  md:bg-orange-400 md:mr-2 md:duration-100 md:text-white hover:bg-black hover:text-white   text-4xl"
          >
            <IoCloseOutline />
          </button>
        </div>
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
                        <span className="flex gap-6 text-3xl mt-70 ">
                          <FaBehance className="hover:text-amber-600 duration-150 cursor-pointer" />
                          <FaLinkedinIn className="hover:text-amber-600 duration-150 cursor-pointer" />
                          <IoBasketballOutline className="hover:text-amber-600 duration-150 cursor-pointer" />
                          <FaGithub className="hover:text-amber-600 duration-150 cursor-pointer" />
                        </span>

      </div>
      </div>
    </>
  );
}

export default Menubar
