import React from "react";
import me from "../assets/IMG_20220413_084300_1.jpg";
import { FaAward } from "react-icons/fa";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h5 data-aos="flip-left"  data-aos-duration="1000">Get to know</h5>
      <h2 data-aos="fade-up"  data-aos-duration="2000">About me</h2>
      <div className="container about__container">
       <div className="" data-aos="fade-up"  data-aos-duration="2000">
       <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="" />
          </div>
        </div>
       </div>
        <div className="about__content">
            <h5>How I acquire my skills</h5>
          <div className="about__cards">
            <div className="about__card" data-aos="fade-right"  data-aos-duration="1000">
              <article className="">
                {<FaAward className="about__icon" />}
                <h5>Internhip</h5>
                <small>I constanlty look for internships. The last internship was for a period of 2 months
                  at SODECAO, precisely in the IT unit of the enterprise.
                </small>
              </article>
            </div>
            <div className="about__card" data-aos="fade-left"  data-aos-duration="1000">
              <article className="">
                {<FaAward className="about__icon" />}
                <h5>Personal Research</h5>
                <small>I am very active personally, as to what concerns learning new skills</small>
              </article>
            </div>
          </div>
        </div>
      </div>
        <div className="container" data-aos="fade-right"  data-aos-duration="1000">
        <h2>Brief description</h2>
        <p>
          I am a highly motivated person,  with passion for software 
          development technologies. I like practicing to learn, that's how I progress.
          Do not hesitate to contact me for a new project, I would be glad to join you.
          </p>
          <a href="#contact" className="btn btn-primary">Lets talk</a>
        </div>
    </section>
  );
};

export default About;
