import React, { useEffect, useState } from "react";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { ProgressBar } from "../progressBar";
import { startProgress } from "../../utils/logic";
import "./index.css";
export const SubmitCard = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    startProgress(10);
  }, []);
  return (
    <div className="card-wrapper" id="i">
      <h3 className="header">{props.name}</h3>
      <div className="body">
        <FilePresentIcon style={{ fontSize: "5rem" }} className="fileIcon" />
      </div>
      <div className="footer">
        <ProgressBar />
        <p>{props.fileName}</p>
      </div>
    </div>
  );
};
