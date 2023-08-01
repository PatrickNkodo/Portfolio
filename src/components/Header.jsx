import React from "react";
import CTA from "./CTA";
import image from "../assets/Me.jpg";
import Socials from "./Socials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__presentation">
          <div className="">
            <h4>Welcome to my Portfolio!</h4>
            <h5>I'm</h5>
            <h1>Essama Nkodo Patrick</h1>
            <h5 className="text-light">
              and I'm a <b>MERN Developer</b>
            </h5>
            <CTA />
          </div>
        </div>
        <div className="me">
          <img src={image} alt="image" />
        </div>
      </div>
      <a href="#" className="scroll__down">
        Scroll Down
      </a>
      <Socials />
    </header>
  );
};

export default Header;
