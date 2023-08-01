import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const Socials = () => {
  return (
    <div className="header__socials">
      <a href="linkedin" target="_blank">
        <BsLinkedin />
      </a>
      <a href="githum" target="_blank">
        <BsGithub />
      </a>
      <a href="twitter" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default Socials;
