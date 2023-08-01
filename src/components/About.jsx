import React from "react";
import me from "../assets/IMG_20220526_170955_9.jpg";
import { FaAward } from "react-icons/fa";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <article className="">
                {<FaAward className="about__icon" />}
                <h5>Experience</h5>
                <small>2Months internhip</small>
              </article>
            </div>
            <div className="about__card">
              <article className="">
                {<FaAward className="about__icon" />}
                <h5>Projects</h5>
                <small>2Months internhip</small>
              </article>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet
            unde exercitationem. Incidunt, sit ut voluptas enim at voluptatem,
            sequi ipsum beatae aspernatur commodi culpa harum. Corporis,
            quisquam, tempore aspernatur soluta, sed accusamus excepturi eaque
            praesentium aliquid ad asperiores fuga.
          </p>
          <button className="btn btn-primary">Lets talk</button>
        </div>
      </div>
    </section>
  );
};

export default About;
