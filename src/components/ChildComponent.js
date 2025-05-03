import React, { useContext } from 'react';
import { MyContext } from './contexts/MyContext';

function ChildComponent() {
  const { contextValue, setContextValue } = useContext(MyContext);
  return (
    <div>
      <h1>{contextValue}</h1>
      <button onClick={() => setContextValue('Updated Value')}>
        Update Context
      </button>
    </div>
  );
}

export default ChildComponent;
