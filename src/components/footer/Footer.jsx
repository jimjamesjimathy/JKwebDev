import { social } from "../../data";

const Footer = () => {
  return (
    <footer className="h-[13em] bg-accent-hover">
      <div className="container flex items-center justify-center h-full mx-auto">
        <div className="flex flex-col items-center w-full h-full justify-evenly md:flex-row">
          <div className="flex items-center justify-center space-x-6">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <div key={index} className="text-base transition-all duration-300 text-primary hover:text-tertiary">
                  <a href={href}>{icon}</a>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <p className="font-bold tracking-widest sm:text-md lg:text-xl text-primary">
              JK <span className="font-medium sm:text-md lg:text-3xl text-paragraph">||</span>{" "}
              WEBDEV
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="flex items-center font-bold sm:text-md lg:text-xl text-primary">
              <span className="text-sm">&copy;</span> 2022 James Kirkwood
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
