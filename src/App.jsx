import React, { useState } from 'react';
import Board from './components/Board.jsx';
import './styles/root.scss';
import { calculateWinner } from './helpers.jsx';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), turn: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.turn ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];
      console.log(last.board);

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.turn ? 'X' : 'O';
        }

        return square;
      });

      console.log(newBoard);

      return prev.concat({ board: newBoard, turn: !last.turn });
      // prev[position] = 'X';
      // return prev;
    });

    setCurrentMove(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <br />
      <h2> {message} </h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
