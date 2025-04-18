import React from "react";
import { PiQuotesFill } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Feedback data
const data = [
  {
    logo: <PiQuotesFill />,
    feedback:
      "I really enjoyed browsing your website. The design is clean, and everything works flawlessly!",
    name: "Peter Mik",
  },
  {
    logo: <PiQuotesFill />,
    feedback:
      "Fantastic work! The layout and the color scheme are spot on. It’s both professional and user-friendly.",
    name: "John Smith",
  },
  {
    logo: <PiQuotesFill />,
    feedback:
      "Great job! I especially liked the interactive elements and how smoothly everything runs.",
    name: "Johnson Allay",
  },
  {
    logo: <PiQuotesFill />,
    feedback:
      "Your portfolio looks amazing. It's clear that you paid attention to detail and user experience.",
    name: "Malik Sh",
  },
  {
    logo: <PiQuotesFill />,
    feedback:
      "Awesome website! It’s fast, modern, and full of great features. Keep it up!",
    name: "Alixa",
  },
];

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full px-4 py-16 md:px-8 lg:px-16 md:py-40">
      <div className="flex flex-col lg:flex-row items-start gap-10 max-w-7xl mx-auto">
        {/* Left Side - Heading */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-xl md:text-2xl text-orange-400 font-bold mb-2">
            Testimonials
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Client <span className="text-orange-400">F</span>eedback
          </h1>
        </div>

        {/* Right Side - Slider */}
        <div className="w-full lg:w-2/3">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="px-2">
                <div className="bg-white shadow-md rounded-2xl p-6 md:p-8 max-w-xl mx-auto space-y-4">
                  <span className="text-5xl text-orange-400">{d.logo}</span>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {d.feedback}
                  </p>
                  <span className="text-xl font-semibold text-orange-400">
                    {d.name}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
