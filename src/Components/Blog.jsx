import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Blog = () => {
  return (
    <div className="py-20 px-4">
      <h3 className="text-center text-3xl font-bold text-orange-400">Blog</h3>
      <h1 className="text-center text-4xl md:text-6xl font-bold mb-12">
        My Blog Post
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {/* Blog Post 1 */}
        <div className="w-full sm:w-[45%] lg:w-[22%] mt-10">
          <img className="w-full rounded-lg" src="/blog1.png" alt="blog1" />
          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>UI Design</span>
            <span className="text-orange-400">03 May 2019</span>
          </div>
          <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-3">
            Right-to-left behind development in mobile web design
          </p>
        </div>

        {/* Blog Post 2 */}
        <div className="w-full sm:w-[45%] lg:w-[22%] mt-10">
          <img className="w-full rounded-lg" src="/blog2.png" alt="blog2" />
          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>UI Design</span>
            <span className="text-orange-400">03 May 2019</span>
          </div>
          <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-3">
            Understanding color theory in UI components
          </p>
        </div>

        {/* Blog Post 3 */}
        <div className="w-full sm:w-[45%] lg:w-[22%] mt-10">
          <img className="w-full rounded-lg" src="/blog3.png" alt="blog3" />
          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>UI Design</span>
            <span className="text-orange-400">03 May 2019</span>
          </div>
          <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-3">
            Creating accessible design for everyone
          </p>
        </div>

        {/* Blog Post 4 */}
        <div className="w-full sm:w-[45%] lg:w-[22%] mt-10">
          <img className="w-full rounded-lg" src="/blog4.png" alt="blog4" />
          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>UI Design</span>
            <span className="text-orange-400">03 May 2019</span>
          </div>
          <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-3">
            How minimalism improves user experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
