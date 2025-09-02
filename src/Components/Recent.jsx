import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "../utils/animations";

const Recent = () => {
  return (
    <div className="bg-[#ffe9d9] py-10 px-4">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div 
          className="py-10 text-center"
          variants={fadeInUp}
        >
          <h3 className="text-orange-400 text-2xl sm:text-3xl md:text-4xl font-bold">
            Portfolio
          </h3>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            My Recent <span className="text-orange-400">W</span>ork
          </h1>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-10"
          variants={staggerContainer}
        >
          {/* Project 1 */}
          <motion.div 
            className=""
            variants={scaleIn}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.img
              src="/project1.png"
              alt="Project 1"
              className="w-full rounded-md"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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
                Basinic Finance App
              </h1>
              <MdOutlineArrowOutward className="text-3xl sm:text-4xl font-bold" />
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className=""
            variants={scaleIn}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.img
              src="/project2.png"
              alt="Project 2"
              className="w-full rounded-md"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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
                Oxilex Dashboard Design
              </h1>
              <MdOutlineArrowOutward className="text-3xl sm:text-4xl font-bold" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center pt-10 text-center"
          variants={fadeInUp}
        >
          <Link to="/project">
            <motion.button 
              className="flex items-center gap-3 text-center border px-6 py-3 rounded hover:bg-black hover:text-white text-xl font-bold duration-300  md:w-350 md:flex md:justify-center md:items-center"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <MdOutlineArrowOutward className="text-2xl" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Recent;
