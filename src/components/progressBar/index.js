import React, { useEffect, useState } from "react";
import "./index.css";

export const ProgressBar = (props) => {
  useEffect(() => {
    console.log(props.progress);
    if (props.progress > 0) {
      let allCards = document.querySelector(".submission-container").children;
      let mostRecent = allCards[allCards.length - 1];
      let bar = mostRecent.children.item(2).children.item(0).children.item(0);

      bar.style.cssText = `
        width: ${props.progress}%;
      `;
    }
  }, [props.progress]);
  return (
    <div id="progress-wrapper">
      <div id="progress-bar"></div>
    </div>
  );
};
