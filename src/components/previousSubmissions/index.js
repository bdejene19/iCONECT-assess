import React from "react";
import "./index.css";
import { SubmitCard } from "./SubmitCard";

export const PreviousSubmissions = (props) => {
  return (
    <section className="submission-container">
      {props.uploaded?.map((upload) => (
        <SubmitCard
          key={upload.name}
          name={upload.name}
          fileName={upload.fileName}
        />
      ))}
    </section>
  );
};