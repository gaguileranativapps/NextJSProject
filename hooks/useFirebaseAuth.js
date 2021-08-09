import React, { useState, useEffect } from 'react';
import Firebase from '../firebase';

export default function userFirebaseAuth() {
  const [user, setUser] = useState(null);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setUser(null);
      return;
    }
    setUser(authState);
  }

  const clear = () => {
    setUser(null);
  }

  const signInWithEmailAndPassword = (email, password) => 
    Firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword  = (email, password) => 
    Firebase.auth().createUserWithEmailAndPassword(email, password);
  
  const signOut = () => 
    Firebase.auth().signOut().then(clear);

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}