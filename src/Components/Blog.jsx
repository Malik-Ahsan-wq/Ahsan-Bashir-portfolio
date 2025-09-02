import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "../utils/animations";

const Blog = () => {
  return (
    <motion.div 
      className="py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h3 
        className="text-center text-3xl font-bold text-orange-400"
        variants={fadeInUp}
      >
        Blog
      </motion.h3>
      <motion.h1 
        className="text-center text-4xl md:text-6xl font-bold mb-12"
        variants={fadeInUp}
      >
        My Blog Post
      </motion.h1>

      <motion.div 
        className="flex flex-wrap justify-center gap-10"
        variants={staggerContainer}
      >
        {/* Blog Post 1 */}
        <motion.div 
          className="w-full sm:w-[45%] lg:w-[22%] mt-10"
          variants={scaleIn}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.img 
            className="w-full rounded-lg" 
            src="/blog1.png" 
            alt="blog1"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>UI Design</span>
            <span className="text-orange-400">03 May 2019</span>
          </div>
          <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-3">
            Right-to-left behind development in mobile web design
          </p>
        </motion.div>

        {/* Blog Post 2 */}
        <motion.div 
          className="w-full sm:w-[45%] lg:w-[22%] mt-10"
          variants={scaleIn}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.img 
            className="w-full rounded-lg" 
            src="/blog2.png" 
            alt="blog2"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>UI Design</span>
            <span className="text-orange-400">03 May 2019</span>
          </div>
          <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-3">
            Understanding color theory in UI components
          </p>
        </motion.div>

        {/* Blog Post 3 */}
        <motion.div 
          className="w-full sm:w-[45%] lg:w-[22%] mt-10"
          variants={scaleIn}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.img 
            className="w-full rounded-lg" 
            src="/blog3.png" 
            alt="blog3"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>UI Design</span>
            <span className="text-orange-400">03 May 2019</span>
          </div>
          <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-3">
            Creating accessible design for everyone
          </p>
        </motion.div>

        {/* Blog Post 4 */}
        <motion.div 
          className="w-full sm:w-[45%] lg:w-[22%] mt-10"
          variants={scaleIn}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.img 
            className="w-full rounded-lg" 
            src="/blog4.png" 
            alt="blog4"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          />
          <div className="mt-3 flex justify-between text-sm text-gray-500">
            <span>UI Design</span>
            <span className="text-orange-400">03 May 2019</span>
          </div>
          <p className="text-xl hover:text-orange-400 duration-150 cursor-pointer font-bold mt-3">
            How minimalism improves user experience
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
