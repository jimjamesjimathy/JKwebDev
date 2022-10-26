import { Link } from "react-scroll";
import Image from "../../assets/img/about.webp";

const About = () => {
  return (
    <section className="h-[73vh] section bg-primary" id="about">
      <div className="container flex items-center justify-center mx-auto">
        <div className="relative flex flex-col items-center gap-24 lg:items-center xl:flex-row">
          <div className="absolute h-[80%] left-[-2%] rounded-2xl bottom-[5%] w-[566px] bg-tertiary opacity-30 hidden xl:block"></div>
          <img
            className="object-cover h-full max-w-[566px] hidden xl:flex lg:mx-0 rounded-2xl z-10"
            src={Image}
            alt=""
            loading="lazy"
          />
          <div className="flex flex-col items-center text-center h-[31em] justify-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl text-accent-hover lg:text-4xl font-medium lg:font-light mb-3 before:content-about relative before:absolute before:opacity-80 before:-top-[2.3rem] before:-left-[1rem] before:hidden before:lg:block">
                <span className="opacity-80">James Kirkwood</span>
              </h2>
              <p className="mb-4 text-accent-brown">
                Freelance Full-Stack Web Developer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="xs:w-[90vw] sm:w-auto mb-8">
                I am originally from San Marcos, TX, but I currently reside in
                Cleveland, OH. I have my sights set on moving to Seattle, WA
                just as soon as I land my first position in tech.
                <br />
                <br />
                Outside of the coding world I like to keep busy. I play 5
                instruments, write, record and produce my own music. I also have
                become fond of making comedy skits and doing my best to make
                people laugh. Everyone I know calls me a dad without kids
                because of my jokes, and I say that makes me a faux pa.
              </p>
            </div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={1100}
              offset={-70}
              className="transition-all duration-300 border btn btn-md border-accent-brown hover:bg-accent-hover hover:text-primary hover:font-semibold"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
