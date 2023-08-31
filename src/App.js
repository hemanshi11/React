import React, { useState } from 'react';
// import Board from './Board';
import './App.css';

function App() {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(true);

  // const handleClick = (index) => {
  //   if (board[index] || calculateWinner(board)) {
  //     return;
  //   }
  //   const newBoard = [...board];
  //   newBoard[index] = isXNext ? 'X' : 'O';
  //   setBoard(newBoard);
  //   setIsXNext(!isXNext);
  // };

  // const winner = calculateWinner(board);
  // const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {/* <Board squares={board} onClick={handleClick} /> */}
      <div className="status">hellow</div>
    </div>
  );
}
export default App;