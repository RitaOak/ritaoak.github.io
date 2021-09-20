import React from "react";

import "../header/header.scss";
import MainContent from "./mainContent.js";
import SecondaryContent from "./secondaryContent.js";

const header = () => {
  return (
    <div>
      <MainContent />
      <SecondaryContent />
    </div>
  );
};

export default header;
