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
              <p>Building responsive,user interfaces (UI) using HTML, CSS, and JavaScript</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing and integrating front-end components with popular frameworks such as React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating and implementing UI/UX designs using tools such as Adobe Photoshop</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating and integrating APIs with the backend for seamless data exchange</p>
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
              <p>Create endpoints for your API requests using Node js and Express</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing RESTful APIs using Node.js, Express.js.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing user authentication and authorization using popular libraries such JSON Web Tokens (JWT).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing and implementing scalable and secure databases using MongoDB or MySQL.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
