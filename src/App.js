import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Brands from "./components/brands/Brands";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio-projects/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import BackTopBtn from "./components/BackToTopBtn";


const App = () => {
  return (
    <div className="relative App">
        <Header />
        <Hero />
        <Brands />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        <BackTopBtn />
    </div>
  );
};

export default App;
