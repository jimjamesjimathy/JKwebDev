import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Brands from './components/brands/Brands';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio-projects/Portfolio';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import BackTopBtn from './components/BackToTopBtn';


const App = () => {
  return (
    <div className="bg-white relative">
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  )
};

export default App;
