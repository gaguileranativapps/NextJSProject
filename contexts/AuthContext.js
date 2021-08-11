import React from 'react';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const AuthContext = React.createContext({
  user: null,
  isLoading: true,
});

export function AuthProvider({ children }) {
  const { user, isLoading } = useFirebaseAuth();

  return (
    <AuthContext.Provider value={{ user, isLoading }}>{ children }</AuthContext.Provider>
  );
}

export default AuthContext;