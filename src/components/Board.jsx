import React from 'react';
import Square from './Square.jsx';

const Board = () => {
  return (
    <div>
      <div>
        <Square value={0} />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
