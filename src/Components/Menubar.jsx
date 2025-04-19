import React from 'react'

const Menubar = () => {
  return (
    <div>
      <div className="flex justify-center relative border-b">
        {/* Background Image */}
        <div className="absolute  top-0 right-0 z-10">
          <img
            className="hidden md:inline-block animate__animated animate__fadeInRight md:w-190"
            src="/header.png"
            alt="header image"
          />
        </div>

        {/* Navbar Content */}
        <div className="w-full flex p-3 items-center justify-between md:w-full z-10 md:p-2 md:px-10">
          <Link to="/">
            <img className="w-24 h-7" src="/logo..png" alt="Logo" />
          </Link>
          <ul className="flex items-center">
            {/* Desktop "Let's Talk" */}
            <div className="hidden md:flex items-center">
              <Link to="/contact">
                {" "}
                <a
                  className="text-ms font-bold hover:text-white duration-400"
                  href="#contact"
                >
                  Let's Talk
                </a>
              </Link>

              <span className="text-2xl ml-5 cursor-pointer">
                <MdOutlineArrowOutward />
              </span>
            </div>

            {/* Hamburger Menu - Mobile */}
            <button
              onClick={handleToggle}
              className="ml-5 md: bg-black text-white p-3 md:px-6 md:py-6 text-2xl   cursor-pointer"
            >
              <HiMenuAlt4 />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menubar
