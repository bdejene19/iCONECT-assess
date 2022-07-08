import React, { useState, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./index.css";
import {
  dropAllow,
  handleDrop,
  handleSubmit,
  startProgress,
} from "../../utils/logic";
import { PreviousSubmissions } from "../previousSubmissions";

export const FileUploader = () => {
  const [upload, setUpload] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [custodian, setCustodian] = useState("");
  const [formSubmit, setSubmit] = useState(0);

  useEffect(() => {
    if (formSubmit) {
      let newFile = handleSubmit(custodian, upload);
      setSubmissions([...submissions, newFile]);
      setCustodian("");
      setUpload("");
      setSubmit(false);
    }
  }, [formSubmit]);

  return (
    <main>
      {upload !== "" ? (
        <div className="form-wrapper">
          <label htmlFor="custodian-name">Enter Custodian Name: </label>
          <input
            type="text"
            id="custodian-name"
            placeholder="Bemnet Dejene"
            onChange={(e) => setCustodian(e.target.value)}
            value={custodian}
          ></input>
          <button id="submit-btn" onClick={() => setSubmit(true)}>
            Submit
          </button>
        </div>
      ) : null}

      <section className="upload-container">
        <CloudUploadIcon id="upload-icon" />
        <input
          type="file"
          id="fileInput"
          value={upload}
          onChange={(e) => setUpload(e.target.value)}
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => dropAllow(e)}
        ></input>
      </section>

      <PreviousSubmissions uploaded={submissions}></PreviousSubmissions>
    </main>
  );
};
