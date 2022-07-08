import React, { useEffect, useState } from "react";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { ProgressBar } from "../progressBar";
import "./index.css";
import { startProgress } from "../../utils/logic";

export const SubmitCard = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) {
      console.log("loading");
      setLoading(true);
    } else {
      console.log("delivered");
      startProgress(5);
    }
  }, [loading]);
  return (
    <div className="card-wrapper">
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
