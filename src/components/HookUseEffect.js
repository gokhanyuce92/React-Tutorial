import { React, useEffect, useState } from 'react';

function HookUseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('This code will work once');
  }, []);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log('This code will be executed every time count changes');
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default HookUseEffect;
