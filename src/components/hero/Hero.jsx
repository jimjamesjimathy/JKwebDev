import React from "react";
import heroImg from '../../assets/img/serious.png'; 

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container h-full mx-auto'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex flex-col items-center flex-1 lg:items-start'>
            <p className='text-2xl text-accent text-md mb-[22px]'>
              Howdy, I'm James!
            </p>
            <h1 className='text-tertiary text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I am a full-stack web developer (specializing in front-end development)
            </p>
            <button className='transition-all btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg'>
              let's create something together!
            </button>
          </div>
          <div className='items-end justify-end flex-1 hidden h-full lg:flex'>
            <img className="h-[75%]" src={heroImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
