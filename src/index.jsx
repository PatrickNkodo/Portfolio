import React, { useState } from "react";
import img from './IMG_20220526_170955_9.jpg'
import "./index.css";
import Slider from "react-slick";

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
function App() {
  const [skills] = useState([
    { name: "React JS", percentage: 80 },
    { name: "Node JS", percentage: 70 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "Database (SQL and MongoDB)", percentage: 75 },
  ]);

  const [projects] = useState([
    {
      name: "Project 1",
      link: "https://github.com/your-username/project-1",
    },
    {
      name: "Project 2",
      link: "https://github.com/your-username/project-2",
    },
    {
      name: "Project 3",
      link: "https://github.com/your-username/project-3",
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={img}
          alt="Essama Nkodo Patrick"
        />
        <h1>Essama Nkodo Patrick</h1>
        <h2>React JS Developer</h2>
        <div className="social-links">
          <a href="<URL of your GitHub profile>">GitHub</a>
          <a href="<URL of your LinkedIn profile>">LinkedIn</a>
          <a href="<URL of your Twitter profile>">Twitter</a>
        </div>
      </header>
      <main>
        <section>
          <h2>Skills</h2>
          {skills.map((skill) => (
            <div key={skill.name}>
              <p>{skill.name}</p>
              <div className="fill-bar">
                <span style={{ width: `${skill.percentage}%` }}>{skill.percentage}%</span>
              </div>
            </div>
          ))}
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.name}>
                <a href={project.link}>{project.name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2>About Me</h2>
          <p>
            I am a skilled React JS developer with expertise in Node JS, HTML,
            CSS, JavaScript, and databases (SQL and MongoDB). I have worked on
            several projects that have helped me sharpen my skills and gain
            valuable experience in the field. I am passionate about coding and
            always strive to learn new techniques to improve my work. I am
            dedicated to delivering high-quality work that meets the needs of my
            clients.
          </p>
        </section>
        <section>
          <h2>Testimonials</h2>
          <ul>
            <Slider {...settings}>
            <li>
              "Essama is an excellent developer who always delivers quality
              work on time. He has a deep understanding of React JS and is able
              to quickly solve complex problems. I highly recommend him for any
              development project." - John Doe, CEO at ABC Company
            </li>
            <li>
              "Essama is a pleasure to work with. He is always responsive and
              attentive to our needs. He is a skilled developer who consistently
              delivers great work. I would definitely recommend him to anyone
              looking for a talented developer." - Jane Smith, Project Manager
              at XYZ Agency
            </li>
            </Slider>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              Bachelor of Science in Computer Science, XYZ University (2017 -
              2021)
            </li>
            <li>
              Full-Stack Web Development Certification, Udemy (2021)
            </li>
          </ul>
        </section>
        <section>
          <h2>Awards and Recognition</h2>
          <ul>
            <li>Best Web Development Project Award, XYZ University (2021)</li>
            <li>
              Honorable Mention, National Web Developers Competition (2019)
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;