import React from "react";
import { navigation } from "../../data";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white text-lg hover:text-accent  cursor-pointer"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="acive"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
