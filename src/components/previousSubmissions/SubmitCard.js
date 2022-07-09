import React, { useState } from "react";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { ProgressBar } from "../progressBar";
import "./index.css";
import { Button } from "@mui/material";
import { handleUpload } from "../../utils/logic";
import { CustodianName } from "./CustodianName";

export const SubmitCard = (props) => {
  // create state to handle  selected file  to be uploaded
  const [submit, setSubmit] = useState(false);

  return (
    <div className="card-wrapper">
      <div className="header">
        {/* If name is put into UI => can submit and upload */}
        <CustodianName isSubmitted={submit} />
      </div>
      <div className="body">
        <FilePresentIcon style={{ fontSize: "5rem" }} className="fileIcon" />

        {/* progress bar to handle upload */}
        <ProgressBar />
      </div>
      <div className="footer">
        <p>{props.fileName}</p>

        {/* button to finalize and submit upload with custodian name */}
        <Button
          color="secondary"
          variant="contained"
          onClick={(e) => {
            // handle custodianName validation to finalize upload and being start of progress bar
            let uploaded = handleUpload(e);
            setSubmit(uploaded);
          }}
        >
          Upload File
        </Button>
      </div>
    </div>
  );
};
