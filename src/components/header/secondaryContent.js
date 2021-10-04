import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

const secondaryContent = () => {
  return (
    <div>
      <hr />
      <p className="subtitle subtitle-format">
        <span>
          <BsArrowReturnRight />{" "}
        </span>
        Currently working full-time as a contractor to redesign and implement
        the{" "}
        <a
          href="https://www.apereo.org/projects/apereo-oae"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-background-oae">
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
        <span>
          Freelancing for{" "}
          <a
            href="https://en.uesp.net/wiki/Main_Page"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-background-uesp">
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
    </div>
  );
};

export default secondaryContent;
