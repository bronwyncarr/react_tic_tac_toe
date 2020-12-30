import React from "react";
import "./Square.css";

// Destructure props obj to {handleClick, value}
const Square = ({ onClick, value }) => {
  // let style;
  // switch (value) {
  //   case "X":
  //     style = "cross";
  //     break;
  //   case "O":
  //     style = "ooo";
  //     break;
  //   default:
  //     break;
  // }

  const style = (value) => {
    if (value === "X") {
      return "cross";
    } else if (value === "O") {
      return "ooo";
    }
  };

  return (
    <button className={style(value)} onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;
