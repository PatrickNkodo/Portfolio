import React, { useState } from "react";
import "./nav.css";
import {
  AiOutlineBook,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import {FaBriefcase, FaCode, FaCogs, FaComment, FaPhone, FaProjectDiagram, FaQuoteLeft, FaRProject, FaStar} from 'react-icons/fa'
const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : null}
        onClick={() => setActive("#")}
      >
        {" "}
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("about")}
        className={active === "about" ? "active" : null}
      >
        {" "}
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActive("skills")}
        className={active === "skills" ? "active" : null}
      >
        {" "}
        <FaCode /> 
      </a>
      <a
        href="#services"
        onClick={() => setActive("services")}
        className={active === "services" ? "active" : null}
      >
        {" "}
        <FaBriefcase /> 
      </a>
      <a
        href="#projects"
        onClick={() => setActive("projects")}
        className={active === "projects" ? "active" : null}
      >
        {" "}
        <FaProjectDiagram />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActive("testimonial")}
        className={active === "testimonial" ? "active" : null}
      >
        {" "}
        <FaQuoteLeft/>
      </a>
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        className={active === "contact" ? "active" : null}
      >
        {" "}
        <FaPhone />
      </a>
    </nav>
  );
};

export default Nav;
