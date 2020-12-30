import React, { useState } from "react";
import Board from "./Board";
// import winner helper that calculates if someone won.
import { calculateWinner } from "../helper";
import './Game.css'

const Game = () => {
  // State is an array of 9 null elements
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const winner = calculateWinner(board);

  // create a shallow copy of state, don't mutate
  // If user clicks on already occupied square or game is won - do nothing
  // Put X or O in square clicked square
  // Add boardCopy to state
  const handleClick = (i) => {
    const boardNew = [...board];
    if (winner || boardNew[i]) return;
    boardNew[i] = xIsNext ? "X" : "O";
    setBoard(boardNew);
    setXisNext(!xIsNext);
  };

  const displayTurn = (winner, xIsNext) => {
    //Nested ternary, display if winner, otherwise display who's turn is next
    return winner ? `Winner: ${winner}` : `Next Player: ${(xIsNext ? 'X' : 'O')}`
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div class="container">
        <h1>TIC TAC TOE</h1>
        <Board squares={board} onClick={handleClick} />
        <p className="info">{displayTurn(winner, xIsNext)}</p>
        <button className="reset" onClick={handleReset}>
          Start Again?
        </button>
    </div>
  );
};

export default Game;
