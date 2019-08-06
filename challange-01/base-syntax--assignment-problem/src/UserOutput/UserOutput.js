import React from "react";

import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>
        Username:
        <br />
        <span>@{props.userName}</span>
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default userOutput;
