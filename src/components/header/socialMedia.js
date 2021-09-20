import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const socialMedia = () => {
  return (
    <div>
      <div className="hero-foot social-media-hero">
        <nav className="tabs social-media-tabs">
          <div className="container">
            <ul>
              <li className="tabs-first">
                <span>Talk to me over social media</span>
              </li>
              <li className="tabs-format">
                <a
                  href="https://www.behance.net/ritaoak"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FaBehance size={25} />
                  </span>
                </a>
              </li>
              <li className="tabs-format">
                <a
                  href="https://dribbble.com/OakRita"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FaDribbbleSquare size={25} />
                  </span>
                </a>
              </li>
              <li className="tabs-format">
                <a
                  href="https://github.com/RitaOak"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FaGithub size={25} />
                  </span>
                </a>
              </li>
              <li className="tabs-format">
                <a
                  href="https://www.linkedin.com/in/rita-oak/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <FaLinkedin size={25} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default socialMedia;
