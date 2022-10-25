import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import { Link } from "react-scroll";

const Navbar = loadable(() => import("../navbar/Navbar"));
const Socials = loadable(() => import("../socials/Socials"));
const NavMobile = loadable(() => import("../navMobile/NavMobile"));

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-primary h-24 shadow-md" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-20 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between h-full mx-auto">
        {/* logo */}
        <Link
          to='home'
          smooth={true}
          duration={1100}
          className="text-xl font-semibold tracking-widest transition-all duration-300 cursor-pointer text-accent hover:text-paragraph"
        >
          JK || WEBDEV
        </Link>
        {/* nav */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* nav mobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
