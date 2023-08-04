import React, { useEffect, useRef } from "react";
import CTA from "./CTA";
import image from "../assets/Me.jpg";
import Socials from "./Socials";
import Typed from 'typed.js'
import "./header.css";

const Header = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['React Js Developer', 'Node Js Developer', 'MERN Stack Developer', 'Software Engineer'],
      typeSpeed: 75,
      backSpeed: 20,
      loop: true
    };
    const typed = new Typed(titleRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="#" className="header">
      <div className="container header__container">
        <div
          className="header__presentation"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="presentation">
            <h4>Welcome to my Portfolio!</h4>
            <h5 className="">I'm</h5>
            <h1>Essama Nkodo Patrick</h1>
            <h5 className="text-light">
              and I'm a <b ref={titleRef}></b>
            </h5>
            <CTA />
          </div>
        </div>
        <div
          className="me"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
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
