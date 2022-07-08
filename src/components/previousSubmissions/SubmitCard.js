import React from "react";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { ProgressBar } from "../progressBar";
import "./index.css";
import { Button } from "@mui/material";
import { handleUpload } from "../../utils/logic";

export const SubmitCard = (props) => {
  return (
    <div className="card-wrapper">
      <h3 className="header">{props.name}</h3>
      <div className="body">
        <FilePresentIcon style={{ fontSize: "5rem" }} className="fileIcon" />
        <ProgressBar />
      </div>
      <div className="footer">
        <p>{props.fileName}</p>
        <Button
          color="secondary"
          variant="contained"
          onClick={(e) => handleUpload(e)}
        >
          Upload File
        </Button>
      </div>
    </div>
  );
};
