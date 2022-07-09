import React, { useEffect, useState } from "react";
import { startProgress } from "../../utils/logic";
import "./index.css";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <div className="progress-wrapper">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, transition: "10s linear all" }}
      ></div>
    </div>
  );
};
