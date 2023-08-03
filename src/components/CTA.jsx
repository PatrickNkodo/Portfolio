import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href="#cv" data-aos="zoom-in-left" download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact" data-aos="zoom-in-right">
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
