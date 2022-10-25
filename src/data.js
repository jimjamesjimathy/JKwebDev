//  icons
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/admin-dashboard.png";
import Project2 from "./assets/img/projects/literary.png";
import Project3 from "./assets/img/projects/instaJam.png";
import Project4 from "./assets/img/projects/hotel-booking.png";
import Project5 from "./assets/img/projects/fight-game.png";
import Project6 from "./assets/img/projects/real-estate.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin size={30} />,
    href: "",
  },
  {
    icon: <FiInstagram size={30} />,
    href: "",
  },
  {
    icon: <FiGithub size={30} />,
    href: "",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Admin Dashboard",
    category: "mobile",
    desc: 'Administrator dashboard made with: React & Tailwind.css ',
  },
  {
    id: "2",
    image: Project2,
    name: "Literary Tavern",
    category: "mobile",
    desc: 'Restaurant site made with: React & Sass',
  },
  {
    id: "3",
    image: Project3,
    name: "instaJam",
    category: "mobile",
    desc: 'Social media app made with React, Redux & Material-UI',
  },
  {
    id: "4",
    image: Project4,
    name: "Hotel Booking",
    category: "web development",
    desc: 'Hotel booking app made with: React, Context API & CSS',
  },
  {
    id: "5",
    image: Project5,
    name: "Fighting Game",
    category: "web development",
    desc: 'Two player fighting game made with: Javascript, HTML & CSS',
  },
  {
    id: "6",
    image: Project6,
    name: "Real Estate",
    category: "web development",
    desc: 'Real estate site made with: Next.js, framer-motion & Chakra-UI',
  },
];

// projects
export const projectsNav = [
  {
    name: "featured",
  },
  {
    name: "web development",
  },
  {
    name: "mobile",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];


// contact
export const contact = [
  {
    icon: <FiMail  size={35}/>,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Let's create something together!",
  },
  {
    icon: <FiMapPin  size={35}/>,
    title: "Current Location",
    subtitle: "Cleveland, OH",
    description: "Serving clients worldwide.",
  },
];
