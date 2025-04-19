import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";

const ProjectDetail = () => {
  return (
    <div className="bg-[rgba(255,233,217,1)]">
      {/* Top Section */}
      <div className="py-10 px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 items-start">
          <div className="md:w-1/2">
            <div className="text-lg sm:text-xl mb-4">
              <span>UI design</span>
              <span className="ml-4 sm:ml-10 text-orange-400">-02-2019</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Mantero fintech dashboard design
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-col gap-5">
            <div className="flex flex-wrap gap-6">
              <div>
                <h3 className="text-gray-500">Client</h3>
                <span className="text-base font-bold">Mshorom</span>
              </div>
              <div>
                <h3 className="text-gray-500">Categories</h3>
                <span className="text-base font-bold">User Experience</span>
              </div>
              <div>
                <h3 className="text-gray-500">Tools</h3>
                <span className="text-base font-bold">Figma, Webflow</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div>
                <h3 className="text-gray-500">Start date</h3>
                <span className="text-base font-bold">09/01/2020</span>
              </div>
              <div>
                <h3 className="text-gray-500">End date</h3>
                <span className="text-base font-bold">Coming soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center items-center mt-10">
          <img
            src="/banner.png"
            alt="Banner"
            className="w-full max-w-5xl object-cover rounded-md"
          />
        </div>

        {/* Overview Section */}
        <div className="max-w-5xl mx-auto mt-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Overview</h1>
          <p className="text-gray-900 text-justify leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <p className="mt-6 text-gray-500 leading-relaxed">
            Magnam numquam rem sapiente ipsam architecto fugiat libero vel...
          </p>

          <ul className="text-lg sm:text-xl mt-10 font-bold list-disc list-inside space-y-2">
            <li>Advantages</li>
            <li>Accomplished</li>
            <li>Marketplace startups</li>
            <li>Saas startups</li>
          </ul>

          {/* Typography */}
          <h2 className="text-3xl sm:text-4xl font-bold mt-10">Typography</h2>
          <p className="text-justify text-lg text-gray-900 mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">
            <img
              src="/post1.png"
              alt=""
              className="w-full sm:w-1/2 rounded-md"
            />
            <img
              src="/post2.png"
              alt=""
              className="w-full sm:w-1/2 rounded-md"
            />
          </div>

          {/* Conclusion */}
          <h1 className="text-3xl sm:text-4xl font-bold mt-10 mb-5">
            Conclusion
          </h1>
          <div className="flex flex-col md:flex-row gap-8 text-lg text-gray-600">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>

          {/* Portfolio */}
          <div className="animate__animated animate__jello mt-16 text-center">
            <h3 className="text-orange-400 text-2xl sm:text-3xl md:text-4xl font-bold">
              Portfolio
            </h3>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
              My Recent <span className="text-orange-400">W</span>ork
            </h1>
          </div>

          {/* Projects */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
            {[1, 2].map((_, i) => (
              <div key={i} className="max-w-md w-full">
                <img
                  src={`/project${i === 0 ? "7" : "4 (1)"}.png`}
                  alt={`Project ${i + 1}`}
                  className="w-full rounded-md"
                />
                <div className="flex flex-wrap gap-3 py-4">
                  <button className="border rounded-3xl px-4 py-1 hover:bg-black hover:text-white duration-150 text-sm">
                    App
                  </button>
                  <button className="border rounded-3xl px-4 py-1 hover:bg-black hover:text-white duration-150 text-sm">
                    Development
                  </button>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h1 className="text-xl sm:text-2xl font-bold">
                    {i === 0
                      ? "Basinic Finance App"
                      : "Oxilex Dashboard Design"}
                  </h1>
                  <MdOutlineArrowOutward className="text-3xl sm:text-4xl font-bold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="animate__animated animate__fadeInRight px-4 sm:px-6 md:px-20 py-16 bg-black text-white">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* Left */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              let<span className="text-orange-400">'s</span> work together
            </h1>
            <p className="mt-4 text-lg font-semibold text-gray-400">
              Product Designer <span className="text-white">|</span> Based in
              Pakistan
            </p>
            <div className="flex gap-6 text-2xl mt-6">
              <FaBehance className="hover:text-orange-500 transition cursor-pointer" />
              <FaLinkedinIn className="hover:text-orange-500 transition cursor-pointer" />
              <IoBasketballOutline className="hover:text-orange-500 transition cursor-pointer" />
              <FaGithub className="hover:text-orange-500 transition cursor-pointer" />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 mt-10 md:mt-0 w-full md:w-auto">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="bg-black shadow-md border border-gray-700 rounded-2xl p-6 w-full md:w-80 transition hover:shadow-lg"
              >
                <p className="text-white font-bold text-2xl mb-6">
                  {i === 0
                    ? "Looking for a high-tech designer?"
                    : "Have a project in mind?"}
                </p>
                <p className="flex items-center gap-3 font-semibold text-2xl text-orange-400 cursor-pointer">
                  hello@ahsan.com <MdOutlineArrowOutward />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Branding */}
        <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-bold mt-24 border-b border-gray-700 pb-4 text-[#ffe9d9]">
          Ahsan Bashir
        </h1>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm text-gray-500">
          <p>© 2023 All rights reserved</p>
          <button className="flex items-center gap-2 mt-2 md:mt-0 hover:text-white transition">
            Back to top <MdOutlineArrowOutward />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
