import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import DownloadCV from "./downloadCV.js";

const mainContent = () => {
  return (
    <div className="title title-styles">
      Hello there!
      <br />
      <br />
      I'm <span className="title-name-styles-underlined">Rita</span> -- a{" "}
      <span className="title-jobs-styles-underlined">product designer </span>
      and{" "}
      <span className="title-jobs-styles-underlined">
        junior frontend developer
      </span>{" "}
      working remotely from Portugal. You can check out some of my most
      challenging projects on{" "}
      <a
        href="https://dribbble.com/OakRita"
        rel="noopener noreferrer"
        target="_blank"
        alt="Dribbble"
      >
        <span>
          <FaDribbbleSquare
            size={50}
            style={{ paddingTop: 5, color: "#F8FFAE" }}
          />
        </span>
      </a>{" "}
      +{" "}
      <a
        href="https://www.behance.net/ritaoak"
        rel="noopener noreferrer"
        target="_blank"
        alt="Behance"
      >
        <span>
          <FaBehance size={50} style={{ paddingTop: 5, color: "#50E179" }} />
        </span>
      </a>{" "}
      +{" "}
      <a
        href="https://github.com/RitaOak"
        rel="noopener noreferrer"
        target="_blank"
        alt="Github"
      >
        <span>
          <FaGithub size={50} style={{ paddingTop: 5, color: "#72C6EF" }} />
        </span>
      </a>{" "}
      .
      <p className="download-section">
        <DownloadCV /> and{" "}
        <span className="title-email-styles-underlined">email me</span>, or go
        to my{" "}
        <a
          href="https://www.linkedin.com/in/rita-oak/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>
            <FaLinkedin size={50} style={{ paddingTop: 5, color: "#E496FF" }} />
          </span>
        </a>{" "}
        if you'd like to reach out.{" "}
      </p>
    </div>
  );
};

export default mainContent;
