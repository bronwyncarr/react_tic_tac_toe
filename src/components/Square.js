import React from "react";
import './Square.css'

// Destructure props obj to {handleClick, value}
const Square = ({onClick, value}) => (
  // Implicit return of button using ()
  <button onClick={onClick}>
    {value}
  </button>
);
;

export default Square;
