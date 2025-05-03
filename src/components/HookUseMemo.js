import React, { useState, useMemo } from 'react';
import { squareNum } from './PreviousValue';

function HookUseMemo() {
  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => squareNum(number), [number]);
  const [counter, setCounter] = useState(0);
  const counterHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>OUTPUT: {squaredNum}</p>
      <button onClick={counterHandler}>Counter ++</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default HookUseMemo;
