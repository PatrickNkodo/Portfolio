import React from 'react';
import img from '../assets/school.jpg'
import './education.css'
const Education = () => {
  return (
    <section id='education'>
      <h5 data-aos="flip-left"  data-aos-duration="1000">About my school level</h5>
      <h2 data-aos="fade-up"  data-aos-duration="2000">Education</h2>
      <div className="container container__education">
      <div className="education__image">
      <img src={img} alt="" data-aos="fade-left"  data-aos-duration="1000"/>
      </div>
      <article data-aos="fade-right"  data-aos-duration="1000">
      <div className="service__head"></div>
      <ul>
        <li><b>2022 - Present</b> : Completing Bachelor's degree in Software Engineering</li>
        <li><b>2021 - 2022</b> : Higher National Diploma (H.N.D) in Software Engineering</li>
        <li><b>2018 - 2019</b> : Government Common Entrance (G.C.E) A level</li>
        <li><b>2017 - 2018</b> : Government Common Entrance (G.C.E) O level</li>
        <li><b>2012 - 2013</b> : First School Leaving Certificate (F.S.L.C)</li>
      </ul>
      </article>
      </div>
    </section>
  );
};

export default Education;