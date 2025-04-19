import React from 'react'
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
const BlogSection = () => {
  return (
    <div>
      <div className="py-20">
        <h3 className="text-center text-3xl font-bold text-orange-400">Blog</h3>
        <h1 className="text-center text-6xl font-bold mb-20">My Blog Post</h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full max-w-sm flex flex-col items-start mt-10 md:mt-20">
            <img className="w-full" src="/blog1.png" alt="blog1" />
            <span className="mt-5 text-sm">
              <span className="mr-1">•</span>UI Design
            </span>
            <span className="text-lg text-orange-400 mt-1">
              <span className="mr-1">•</span>03 May 2019
            </span>
            <p className="text-2xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>

          <div className="w-full max-w-sm flex flex-col items-start mt-10 md:mt-20">
            <img className="w-full" src="/blog2.png" alt="blog2" />
            <span className="mt-5 text-sm">
              <span className="mr-1">•</span>UI Design
            </span>
            <span className="text-lg text-orange-400 mt-1">
              <span className="mr-1">•</span>03 May 2019
            </span>
            <p className="text-2xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>

          <div className="w-full max-w-sm flex flex-col items-start mt-10 md:mt-20">
            <img className="w-full" src="/blog3.png" alt="blog3" />
            <span className="mt-5 text-sm">
              <span className="mr-1">•</span>UI Design
            </span>
            <span className="text-lg text-orange-400 mt-1">
              <span className="mr-1">•</span>03 May 2019
            </span>
            <p className="text-2xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>

          <div className="w-full max-w-sm flex flex-col items-start mt-10 ">
            <img className="w-full" src="/blog4.png" alt="blog4" />
            <span className="mt-5 text-sm">
              <span className="mr-1">•</span>UI Design
            </span>
            <span className="text-lg text-orange-400 mt-1">
              <span className="mr-1">•</span>03 May 2019
            </span>
            <p className="text-2xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <h3 className="text-center text-3xl font-bold text-orange-400">Blog</h3>
        <h1 className="text-center text-6xl font-bold mb-20">My Blog Post</h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full max-w-sm flex flex-col items-start mt-10 md:mt-30">
            <img className="w-full" src="/blog1.png" alt="blog1" />
            <span className="mt-5 text-sm">
              <span className="mr-1">•</span>UI Design
            </span>
            <span className="text-lg text-orange-400 mt-1">
              <span className="mr-1">•</span>03 May 2019
            </span>
            <p className="text-2xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>

          <div className="w-full max-w-sm flex flex-col items-start mt-10 md:mt-30">
            <img className="w-full" src="/blog2.png" alt="blog2" />
            <span className="mt-5 text-sm">
              <span className="mr-1">•</span>UI Design
            </span>
            <span className="text-lg text-orange-400 mt-1">
              <span className="mr-1">•</span>03 May 2019
            </span>
            <p className="text-2xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>

          <div className="w-full max-w-sm flex flex-col items-start mt-10 ">
            <img className="w-full" src="/blog3.png" alt="blog3" />
            <span className="mt-5 text-sm">
              <span className="mr-1">•</span>UI Design
            </span>
            <span className="text-lg text-orange-400 mt-1">
              <span className="mr-1">•</span>03 May 2019
            </span>
            <p className="text-2xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>

          <div className="w-full max-w-sm flex flex-col items-start mt-10 md:mt-30">
            <img className="w-full" src="/blog4.png" alt="blog4" />
            <span className="mt-5 text-sm">
              <span className="mr-1">•</span>UI Design
            </span>
            <span className="text-lg text-orange-400 mt-1">
              <span className="mr-1">•</span>03 May 2019
            </span>
            <p className="text-2xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>
        </div>
      </div>

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
  );
}

export default BlogSection
