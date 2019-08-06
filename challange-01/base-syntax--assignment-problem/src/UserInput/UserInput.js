import React from "react";

const userInput = props => {
  const style = {
    width: "50%",
    border: "solid 2px #1f2e4d",
    borderRadius: "5px",
    fontSize: "12px",
    padding: "3px 10px"
  };

  return (
    <input
      onChange={props.change}
      type="text"
      value={props.value}
      style={style}
    />
  );
};

export default userInput;
