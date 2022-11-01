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
import Project1 from "./assets/img/projects/admin-dashboard.webp";
import Project2 from "./assets/img/projects/literary.webp";
import Project3 from "./assets/img/projects/instaJam.webp";
import Project4 from "./assets/img/projects/eCommerce.webp";
import Project5 from "./assets/img/projects/fight-game.webp";
import Project6 from "./assets/img/projects/real-estate.webp";

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
    href: "https://www.linkedin.com/in/jimjamesjimathy/",
  },
  {
    icon: <FiInstagram size={30} />,
    href: "https://www.instagram.com/jim.james.jimathy/",
  },
  {
    icon: <FiGithub size={30} />,
    href: "https://github.com/jimjamesjimathy",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "https://www.freelancer.com/u/jimjamesjimathy",
  },
  {
    img: UpworkBrandIcon,
    href: "https://www.upwork.com/freelancers/~017caf55e4d9d7408d",
  },
  {
    img: FiverBrandIcon,
    href: "www.fiverr.com/jimjamesjimathy",
  },
  {
    img: BehanceBrandIcon,
    href: "https://www.behance.net/jameskirkwood3",
  },
  {
    img: DribbbleBrandIcon,
    href: "https://dribbble.com/jimjamesjimathy",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Admin Dashboard",
    category: "mobile",
    link: 'https://admin-dashboard-murex-iota.vercel.app/',
    desc: 'Languages: React & Tailwind.css ',
  },
  {
    id: "2",
    image: Project2,
    name: "Literary Tavern",
    category: "mobile",
    link: 'https://restaurant-site-one.vercel.app/',
    desc: 'Languages: React & Sass',
  },
  {
    id: "3",
    image: Project3,
    name: "instaJam",
    category: "mobile",
    link: 'https://insta-jam.vercel.app/posts',
    desc: 'Languages: React, Redux & Material-UI',
  },
  {
    id: "4",
    image: Project4,
    name: "e-commerce",
    category: "web development",
    link: 'https://e-commerce-zeta-lake.vercel.app',
    desc: 'Languages: React, JavaScript & styled components'
  },
  {
    id: "5",
    image: Project5,
    name: "Fighting Game",
    category: "web development",
    link: 'https://fight-mania.vercel.app',
    desc: 'Languages: Javascript, HTML & CSS',
  },
  {
    id: "6",
    image: Project6,
    name: "Real Estate",
    category: "web development",
    link: 'https://real-estate-mauve-phi.vercel.app',
    desc: 'Languages: Next.js, framer-motion & Chakra-UI',
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
