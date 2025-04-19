import React from "react";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
const ProjectSection = () => {
  return (
    <div>
      <div className="py-20">
        <h3 className="text-center text-2xl font-bold text-orange-400">
          Portfolio
        </h3>
        <h1 className=" text-5xl md:text-8xl text-center font-bold">
          My recent <span className="bg-orange-500 rounded-[100%]">w</span>ork
        </h1>
      </div>
      <div className=" mt-2 md:flex justify-center gap-5 mb-5">
        <div>
          <img
            className=" mt-2 hover:shadow-2xl"
            src="public/project1 (1).png"
            alt=""
          />
        </div>
        <img
          className=" mt-2 hover:shadow-2xl"
          src="public/project1.png"
          alt=""
        />
      </div>

      <div className=" mt-2 md:flex justify-center gap-5">
        <img
          className=" mt-2 hover:shadow-2xl"
          src="public/project3.png"
          alt=""
        />

        <img
          className=" mt-2 hover:shadow-2xl"
          src="public/project4.png"
          alt=""
        />
        <img
          className=" mt-2 hover:shadow-2xl"
          src="public/project5.png"
          alt=""
        />
      </div>

      <div className=" mt-2 md:flex justify-center gap-5 md:mt-5">
        <img
          className=" mt-2 hover:shadow-2xl"
          src="public/project1.png"
          alt=""
        />
        <img
          className=" mt-2 hover:shadow-2xl"
          src="public/project7.png"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center mt-10">
        <footer className=" animate__animated animate__fadeInRight px-6 md:px-20 py-16 bg-black text-white pt-30">
          <div className="flex flex-col md:flex-row justify-between gap-16">
            {/* Left Section */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                let<span className="text-orange-400">'s</span> work together
              </h1>
              <p className="mt-4 text-lg font-semibold text-gray-400">
                Product Designer <span className="text-white">|</span> Based in
                Pakistan
              </p>

              <div className="flex gap-6 text-2xl mt-6 text-white">
                <FaBehance className="hover:text-orange-500 transition cursor-pointer" />
                <FaLinkedinIn className="hover:text-orange-500 transition cursor-pointer" />
                <IoBasketballOutline className="hover:text-orange-500 transition cursor-pointer" />
                <FaGithub className="hover:text-orange-500 transition cursor-pointer" />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-8 mt-10">
              {/* Contact Card 1 */}
              <div className="bg-black shadow-md border border-gray-700 rounded-2xl p-6 w-full md:w-80 transition hover:shadow-lg flex flex-col justify-between h-full">
                <div>
                  <p className="text-white font-bold text-2xl mb-6">
                    Looking for a high-tech designer?
                  </p>
                </div>
                <p className="flex items-center gap-3 font-semibold text-2xl text-orange-400 cursor-pointer">
                  hello@ahsan.com <MdOutlineArrowOutward />
                </p>
              </div>

              {/* Contact Card 2 */}
              <div className="bg-black-900 shadow-md border border-gray-700 rounded-2xl p-6 w-full md:w-80 transition hover:shadow-lg flex flex-col justify-between h-full">
                <div>
                  <p className="text-white text-2xl font-bold mb-6">
                    Have a project in mind?
                  </p>
                </div>
                <p className="flex items-center gap-3 font-semibold text-2xl text-orange-400 cursor-pointer">
                  hello@ahsan.com <MdOutlineArrowOutward />
                </p>
              </div>
            </div>
          </div>

          {/* Footer Branding */}
          <h1 className=" text-center text-6xl md:text-8xl font-bold mt-24 border-b border-gray-700 pb-4 text-[#ffe9d9]">
            Ahsan Bashir
          </h1>

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm text-gray-500">
            <p>© 2023 All rights reserved</p>
            <button className="flex items-center gap-2 mt-2 md:mt-0 hover:text-white transition">
              Back to top <MdOutlineArrowOutward />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProjectSection;
