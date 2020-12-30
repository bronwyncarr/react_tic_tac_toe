import React, { useState } from "react";
import Board from "./Board";
// import winner helper that calculates if someone won.
import { calculateWinner } from "../helper";

const Game = () => {
  // State is an array of 9 null elements
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    // create a shallow copy of state, don't mutate
    // If user clicks on already occupied square or game is won - do nothing
    // Put X or O in square clicked square
    // Add boardCopy to state
    const boardCopy = [...board]
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXisNext(!xIsNext)
  };

  const jumpTo = () => {};

  const renderMoves = () => {};

  return (
      <Board squares={board} onClick={handleClick} />
  );
};

export default Game;
