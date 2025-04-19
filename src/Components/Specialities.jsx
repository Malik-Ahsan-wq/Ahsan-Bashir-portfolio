import React from "react";
import { MdOutlineArrowOutward, MdWeb } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { CgDesignmodo } from "react-icons/cg";
import { SiWebmoney, SiBrandfolder } from "react-icons/si";
import { TbBrandAirtable } from "react-icons/tb";

const Specialities = () => {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      subtitle: "design",
    },
    {
      icon: <CgDesignmodo />,
      title: "UI/UX",
      subtitle: "design",
    },
    {
      icon: <SiWebmoney />,
      title: "Website",
      subtitle: "design",
    },
    {
      icon: <MdWeb />,
      title: "Webflow",
      subtitle: "Development",
    },
    {
      icon: <SiBrandfolder />,
      title: "Brand",
      subtitle: "Identity",
    },
    {
      icon: <TbBrandAirtable />,
      title: "Interaction",
      subtitle: "design",
    },
  ];

  return (
    <div className="p-6 mt-20">
      {/* Heading */}
      <div className="mb-12 px-4">
        <h3 className="text-2xl font-semibold text-orange-400 text-center mb-6">
          Services
        </h3>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate__animated animate__fadeInUp">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-left">
              My Specialities
            </h1>
            <p className="text-gray-700 max-w-xl text-center md:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              consequuntur aperiam quis nihil voluptas animi, eos fuga magnam
              mollitia tenetur?
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid and Contact Box */}
      <div className="flex flex-col md:flex-row justify-between gap-1 animate__animated animate__fadeInRightBig">
        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
          {services.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[250px] px-6 py-7 rounded-xl cursor-pointer bg-gray-100 hover:bg-white shadow-md transition-colors duration-150 text-gray-800 relative"
            >
              {/* Logo at the top */}
              <div className="mb-6 text-5xl bg-white p-3 rounded-full inline-block hover:bg-gray-300 transition-colors duration-300">
                {item.icon}
              </div>

              {/* Text aligned at the top */}
              <h3 className="font-bold text-2xl text-start flex flex-col gap-1">
                <span>{item.title}</span>
                <span className="text-sm text-gray-600">{item.subtitle}</span>
              </h3>

              {/* Arrow positioned at the right bottom */}
              <MdOutlineArrowOutward className="text-orange-400 text-xl absolute bottom-4 right-4" />
            </div>
          ))}
        </div>

        {/* Right Side - Contact Box */}
        <div className="bg-black rounded w-full p-6 md:w-[450px] md:h-120 text-center shadow-lg self-start mt-8 md:mt-0 relative flex flex-col justify-between">
          {/* Arrow Icon at the top-right */}
          <MdOutlineArrowOutward className="text-orange-400 md:hover:text-white cursor-pointer text-6xl absolute top-4 right-4" />

          {/* Title and Email Section at the bottom */}
          <div className="mt-auto text-white">
            <h2 className="text-orange-400 text-2xl mb-2">Say Hello!</h2>
            <h1 className="text-orange-400 text-3xl break-words mb-2">
              hello@ahsan.com
            </h1>
            <p className="text-gray-400">Feel free to reach out anytime!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
