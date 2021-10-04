import React from "react";
import { MdFileDownload } from "react-icons/md";
import { Button } from "react-bulma-components";

const CV =
  "https://drive.google.com/file/d/1PeiIBG8Y74dPU-0xTZ_KE4J79nd4u2xC/view?usp=sharing";

const downloadCV = () => {
  return (
    <a href={CV} rel="noopener noreferrer" target="_blank">
      <Button className="download-cv" size="medium" renderAs="button">
        Download my CV{" "}
        <span>
          <MdFileDownload
            size={33}
            style={{ paddingTop: 10, color: "#ffc97c" }}
          />
        </span>
      </Button>
    </a>
  );
};

export default downloadCV;
