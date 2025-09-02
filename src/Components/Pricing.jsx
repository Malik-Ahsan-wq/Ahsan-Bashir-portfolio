import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "../utils/animations";

const pricingPlans = [
  {
    title: "Premium",
    rate: "$48/h",
    duration: "20hrs",
    description: "10 hours per week",
  },
  {
    title: "Standard",
    rate: "$35/h",
    duration: "15hrs",
    description: "7.5 hours per week",
  },
  {
    title: "Basic",
    rate: "$25/h",
    duration: "10hrs",
    description: "5 hours per week",
  },
];

const Pricing = () => {
  return (
    <motion.div 
      className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <section className="w-full max-w-7xl">
        <motion.h3 
          className="text-lg text-orange-400 mb-2"
          variants={fadeInUp}
        >
          Pricing
        </motion.h3>

        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 my-6"
          variants={fadeInUp}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-2xl">
            Stay child and pick your{" "}
            <span className="text-orange-400">Plan</span>
          </h1>
          <motion.button 
            className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded hover:bg-white hover:text-black hover:border hover:border-black transition"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
          >
            Contact for custom project
            <MdOutlineArrowOutward />
          </motion.button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
          variants={staggerContainer}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 } 
              }}
            >
              <div className="mb-4">
                <h3 className="uppercase text-gray-600 text-sm">
                  {plan.title}
                </h3>
                <h2 className="text-2xl font-semibold text-orange-400">
                  {plan.rate}
                </h2>
              </div>
              <h1 className="text-3xl font-bold mb-2">{plan.duration}</h1>
              <div className="flex items-center justify-between text-gray-500">
                <p>{plan.description}</p>
                <MdOutlineArrowOutward className="text-4xl hover:text-orange-400 duration-150" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Pricing;
