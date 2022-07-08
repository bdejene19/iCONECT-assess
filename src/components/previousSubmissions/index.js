import React, { useEffect, useState } from "react";
import { startProgress } from "../../utils/logic";
import "./index.css";
import { SubmitCard } from "./SubmitCard";

export const PreviousSubmissions = (props) => {
  // useEffect(() => {}, []);

  return (
    <section className="submission-container">
      {props.uploaded?.map((upload, index) => (
        <SubmitCard
          key={upload.name}
          index={index}
          name={upload.name}
          fileName={upload.fileName}
        />
      ))}
    </section>
  );
};
