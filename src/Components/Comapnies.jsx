import React from 'react'
import Marquee from 'react-fast-marquee'

const Comapnies = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="pb-10  pt-10 max-w-7xl ml-20 ">
        <Marquee>
          <div className="flex   gap-20 border-b border-t border-gray-400 w-full justify-center items-center p-5 ">
            <img src="src/assets/logo1.svg" alt="" />
            <img src="src/assets/logo2.svg" alt="" />
            <img src="src/assets/logo3.svg" alt="" />
            <img src="src/assets/logo4.svg" alt="" />
            <img src="src/assets/logo5.svg" alt="" />
            <img src="src/assets/logo6.svg" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Comapnies
