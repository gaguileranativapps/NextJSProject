import React from 'react';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

export default AuthContext = React.createContext({
  user: null,
});

export function AuthProvider({ children }) {
  const { user } = useFirebaseAuth();

  return (
    <AuthContext.Provider value={{ user }}>{ children }</AuthContext.Provider>
  );
}