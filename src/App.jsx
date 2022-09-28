import React, { useState } from 'react';
import Board from './components/Board.jsx';
import './styles/root.scss';
import { calculateWinner } from './helpers.jsx';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(1);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${turn ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          if (turn === 1) {
            setTurn(0);
            return 'X';
          }

          setTurn(1);
          return 'O';
        }

        return square;
      });
      // prev[position] = 'X';
      // return prev;
    });
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <br />
      <h2> {message} </h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
