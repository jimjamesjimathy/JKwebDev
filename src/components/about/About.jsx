import React from 'react';

// import img
import Image from '../../assets/img/about.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-24 xl:flex-row'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl text-tertiary lg:text-4xl font-medium lg:font-bold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                James Kirkwood
              </h2>
              <p className='mb-4 text-accent'>
                Freelance Full-Stack Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              I am originally from San Marcos, TX, but I currently reside in Cleveland, OH. I have my sights set on moving to Seattle, WA just as soon as I land my first position in tech.
              <br />
              <br />
               Outside of the coding world I like to keep busy. I play 5 instruments, write, record and produce my own music. I also have become fond of making comedy skits and doing my best to make people laugh. Everyone I know calls me a dad without kids because of my jokes, and I say that makes me a faux pa 😎
              </p>
            </div>
            <button className='transition-all btn btn-md bg-accent hover:bg-secondary-hover'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;