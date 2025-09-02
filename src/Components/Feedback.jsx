import React from "react";
import { PiQuotesFill } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";

// Feedback data
const data = [
  {
    logo: <PiQuotesFill />,
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience..ear that you paid attention to detail and user experience.",
    name: "Peter Mik",
  },
  {
    logo: <PiQuotesFill />,
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience..ear that you paid attention to detail and user experience.",
    name: "John Smith",
  },
  {
    logo: <PiQuotesFill />,
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience..ear that you paid attention to detail and user experience.",
    name: "Johnson Allay",
  },
  {
    logo: <PiQuotesFill />,
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience..ear that you paid attention to detail and user experience.",

    name: "Malik Sh",
  },
  {
    logo: <PiQuotesFill />,
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience..ear that you paid attention to detail and user experience.",
    name: "Alixa",
  },
];

const Feedback = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // under 1024px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // under 768px (tablet)
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480, // under 480px (mobile)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <motion.div 
      className="w-full px-4 py-16 md:px-8 lg:px-16 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="flex flex-col lg:flex-row items-start gap-10 max-w-7xl mx-auto">
        {/* Left Side - Heading */}
        <motion.div 
          className="w-full lg:w-1/3"
          variants={fadeInLeft}
        >
          <h3 className="text-xl md:text-2xl text-orange-400 font-bold mb-2">
            Testimonials
          </h3>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold ">
            Client <span className="text-orange-400">F</span>eedback
          </h1>
        </motion.div>

        {/* Right Side - Slider */}
        <motion.div 
          className="w-full lg:w-2/3"
          variants={fadeInRight}
        >
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="">
                <motion.div 
                  className="bg-white  rounded-2xl p-6 md:p-8 max-w-9xl  space-y-4"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <span className="text-5xl text-black-400">{d.logo}</span>
                  <p className="text-gray-900 md:text-lg md:font-bold ">
                    {d.feedback}
                  </p>
                  <span className="text-2xl font-extrabold text-black-400">
                    {d.name}
                  </span>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Feedback;
