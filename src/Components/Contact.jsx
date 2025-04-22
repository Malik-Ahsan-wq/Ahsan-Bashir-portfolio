import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCall, IoLocationOutline } from "react-icons/io5";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import Swal from "sweetalert2";


import { MdOutlineArrowOutward } from "react-icons/md";

const Contact = () => {

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "2d60a9ad-ba4b-4ea6-968f-5f674baf1c43");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
      Swal.fire({
  title: "Message Sent Successfully",
  text: "Message sent in your gmail",
  icon: "success"
})
    }
  }
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-orange-400">Contact</h3>
          <h1 className="text-4xl font-bold">
            Let's <span className="text-orange-400">Connect</span>
          </h1>
          <p>Please Enter your data in form and receive in your gmail</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <CiMail className="text-2xl text-orange-400" />
              <div>
                <p className="font-semibold">Email us</p>
                <p>Hello@ahsan.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <IoCall className="text-2xl text-orange-400" />
              <div>
                <p className="font-semibold">Call us</p>
                <p>0327-6227156</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <IoLocationOutline className="text-2xl text-orange-400" />
              <div>
                <p className="font-semibold">Office Address</p>
                <p>G.M Abad, Faisalabad</p>
              </div>
            </div>
            <div className="mt-12 text-start">
              <h3 className="text-2xl font-bold hover:text-orange-400 cursor-pointer">
                Follow me on
              </h3>
              <div className="">
                <span className="flex gap-6 text-3xl mt-7">
                  <FaBehance className="hover:text-amber-600 duration-150 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-amber-600 duration-150 cursor-pointer" />
                  <IoBasketballOutline className="hover:text-amber-600 duration-150 cursor-pointer" />
                  <FaGithub className="hover:text-amber-600 duration-150 cursor-pointer" />
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="space-y-6 bg-white p-6 rounded-lg shadow"
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input
                type="text"
                name="Phone Number"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                name="message"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2  hover:text-white rounded hover:bg-black transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <footer className=" animate__animated animate__fadeInRight px-6 md:px-20  bg-black text-white pt-30">
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
    </div>
  );
};

export default Contact;
