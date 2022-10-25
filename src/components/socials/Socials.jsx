import React from "react";

import { social } from "../../data";

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="flex items-center justify-center text-accent-brown hover:text-tertiary transition-all duration-300"
            key={index}
          >
            <a className="text-base" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
