import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/essama-patrick-071806227/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/PatrickNkodo" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/EssamaPatrick2" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default Socials;
