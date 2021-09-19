import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import DownloadCV from "./downloadCV.js";

const mainContent = () => {
  return (
    <p class="title title-styles">
      Hello there!
      <br />
      <br />
      I'm <span class="title-name-styles-underlined">Rita</span> -- a product
      designer and junior frontend developer living in Portugal. You can find my
      projects on{" "}
      <a
        href="https://dribbble.com/OakRita"
        rel="noopener noreferrer"
        target="_blank"
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
      >
        <span>
          <FaBehance size={50} style={{ paddingTop: 5, color: "#50E179" }} />
        </span>
      </a>{" "}
      or check some code experiments at{" "}
      <a
        href="https://github.com/RitaOak"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>
          <FaGithub size={50} style={{ paddingTop: 5, color: "#72C6EF" }} />
        </span>
      </a>
      . <DownloadCV /> or check my{" "}
      <a
        href="https://www.linkedin.com/in/rita-oak/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>
          <FaLinkedin size={50} style={{ paddingTop: 5, color: "#E496FF" }} />
        </span>
      </a>
      .
    </p>
  );
};

export default mainContent;
