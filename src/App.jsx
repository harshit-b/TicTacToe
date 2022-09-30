import React, { useState } from 'react';
import Board from './components/Board.jsx';
import History from './components/History';
import './styles/root.scss';
import { calculateWinner } from './helpers.jsx';

const App = () => {
  const NEW_GAME = [{ board: Array(9).fill(null), turn: false }];
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

  // const message = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${current.turn ? 'X' : 'O'}`;

  const noMovesLeft = current.board.every(el => el !== null);

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

  const moveTo = move => {
    setCurrentMove(move);
  };

  const startNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green"> TAC </span> TOE
      </h1>
      <br />
      <div className="status-message">
        {winner && (
          <>
            Winner is{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {' '}
              {winner}{' '}
            </span>
          </>
        )}
        {!winner && !noMovesLeft && (
          <>
            Next player is{' '}
            <span className={current.turn ? 'text-green' : 'text-orange'}>
              {' '}
              {current.turn ? 'X' : 'O'}{' '}
            </span>
          </>
        )}

        {!winner && noMovesLeft && "It's a DRAW"}
      </div>
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        className={`btn-reset ${winner ? 'active' : ''}`}
        onClick={startNewGame}
      >
        New Game
      </button>
      <h2 style={{ fontWeight: 'normal' }}> Current Game History </h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
