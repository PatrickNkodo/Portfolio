import React from "react";
import "./footer.css";
import Socials from "./Socials";
const Footer = () => {
  const date = new Date()
  const actualYear = date.getFullYear()
  console.log(actualYear);
  return (
    <footer data-aos="fade-down" data-aos-duration="1000">
      <a href="#" className="footer__logo">
        Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <Socials />
      <div className="footer__copyright">
        <small>&copy; Essama's Portfolio {actualYear}. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
