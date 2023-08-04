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
    <div className="service__head">How I progressed in school, years after years</div>
      <ul>
        <li><b>2022 - 2023</b> : Bachelor degree in Software Engineering</li>
        <li><b>2021 - 2022</b> : Higher National Diploma (H.N.D) in Software Engineering</li>
        <li><b>2018 - 2019</b> : General Certificate of Education (G.C.E) A level</li>
        <li><b>2017 - 2018</b> : General Certificate of Education (G.C.E) O level</li>
        <li><b>2008 - 2013</b> : First School Leaving Certificate (F.S.L.C)</li>
      </ul>
      </article>
      </div>
    </section>
  );
};

export default Education;