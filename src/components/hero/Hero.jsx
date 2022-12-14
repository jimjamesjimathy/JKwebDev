import { Link } from "react-scroll";
import heroImg from "../../assets/img/hero.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 "
    >
      <div className="container h-full mx-auto">
        <div className="flex items-center h-full pt-8">
          <div className="flex flex-col items-center flex-1 lg:items-start">
            <p className="text-2xl text-accent-brown font-medium text-md mb-[22px]">
              Howdy
              <span className="font-light text-paragraph">, I'm James!</span>
            </p>
            <h1 className="text-[#E79A5F] text-center text-4xl leading-[44px] sm:text-center md:text-5xl md:leading-tight md:text-left lg:text-5xl lg:leading-[1.2] font-normal font-body md:tracking-[2px]">
              I design & create <br /> websites and apps.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I am a full-stack developer (specializing in front-end
              development) who creates websites, applications, and games for a range of
              different customers.
            </p>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              duration={1100}
              offset={-70}
              className="flex items-center justify-between transition-all duration-300 border cursor-pointer text-paragraph btn btn-md border-accent-brown hover:bg-accent-brownHover hover:text-primary md:btn-lg"
            >
              let's create something together!
            </Link>
          </div>
          <div className="relative items-center justify-center flex-1 hidden h-full lg:flex">
            <div className="absolute h-[27em] w-[55%] lg:bottom-[19%] lg:right-[9%] lg:w-[19em] xl:w-[20em] xl:right-[15%] xl:bottom-[19%] rounded-2xl bg-tertiary opacity-30 z-1"></div>
            <img
              className="h-[55%] rounded-2xl z-10"
              src={heroImg}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
