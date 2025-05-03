import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [contextValue, setContextValue] = useState('Default Value');

  return (
    <MyContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </MyContext.Provider>
  );
}
