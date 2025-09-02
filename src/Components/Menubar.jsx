import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoBasketballOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, slideInFromBottom } from "../utils/animations";

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // 🟢 Get current route

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="  top-0 z-9999  bg-[rgba(255,233,217,1)]">
        {/* Show header image only on the homepage */}
        {location.pathname === "/" && (
          <motion.div 
            className="absolute -top-20 right-0 z-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              className="hidden md:inline-block md:w-180"
              src="/header.png"
              alt="header image"
            />
          </motion.div>
        )}

        {/* Navbar Section */}
        <motion.div 
          className="relative  w-full border-b overflow-visible"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full  flex p-3 items-center justify-between md:p-2 md:px-10 relative z-10">
            <Link to="/">
              <motion.img 
                className="w-24 h-7" 
                src="/logo..png" 
                alt="Logo"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              />
            </Link>

            <ul className="flex items-center">
              {/* Desktop "Let's Talk" */}
              <div className="hidden md:flex items-center">
                <Link to="/contact">
                  <span className="text-ms font-bold hover:text-white duration-400">
                    Let's Talk
                  </span>
                </Link>
                <span className="text-2xl ml-5 cursor-pointer">
                  <MdOutlineArrowOutward />
                </span>
              </div>

              {/* Hamburger Menu - Mobile */}
              <button
                onClick={handleToggle}
                className="ml-5 bg-black text-white p-3 md:px-6 md:py-6 text-2xl cursor-pointer"
              >
                <HiMenuAlt4 />
              </button>
            </ul>
          </div>
        </motion.div>

        {/* Mobile Menu / Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-[700px] md:max-w-[440px] bg-black text-white px-4 py-6 z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
          {/* Top Logo & Close */}
          <div className="flex gap-50 md:justify-between items-center mb-6 border-b py-4">
            <img src="/offcanvas-logo.png" alt="Logo" className="w-28" />
            <button
              onClick={handleToggle}
              className="text-white cursor-pointer bg-orange-400 hover:bg-black hover:text-white p-2 text-3xl"
            >
              <IoCloseOutline />
            </button>
          </div>

          {/* Menu Links */}
          <motion.ul 
            className="space-y-4 text-lg font-bold text-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/project", label: "Projects" },
              { to: "/detail", label: "Projects Detail" },
              { to: "/blog", label: "Blog" },
              { to: "/blogDetail", label: "Blog Detail" },
              { to: "/contact", label: "Contact" }
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Link
                  to={item.to}
                  onClick={handleToggle}
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Social Icons */}
          <motion.div 
            className="flex gap-6 text-2xl mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}>
              <FaBehance className="hover:text-amber-600 duration-150 cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}>
              <FaLinkedinIn className="hover:text-amber-600 duration-150 cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}>
              <IoBasketballOutline className="hover:text-amber-600 duration-150 cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}>
              <FaGithub className="hover:text-amber-600 duration-150 cursor-pointer" />
            </motion.div>
          </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Menubar;
