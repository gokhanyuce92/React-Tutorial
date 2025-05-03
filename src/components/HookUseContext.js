import React from 'react';
import { MyContextProvider } from './contexts/MyContext';
import ChildComponent from './ChildComponent';

function HookUseContext() {
  return (
    <MyContextProvider>
      <ChildComponent />
    </MyContextProvider>
  );
}

export default HookUseContext;
