import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

function LoginButton() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}

export default LoginButton;
