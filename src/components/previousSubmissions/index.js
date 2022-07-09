import React from "react";
import "./index.css";
import { SubmitCard } from "./SubmitCard";

export const PreviousSubmissions = (props) => {
  return (
    <section className="submission-container">
      {/* conditionally map over array => if elements exist pass data through SubitCard component */}
      {props.uploaded?.map((upload, index) => (
        <SubmitCard key={index} fileName={upload.fileName} />
      ))}
    </section>
  );
};
