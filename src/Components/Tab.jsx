import React, { useState } from 'react'
import { VscVscode } from "react-icons/vsc";
import { TbBrandFigma } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "../utils/animations";
const Tab = () => {
    const [activeTab,setActiveTab]=useState(0)
const tabs = ["About Me", "Experience", "Education", "Skills", "Awards"];
const contents =[
    "About Me",
    "Experience",
    "Education",
    "Skills",
    "Awards",
];
  return (
    <motion.div 
      className="mt-20 flex justify-center bg-[#f5f5f5] md:py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-10">
        {/* Left Column */}
        <motion.div 
          className="flex flex-col gap-5 justify-center items-center md:items-start w-full md:w-1/2"
          variants={fadeInLeft}
        >
          <h3 className="text-2xl font-bold text-orange-400">Resume</h3>
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold">
            <span className="text-orange-400">A</span>ll over my details is
            here...
          </h1>
          <motion.div 
            className="flex flex-col gap-3 w-full px-4 md:px-10"
            variants={staggerContainer}
          >
            {tabs.map((tab, index) => (
              <motion.button
                onClick={() => setActiveTab(index)}
                key={`tab_${index}`}
                className={`w-full rounded-lg hover:bg-black border text-black py-4 md:cursor-pointer font-bold md:py-4 md:border-none md:bg-white md:text-black md:font-bold md:text-start md:px-4 md:w-[70%] ${
                  activeTab === index ? "bg-black text-white" : ""
                } hover:bg-black hover:text-white transition`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="w-full md:w-1/2 px-4 py-6"
          variants={fadeInRight}
        >
          <AnimatePresence mode="wait">
            {activeTab === 0 && <About key="about" />}
            {activeTab === 1 && <Experience key="experience" />}
            {activeTab === 2 && <Education key="education" />}
            {activeTab === 3 && <Skills key="skills" />}
            {activeTab === 4 && <Awards key="awards" />}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Tab


const About = () => {
  return (
    <motion.div 
      className="pb-10 pt-20 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-6xl font-bold">
        Based in <span className="text-orange-400">Pakistan</span>
      </h1>

      <p className="text-gray-600 mt-4 text-lg leading-relaxed">
        Ahsan Bashir is a{" "}
        <span className="text-black text-xl font-bold">Product Designer</span> —
        a lover of words, here to create copy that not only reflects who you are
        and what you stand for, but also truly resonates with your audience.
      </p>

      <p className="text-gray-600 mt-4 text-lg leading-relaxed">
        Crafting words that connect, engage, and inspire — calling your audience
        in and making them *feel*.
      </p>

      <div className="mt-8 space-y-2 text-lg">
        <p className="text-gray-600 font-bold">
          Name:{" "}
          <span className="text-black text-xl font-medium">Ahsan Bashir</span>
        </p>
        <p className="text-gray-600 font-bold">
          Nationality:{" "}
          <span className="text-black text-xl font-medium">Pakistani</span>
        </p>
        <p className="text-gray-600 font-bold">
          Phone:{" "}
          <span className="text-black text-xl font-medium">0327-6227156</span>
        </p>
        <p className="text-gray-600 font-bold">
          Email:{" "}
          <span className="text-black text-xl font-medium">
            ahsanrazaattari@gmail.com
          </span>
        </p>
        <p className="text-gray-600 font-bold">
          Experience:{" "}
          <span className="text-black text-xl font-medium">1+ year</span>
        </p>

        <p className="text-gray-600 font-bold">
          Freelance:{" "}
          <span className="text-black text-xl font-medium">Available</span>
        </p>
        <p className="text-gray-600 font-bold">
          Skype:{" "}
          <span className="text-black text-xl font-medium">Not in use</span>
        </p>
        <p className="text-gray-600 font-bold">
          Languages:{" "}
          <span className="text-black text-xl font-medium">Urdu & English</span>
        </p>
      </div>
    </motion.div>
  );
};


const Experience = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4">
      <h1 className="text-6xl font-bold mb-10">
        <span className="text-orange-400">E</span>xperience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Experience Card 1 */}
        <div className="bg-gray-200 cursor-pointer shadow-xl py-6 px-6 hover:bg-white transition duration-150 rounded-xl">
          <span className="text-xl text-gray-700">04/2015 - Present</span>
          <ul>
            <li className="text-2xl mt-4 font-bold">Axtra</li>
          </ul>
          <p className="font-bold text-2xl mt-2 hover:text-orange-400 transition">
            Lead Digital Marketer
          </p>
        </div>

        {/* Experience Card 2 */}
        <div className="bg-gray-200 cursor-pointer shadow-xl py-6 px-6 hover:bg-white transition duration-150 rounded-xl">
          <span className="text-xl text-gray-700">04/2015 - Present</span>
          <ul>
            <li className="text-2xl mt-4 font-bold">Axtra</li>
          </ul>
          <p className="font-bold text-2xl mt-2 hover:text-orange-400 transition">
             Web developer
          </p>
        </div>
      </div>
    </div>
  );
};

const Education = ()=>{
    return(
       <div className="flex flex-col items-center py-16 px-4">
         <h1 className="text-6xl font-bold mb-10">
           <span className="text-orange-400">E</span>ducation
         </h1>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
           {/* Experience Card 1 */}
           <div className="bg-gray-200 cursor-pointer shadow-xl py-6 px-6 hover:bg-white transition duration-150 rounded-xl">
             <span className="text-xl text-gray-700">04/2015 - Present</span>
             <ul>
               <li className="text-2xl mt-4 font-bold">Axtra</li>
             </ul>
             <p className="font-bold text-2xl mt-2 hover:text-orange-400 transition">
               BA Business Class
             </p>
           </div>

           {/* Experience Card 2 */}
           <div className="bg-gray-200 cursor-pointer shadow-xl py-6 px-6 hover:bg-white transition duration-150 rounded-xl">
             <span className="text-xl text-gray-700">04/2015 - Present</span>
             <ul>
               <li className="text-2xl mt-4 font-bold">Axtra</li>
             </ul>
             <p className="font-bold text-2xl mt-2 hover:text-orange-400 transition">
               FDA (IT)
             </p>
           </div>
         </div>
       </div>
)};

const Skills =()=>{
return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div 
      className="bg-gray-200 w-full mt-5 py-5 px-5 rounded-xl shadow-xl hover:bg-white duration-150"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <VscVscode className="text-3xl text-orange-400" />
      <p className="flex">
        <span className="text-4xl font-bold">React JS</span>
      </p>
      <p>(90%)</p>
    </motion.div>
    <motion.div 
      className="bg-gray-200 w-full mt-5 py-5 px-5 rounded-xl shadow-xl hover:bg-white duration-150"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <SiFramer className="text-3xl text-orange-400" />
      <p className="flex">
        <span className="text-4xl font-bold">Framer</span>
      </p>
      <p>(80%)</p>
    </motion.div>
    <motion.div 
      className="bg-gray-200 w-full mt-5 py-5 px-5 rounded-xl shadow-xl hover:bg-white duration-150"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <TbBrandFigma className="text-3xl text-orange-400" />
      <p className="flex">
        <span className="text-4xl font-bold">Figma</span>
      </p>
      <p>(95%)</p>
    </motion.div>
  </motion.div>
);
}

const Awards = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4">
      <h1 className="text-6xl font-bold mb-10">
        <span className="text-orange-400">A</span>wards
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Experience Card 1 */}
        <div className="bg-gray-200 cursor-pointer shadow-xl py-6 px-6 hover:bg-white transition duration-150 rounded-xl">
          <span className="text-xl text-gray-700">04/2015 - Present</span>
          <ul>
            <li className="text-2xl mt-4 font-bold">Axtra</li>
          </ul>
          <p className="font-bold text-2xl mt-2 hover:text-orange-400 transition">
            Lead Digital Marketer
          </p>
        </div>

        {/* Experience Card 2 */}
        <div className="bg-gray-200 cursor-pointer shadow-xl py-6 px-6 hover:bg-white transition duration-150 rounded-xl">
          <span className="text-xl text-gray-700">04/2015 - Present</span>
          <ul>
            <li className="text-2xl mt-4 font-bold">Axtra</li>
          </ul>
          <p className="font-bold text-2xl mt-2 hover:text-orange-400 transition">
            Web developer
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6 max-w-5xl">
        {/* Experience Card 1 */}
        <div className="bg-gray-200 cursor-pointer shadow-xl py-6 px-6 hover:bg-white transition duration-150 rounded-xl">
          <span className="text-xl text-gray-700">04/2015 - Present</span>
          <ul>
            <li className="text-2xl mt-4 font-bold">Axtra</li>
          </ul>
          <p className="font-bold text-2xl mt-2 hover:text-orange-400 transition">
            Lead Digital Marketer
          </p>
        </div>

        {/* Experience Card 2 */}
        <div className="bg-gray-200 cursor-pointer shadow-xl py-6 px-6 hover:bg-white transition duration-150 rounded-xl">
          <span className="text-xl text-gray-700">04/2015 - Present</span>
          <br />
          <span className="font-bold text-4xl text-orange-400">W.</span>
          <ul>
            <li className="text-2xl mt-4 font-bold">Axtra</li>
          </ul>
          <p className="font-bold text-2xl mt-2 hover:text-orange-400 transition">
            Web developer
          </p>
        </div>
      </div>
    </div>
  );
};