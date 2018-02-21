import React from 'react';

import './styles';

const Count = ({ count, onDecrement, onIncrement }) => (
  <div className="count">
    <button onClick={onDecrement}>-</button>
    <h2>The count is: {count}</h2>
    <button onClick={onIncrement}>+</button>
  </div>
);

export default Count;
