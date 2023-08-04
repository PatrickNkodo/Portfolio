import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Education from "./components/Education";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
