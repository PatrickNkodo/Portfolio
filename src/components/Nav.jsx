import React, { useState, useEffect } from "react";
import "./nav.css";
import {
  AiOutlineBook,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaPhone,
  FaProjectDiagram,
  FaQuoteLeft,
  FaRProject,
  FaStar,
} from "react-icons/fa";

const Nav = () => {
  const [active, setActive] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight * 0.25 &&
          scrollPosition <
            sectionTop + sectionHeight - sectionHeight * 0.25 &&
          active !== section.id
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

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
        href="#education"
        onClick={() => setActive("education")}
        className={active === "education" ? "active" : null}
      >
        {" "}
        <FaGraduationCap/>
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
        onClick={() => setActive("testimonials")}
        className={active === "testimonials" ? "active" : null}
      >
        {" "}
        <FaQuoteLeft />
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