import React from "react";
import "../header/header.scss";
import { BsArrowReturnRight } from "react-icons/bs";

const header = () => {
  return (
    <div>
      <p class="title title-styles">
        <span class="title-name-styles">:</span>
        <span class="title-name-styles-underlined">rita</span>
        <span class="title-name-styles">:</span> product designer and frontend
        developer
      </p>
      <p class="subtitle subtitle-format">
        <span>
          <BsArrowReturnRight />{" "}
        </span>
        Currently working at the{" "}
        <span class="text-background" style={{ fontWeight: "600" }}>
          Open Academic Environment's
        </span>{" "}
        educational open source project.
        <br />
        <span class="header-break">
          Freelancing for{" "}
          <span class="text-background" style={{ fontWeight: "bold" }}>
            UESP
          </span>
          .
        </span>
      </p>
    </div>
  );
};

export default header;
