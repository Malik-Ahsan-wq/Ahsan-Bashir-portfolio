import React from 'react'
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
const BlogDetail = () => {
  return (
    <div>
      <div className="md:flex justify-center items-center gap-30 py-10  ">
        <div className="px-4 sm:px-8 max-w-screen-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl md:w-320 font-bold leading-tight">
            Designing the perfect{" "}
            <span className="block sm:inline text-5xl sm:text-6xl text-orange-400">
              feature
            </span>{" "}
            comparison table
          </h1>
        </div>

        <div></div>
      </div>
      <div className="flex justify-center items-center pb-10">
        <img src="/banner2.png" alt="" />
      </div>
      <div className="flex flex-col md:flex justify-start ml-5 md:ml-40 space-y-4 md:space-y-0">
        <div className="flex justify-center md:block">
          <img
            src="/user.png"
            alt="User"
            className="w-24 h-24 object-cover"
          />
        </div>

        <div className="text-start flex flex-col md:flex-row gap-4 md:gap-20 ml-0 md:ml-5">
          <div>
            <span className="text-gray-500">Written by</span>
            <br />
            <span className="font-bold">Ahsan Malik</span>
          </div>
          <div>
            <span className="text-gray-500">Categories</span>
            <br />
            <span className="font-bold">User Experience</span>
          </div>
          <div>
            <span className="text-gray-500">Date</span>
            <br />
            <span className="font-bold">02/08/2023</span>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center ">
        <div className="">
          <h1 className=" text-3xl font-bold md:text-4xl  mt-20 ml-5 md:ml-10">
            About the position
          </h1>
          <p className=" ml-5 text-gray-600 text-lg md:ml-10 mt-10  md:w-320">
            Everyone in my team works towards the samegoal. This enabled our
            teams to ship new ideas and feel more capable. Podcasting
            operational — change management inside of workflows. Completely
            synergize.
          </p>
          <p className="mt-10 text-lg ml-5 md:ml-10  text-gray-600 md:w-320">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself
          </p>
          <p className="ml-5 mt-10 text-lg md:ml-10  text-gray-600 md:w-320">
            {" "}
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided.
          </p>
          <div className="mb-5 md:flex gap-10 justify-center mt-20">
            <img className="px-5" src="/post3.png" alt="" />
            <img className="mt-10 px-5" src="/post4.png" alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold m-10">1.Learning the basics</h1>
            <p className="ml-5 text-gray-600 md:w-320 md:ml-10 mb-10">
              Everyone in my team works towards the samegoal. This enabled our
              teams to ship new ideas and feel more capable. Podcasting
              operational — change management inside of workflows. Completely
              synergize.
            </p>
            <p className="ml-5 text-gray-600 md:w-320 md:ml-10 mb-10">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself
            </p>
            <div>
              <h1 className="text-4xl font-bold m-10">1.Learning the basics</h1>
              <p className="text-gray-600 md:w-320 ml-5 md:ml-10 mb-10">
                Everyone in my team works towards the samegoal. This enabled our
                teams to ship new ideas and feel more capable. Podcasting
                operational — change management inside of workflows. Completely
                synergize.
              </p>
              <p className="text-gray-600 md:w-320 ml-5 md:ml-10 mb-10">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-5">
        <h3 className="text-center text-3xl font-bold text-orange-400">Blog</h3>
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-20">
          My Blog Post
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="mt-10 md:mt-20 max-w-xs">
            <img className="w-full" src="/blog1.png" alt="" />
            <span className="block mt-5 text-sm text-gray-500">
              • UI Design
            </span>
            <span className="block text-lg text-orange-400 mt-1">
              • 03 May 2019
            </span>
            <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>

          <div className="mt-10 md:mt-0 max-w-xs">
            <img className="w-full" src="/blog2.png" alt="" />
            <span className="block mt-5 text-sm text-gray-500">
              • UI Design
            </span>
            <span className="block text-lg text-orange-400 mt-1">
              • 03 May 2019
            </span>
            <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>

          <div className="mt-10 md:mt-20 max-w-xs">
            <img className="w-full" src="/blog3.png" alt="" />
            <span className="block mt-5 text-sm text-gray-500">
              • UI Design
            </span>
            <span className="block text-lg text-orange-400 mt-1">
              • 03 May 2019
            </span>
            <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
              Right-to-left behind development in mobile web design
            </p>
          </div>

          <div className="mt-10 md:mt-0 max-w-xs">
            <img className="w-full" src="/blog4.png" alt="" />
            <span className="block mt-5 text-sm text-gray-500">
              • UI Design
            </span>
            <span className="block text-lg text-orange-400 mt-1">
              • 03 May 2019
            </span>
            <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-5">
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

export default BlogDetail
