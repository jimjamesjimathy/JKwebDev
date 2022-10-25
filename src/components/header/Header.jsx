import React, { useState, useEffect } from "react";
import Navbar from '../navbar/Navbar';
import Socials from '../socials/Socials';
import NavMobile from '../navMobile/NavMobile';

import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GiVibratingSmartphone } from 'react-icons/gi';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })

  return (
    <header
      className={`${
        bg ? 'bg-primary h-24 shadow-md' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-20 transition-all duration-300`}
    >
      <div className='container flex items-center justify-between h-full mx-auto'>
        {/* logo */}
        <a href='/' className='font-medium text-xl'>
          JK || WEBDEV
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Navbar />
        </div>
        {/* Socials */}
        <div className='hidden lg:block'>
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
