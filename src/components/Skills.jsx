import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";
const Skills = () => {
  return (
    <section id="skills">
      <h5 data-aos="flip-left"  data-aos-duration="1000">What I can do</h5>
      <h2 data-aos="fade-up"  data-aos-duration="2000">My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend" data-aos="fade-left"  data-aos-duration="1000">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>Tailwind</h4>
              <small className="text-light">Beginer</small>
            </article>
          </div>
        </div>
        <div className="experience__frontend" data-aos="fade-right"  data-aos-duration="1000">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>MySQL</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>MongoDB</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>Node js</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>PHP</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>Express js</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience__others" data-aos="fade-left"  data-aos-duration="1000">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>MS Office</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>Adobe Photoshop</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <h4>Poetry Writing</h4>
              <small className="text-light">Advanced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
