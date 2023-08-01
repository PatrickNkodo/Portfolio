import React from "react";
import img from "../assets/Screenshot (19).png";
import "./projects.css";
const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
            <h3>Project title</h3>
            <div className="project__item-cta">
              <img src={img} alt="" />
              <a href="github.com" target="_blank" className="btn">
                Take a view
              </a>
            </div>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <h3>Project title</h3>
            <div className="project__item-cta">
              <img src={img} alt="" />
              <a href="github.com" target="_blank" className="btn">
                Take a view
              </a>
            </div>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <h3>Project title</h3>
            <div className="project__item-cta">
              <img src={img} alt="" />
              <a href="github.com" target="_blank" className="btn">
                Take a view
              </a>
            </div>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <h3>Project title</h3>
            <div className="project__item-cta">
              <img src={img} alt="" />
              <a href="github.com" target="_blank" className="btn">
                Take a view
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
