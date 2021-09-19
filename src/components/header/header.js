import React from "react";
import "../header/header.scss";
import { BsArrowReturnRight } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import DownloadCV from "./downloadCV.js";
import SocialMedia from "./socialMedia.js";

const header = () => {
  return (
    <div>
      <p class="title title-styles">
        Hello there! I'm <span class="title-name-styles-underlined">Rita</span>{" "}
        -- a product designer and junior frontend developer living in Portugal.
        You can find my projects on{" "}
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
        or{" "}
        <a
          href="https://www.behance.net/ritaoak"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>
            <FaBehance
              size={50}
              size={50}
              style={{ paddingTop: 5, color: "#50E179" }}
            />
          </span>
        </a>
        .
      </p>
      <p class="subtitle subtitle-format">
        <span>
          <BsArrowReturnRight />{" "}
        </span>
        I'm currently working as a contractor to redesign and implement the{" "}
        <a
          href="https://www.apereo.org/projects/apereo-oae"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span class="text-background">
            Open Academic Environment
            <span>
              <MdOpenInNew
                size={30}
                style={{ paddingTop: 10, color: "#ffc97c" }}
              />
            </span>
          </span>
        </a>
        .{" "}
        <span class="header-break">
          Freelancing for{" "}
          <a
            href="https://en.uesp.net/wiki/Main_Page"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span class="text-background">
              UESP
              <span>
                <MdOpenInNew
                  size={30}
                  style={{ paddingTop: 10, color: "#ffc97c" }}
                />
              </span>
            </span>
          </a>
          .
        </span>
      </p>
      <DownloadCV />
    </div>
  );
};

export default header;
