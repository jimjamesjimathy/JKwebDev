import { social } from "../../data";

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="flex items-center justify-center transition-all duration-300 text-accent-brown hover:text-tertiary"
            key={index}
          >
            <a className="text-base" href={item.href} rel="noreferrer" target="_blank">
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
