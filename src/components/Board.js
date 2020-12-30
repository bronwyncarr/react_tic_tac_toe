import React from "react";
import Square from './Square'
import "./Board.css"

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, index) => (
      //implicit return
       <Square key={index} value={square} onClick={() => onClick(index)} />
    ))}

  </div>
);

export default Board;
