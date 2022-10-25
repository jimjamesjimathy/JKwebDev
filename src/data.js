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
    icon: <FiLinkedin size={25} />,
    href: "",
  },
  {
    icon: <FiInstagram size={25} />,
    href: "",
  },
  {
    icon: <FiGithub size={25} />,
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
  },
  {
    id: "2",
    image: Project2,
    name: "Literary Tavern",
    category: "mobile",
  },
  {
    id: "3",
    image: Project3,
    name: "instaJam",
    category: "mobile",
  },
  {
    id: "4",
    image: Project4,
    name: "Hotel Booking",
    category: "web development",
  },
  {
    id: "5",
    image: Project5,
    name: "Fighting Game",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "Real Estate",
    category: "web development",
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
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at hello@youremail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bucharest, Romania",
    description: "Serving clients worldwide",
  },
];
