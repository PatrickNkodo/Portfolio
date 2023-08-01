import React, { useState } from "react";
import "./nav.css";
import {
  AiOutlineBook,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
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
        <AiOutlineBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActive("projects")}
        className={active === "projects" ? "active" : null}
      >
        {" "}
        <AiOutlineBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("contact")}
        className={active === "contact" ? "active" : null}
      >
        {" "}
        <AiOutlineContacts />
      </a>
    </nav>
  );
};

export default Nav;
