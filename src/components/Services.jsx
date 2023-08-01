import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h5>What I can do for you</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>I would build a static website for you</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I would Include responsive design in your website</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>I would build a static website for you</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I would Include responsive design in your website</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
