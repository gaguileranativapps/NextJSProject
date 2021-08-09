import React from 'react';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const AuthContext = React.createContext({
  user: null,
});

export function AuthProvider({ children }) {
  const { user } = useFirebaseAuth();

  return (
    <AuthContext.Provider value={{ user }}>{ children }</AuthContext.Provider>
  );
}

export default AuthContext;