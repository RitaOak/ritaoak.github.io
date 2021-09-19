import React from "react";
import "../header/header.scss";
import { BsArrowReturnRight } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
import DownloadCV from "./downloadCV.js";

const header = () => {
  return (
    <div>
      <p class="title title-styles">
        <span class="title-name-styles">:</span>
        <span class="title-name-styles-underlined">rita</span>
        <span class="title-name-styles">:</span> product designer and junior
        frontend developer
      </p>
      <p class="subtitle subtitle-format">
        <span>
          <BsArrowReturnRight />{" "}
        </span>
        Currently working as a contractor to redesign and implement the{" "}
        <a
          href="https://www.apereo.org/projects/apereo-oae"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span class="text-background" style={{ fontWeight: "600" }}>
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
            <span class="text-background" style={{ fontWeight: "bold" }}>
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
