import React from 'react';

// import social data
import { social } from '../../data';

// import logo

const Footer = () => {
  return (
    <footer className='bg-accent-brown py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-primary hover:text-tertiary transition-all duration-300 text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <p>JK || WEBDEV</p>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Jambone
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;