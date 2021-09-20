import React from "react";

import { MdFileDownload } from "react-icons/md";
import { Button } from "react-bulma-components";

const downloadCV = () => {
  return (
    <a
      href="https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab"
      rel="noopener noreferrer"
      target="_blank"
    >
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
