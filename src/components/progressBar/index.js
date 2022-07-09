import React from "react";
import "./index.css";

export const ProgressBar = () => {
  return (
    // progress bar handled with CSS -> found it to be more elegant solution in some ways
    <div id="progress-wrapper">
      <div className="progress-bar"></div>
    </div>
  );
};
