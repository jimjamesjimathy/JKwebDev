import React from 'react';

// import contact data
import { contact } from '../../data';


const Contact = () => {
  return (
    <section className='section bg-tertiary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='relative section-title before:content-contact before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact me
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-col items-start flex-1 mb-12 space-y-8 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='flex items-start justify-center mt-2 mb-4 text-2xl rounded-sm text-accent w-14 h-14 lg:mb-0'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='mb-1 text-xl font-body'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='font-normal text-accent '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Your name' />
              <input className='input' type='email' placeholder='Your email' />
            </div>
            <input className='input' type='text' placeholder='Subject' />
            <textarea
              className='textarea'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;