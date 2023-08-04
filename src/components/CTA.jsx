import React from "react";
import CV from "../assets/CV.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} data-aos="zoom-in-left" download="CV Essama.pdf">
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact" data-aos="zoom-in-right">
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
