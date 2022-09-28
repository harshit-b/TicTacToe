import React from 'react';
import Square from './Square.jsx';

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Square value={0} />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
