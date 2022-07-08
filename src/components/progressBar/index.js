import React, { useEffect, useState } from "react";
import { startProgress } from "../../utils/logic";
import "./index.css";

export const ProgressBar = (props) => {
  return (
    <div id="progress-wrapper">
      <div id="progress-bar"></div>
    </div>
  );
};
