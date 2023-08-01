import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
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
      <div className="footer__socials">
        <a href="https://github.com/PatrickNkodo/">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://facebook.com">Github</a>
      </div>
      <div className="footer__copyright">
        <small>&copy; My Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
