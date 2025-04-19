
import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Marquee from "react-fast-marquee";

import { VscVscode } from "react-icons/vsc";
import { TbBrandFigma } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";



const About = () => {
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
    <div className="mt-16 px-4 h-350 py-40 bg-[rgba(255,233,217,1)] md:h-200">
      <div className="flex  flex-col-reverse md:flex-row  justify-center items-center gap-10 md:gap-20 animate__animated animate__fadeInLeftBig">
        <div className="text-center md:text-left -order-1">
          <p className="text-3xl md:text-4xl font-bold text-orange-400 text-start">
            About Me
          </p>
          <h1 className="text-5xl mt-5 md:text-7xl text-start lg:text-8xl font-bold font-Syne">
            <span className="text-orange-400 ">A</span>hsan Bashir.
          </h1>

          <p className=" mt-10 mb-5 md:mt-5 md:w-130 font-bold text-lg text-start">
            hello i am ahsan malik I'am a developer this is my 1+year journey I
            Learned very pwerfull thing in to my journey hello i am ahsan malik
            I'am a developer this is my 1+year journey I Learned very pwerfull
            thing in to my journey...
          </p>
          <p className="max-w-xl text-start text-sm md:text-base mt-4 font-medium text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            maxime magnam voluptatibus soluta commodi, beatae magni doloremque
            ducimus velit ipsam dignissimos laborum. Cupiditate repudiandae
            impedit quae asperiores nisi dolore saepe.
          </p>
        </div>

        <div className="w-full  md:w-1/2 max-w-md ">
          <img
            src="public/about2.png"
            alt="about"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse mt-50  md:flex-row items-center justify-center bg-white px-6 py-12 md:py-50 md:px-20 gap-10 md:gap-20 animate__animated animate__fadeInLeftBig">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-2xl md:text-4xl font-bold text-orange-400">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-Syne">
            <span className="text-orange-400">A</span>hsan Bashir.
          </h1>

          <p className="text-lg md:text-2xl mt-3 font-bold text-gray-400">
            Based in Pakistan
          </p>
          <p className="mt-4 text-sm md:text-base font-medium text-gray-800 max-w-xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            maxime magnam voluptatibus soluta commodi...
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-6 justify-center md:justify-start">
            <div className="text-center sm:text-left">
              <p className="text-2xl md:text-3xl font-bold">08</p>
              <p className="text-sm font-semibold">Award Winner</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl md:text-3xl font-bold">1.2k</p>
              <p className="text-sm font-semibold">Worldwide Clients</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl md:text-3xl font-bold">3.5k</p>
              <p className="text-sm font-semibold">Jobs done successfully</p>
            </div>
          </div>
        </div>

        {/* Years of Experience Section */}
        <div className="w-full md:w-1/2 max-w-md flex flex-col items-center  md:items-start text-center md:text-left">
          <div className="text-[120px] sm:text-[150px] md:text-[200px] font-bold bg-orange-500 text-white rounded-full w-[180px] h-[180px] flex items-center justify-center mx-auto">
            2<span className="text-black text-[60px] md:text-[80px]">+</span>
          </div>

          <span className="text-2xl md:text-4xl font-bold mt-4">
            Years <span className="text-orange-400">E</span>xperience
          </span>

          {/* Contact Box */}
          <div className="bg-black text-white w-full p-4 md:p-6 mt-6 rounded-lg cursor-pointer">
            <span className="text-lg md:text-xl text-orange-400">
              Say Hello!
            </span>
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 mt-2">
              <span className="text-base md:text-2xl">
                ahsanmalik@gmail.com
              </span>
              <span>
                <MdOutlineArrowOutward className="text-white text-2xl md:text-3xl mt-2 sm:mt-0" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <img className="rounded-2xl" src="src/assets/video.png" alt="" />
      </div>

      <div className="flex flex-col md:py-20  md:flex-row w-full max-w-7xl gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-5 justify-center items-center md:items-start w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-orange-400">Resume</h3>
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold">
            <span className="text-orange-400">A</span>ll over my details is
            here...
          </h1>
          <div className="flex flex-col gap-3 w-full px-4 md:px-10 ">
            {tabs.map((tab, index) => (
              <button
                onClick={() => setActiveTab(index)}
                key={`tab_${index}`}
                className={`w-full rounded-lg border py-4 font-bold md:py-4 md:border md:bg-white md:text-black md:font-bold md:text-start md:px-4 md:w-[80%] ${
                  activeTab === index ? "bg-black text-white" : ""
                } hover:bg-black hover:text-white transition`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 px-4">
          {activeTab === 0 && <About1 />}
          {activeTab === 1 && <Experience />}
          {activeTab === 2 && <Education />}
          {activeTab === 3 && <Skills />}
          {activeTab === 4 && <Awards />}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="pb-10  pt-10 max-w-7xl ml-20 ">
          <Marquee>
            <div className="flex   gap-20 border-b border-t border-gray-400 w-full justify-center items-center p-5 ">
              <img src="/logo1.svg" alt="" />
              <img src="/logo2.svg" alt="" />
              <img src="/logo3.svg" alt="" />
              <img src="/logo4.svg" alt="" />
              <img src="/logo5.svg" alt="" />
              <img src="/logo6.svg" alt="" />
            </div>
          </Marquee>
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
};

export default About;

const About1 = () => {
  return (
    <div className="pb-10 pt-20 px-4">
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
    </div>
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
  <div>
    <div className="bg-gray-200 w-full mt-5 py-5 px-5 rounded-xl shadow-xl hover:bg-white duration-150">
      <VscVscode className="text-3xl text-orange-400" />
      <p className="flex">
        <span className="text-4xl font-bold">React JS</span>
      </p>
      <p>(90%)</p>
    </div>
    <div className="bg-gray-200 w-full mt-5 py-5 px-5 rounded-xl shadow-xl hover:bg-white duration-150">
      <SiFramer className="text-3xl text-orange-400" />
      <p className="flex">
        <span className="text-4xl font-bold">Framer</span>
      </p>
      <p>(80%)</p>
    </div>
    <div className="bg-gray-200 w-full mt-5 py-5 px-5 rounded-xl shadow-xl hover:bg-white duration-150">
      <TbBrandFigma className="text-3xl text-orange-400" />
      <p className="flex">
        <span className="text-4xl font-bold">Figma</span>
      </p>
      <p>(95%)</p>
    </div>
  </div>
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