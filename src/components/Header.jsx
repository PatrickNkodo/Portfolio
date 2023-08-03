import React, { useEffect } from "react";
import CTA from "./CTA";
import image from "../assets/Me.jpg";
import Socials from "./Socials";
import 'aos/dist/aos.css';
import AOS from 'aos';
// import Typing from "react-typing-effect";
import "./header.css";

const Header = () => {
    useEffect(() => {
      AOS.init();
      return () => {
        AOS.refresh();
      };
    }, []);
  return (
    <section id="#" className="header">
      <div className="container header__container">
        <div className="header__presentation"  data-aos="fade-left" data-aos-duration="2000">
          <div className="">
            <h4>Welcome to my Portfolio!</h4>
            <h5>I'm</h5>
            {/* <Typing speed={100} eraseSpeed={50}> */}
              <h1>Essama Nkodo Patrick</h1>
            {/* </Typing> */}
            <h5 className="text-light">
              and I'm a <b>MERN Developer</b>
            </h5>
            <CTA />
          </div>
        </div>
        <div className="me"  data-aos="fade-right" data-aos-duration="3000">
          <img src={image} alt="image" />
        </div>
      </div>
      <a href="#about" className="scroll__down">
        Scroll Down
      </a>
      <Socials />
    </section>
  );
};

export default Header;
