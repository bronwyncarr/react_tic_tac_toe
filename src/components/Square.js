import React from "react";
import "./Square.css";

// Destructure props obj to {handleClick, value}
const Square = ({ onClick, value }) => {

  //  If value is X or O styling applied, otherwise null falls through.
  const style = (value) => {
    if (value === "X") {
      return "cross";
    } else if (value === "O") {
      return "ooo";
    }
  };

  return (
    <button className={`btn ${style(value)}`} onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;
