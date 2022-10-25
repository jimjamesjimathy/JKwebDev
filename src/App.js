import loadable from '@loadable/component';

const Header = loadable(() => import('./components/header/Header'));
const Hero = loadable(() => import('./components/hero/Hero'));
const Brands = loadable(() => import('./components/brands/Brands'));
const About = loadable(() => import('./components/about/About'));
const Skills = loadable(() => import('./components/skills/Skills'));
const Portfolio = loadable(() => import('./components/portfolio-projects/Portfolio'));
const Contact = loadable(() => import('./components/contact/Contact'));
const Footer = loadable(() => import('./components/footer/Footer'));
const BackToTopBtn = loadable(() => import('./components/BackToTopBtn'));


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default App;
