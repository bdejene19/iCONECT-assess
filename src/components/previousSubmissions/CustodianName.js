import React, { useState } from "react";

export const CustodianName = (props) => {
  const [custodianName, setCustodianName] = useState("");

  return !props.isSubmitted ? (
    <div>
      <label htmlFor="custodianName">Custodian Name: </label>
      <input
        type="text"
        placeholder="Bemnet Dejene"
        value={custodianName}
        onChange={(e) => setCustodianName(e.target.value)}
      />
    </div>
  ) : (
    <h3>{custodianName}</h3>
  );
};
