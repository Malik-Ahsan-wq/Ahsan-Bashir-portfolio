import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const Comapnies = () => {
  return (
    <motion.div 
      className="flex justify-center items-center px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="pb-10 pt-10 w-full max-w-7xl">
        <Marquee>
          <div className="flex flex-wrap md:flex-nowrap gap-10 sm:gap-16 md:gap-30 border-b  border-t border-gray-400 w-full justify-center items-center p-5">
            <motion.img
              src="/logo1.svg"
              alt="logo1"
              className="h-10 sm:h-12 md:h-14"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            />
            <motion.img
              src="/logo2.svg"
              alt="logo2"
              className="h-10 sm:h-12 md:h-14"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            />
            <motion.img
              src="/logo3.svg"
              alt="logo3"
              className="h-10 sm:h-12 md:h-14"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            />
            <motion.img
              src="/logo4.svg"
              alt="logo4"
              className="h-10 sm:h-12 md:h-14"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            />
            <motion.img
              src="/logo5.svg"
              alt="logo5"
              className="h-10 sm:h-12 md:h-14"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            />
            <motion.img
              src="/logo6.svg"
              alt="logo6"
              className="h-10 sm:h-12 md:h-14"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            />
          </div>
        </Marquee>
      </div>
    </motion.div>
  );
};

export default Comapnies;
