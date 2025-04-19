import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="mt-16 px-4">
      <div className="flex flex-col-reverse md:flex-row  justify-center items-center gap-10 md:gap-20 animate__animated animate__fadeInLeftBig">
        <div className="text-center md:text-left ">
          <p className="text-3xl md:text-4xl font-bold text-orange-400">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-Syne">
            <span className="text-orange-400">A</span>hsan Bashir.
          </h1>

          <p className="text-xl md:text-2xl mt-3 font-bold text-gray-400">
            Based in Pakistan
          </p>
          <p className="max-w-xl text-sm md:text-base mt-4 font-medium text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            maxime magnam voluptatibus soluta commodi, beatae magni doloremque
            ducimus velit ipsam dignissimos laborum. Cupiditate repudiandae
            impedit quae asperiores nisi dolore saepe.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-6 items-center sm:items-start justify-center sm:justify-start">
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold">08</p>
              <p className="text-sm font-semibold">Award Winner</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold">1.2k</p>
              <p className="text-sm font-semibold">Worldwide Clients</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-3xl font-bold">3.5k</p>
              <p className="text-sm font-semibold">Jobs done successfully</p>
            </div>
          </div>
          <Link to="/contact">
            <button className="flex justify-center w-full items-center gap-3 bg-black text-white px-6 py-3 border md:w-80 rounded-lg font-bold hover:bg-white hover:text-black duration-150 mt-7">
              Download my resume
              <MdOutlineArrowOutward className="text-xl" />
            </button>
          </Link>
        </div>

        <div className="w-full  md:w-1/2 max-w-md order-1">
          <img
            src="/about1.png"
            alt="about"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
