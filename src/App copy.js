import React from 'react';
import HookUseMemo from './components/HookUseMemo';
import LoginButton from './components/LoginButton';
import { AuthContextProvider } from './components/contexts/AuthContext';
import { ThemeContextProvider } from './components/contexts/ThemeContext';
import ThemeComponent from './components/ThemeComponent';

function App() {
  return (
    <>
      {/* <HookUseMemo />
      <br /> */}
      <AuthContextProvider>
        <LoginButton />
      </AuthContextProvider>
      <ThemeContextProvider>
        <ThemeComponent />
      </ThemeContextProvider>
    </>
  );
}

export default App;
