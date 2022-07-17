import React, { useState, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./index.css";
import { dropAllow, handleDrop, handleSubmit } from "../../utils/logic";
import { PreviousSubmissions } from "../previousSubmissions";

export const FileUploader = () => {
  // create state for file that is currently value of file input element
  const [upload, setUpload] = useState("");

  // state to handle all previous file submissions
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // check to see if file input element is empty - if not, return new javascript object
    // update total submissions and push newly created javascript object to array
    if (upload !== "") {
      let newFile = handleSubmit(upload);
      if (newFile) {
        setSubmissions([...submissions, newFile]);
      }
    }
  }, [upload]);

  return (
    <main>
      {/* input file UI:
          - onChange => handle value of file input
          - onDrop/onDragOver => handle drag/drop file  functionality */}
      <label htmlFor="fileInput" className="upload-container">
        <h3 id="upload-title">{upload}</h3>
        <CloudUploadIcon id="upload-icon" />
        <input
          type="file"
          id="fileInput"
          // value={upload}
          onChange={(e) => setUpload(e.target.value)}
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => dropAllow(e)}
        ></input>
      </label>

      {/* container for file uploads => uploaded prop takeks in array submissions */}
      <PreviousSubmissions uploaded={submissions}></PreviousSubmissions>
    </main>
  );
};
