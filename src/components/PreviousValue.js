import React, { useState, useEffect, useRef, memo } from 'react';
import Button from '@mui/material/Button';

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    // console.log('Previous count:', prevCountRef.current);
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <Button variant='contained' onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}

function squareNum(number) {
  console.log('Squaring will be done!');
  return Math.pow(number, 2);
}

export default memo(PreviousValue);

export { squareNum };
