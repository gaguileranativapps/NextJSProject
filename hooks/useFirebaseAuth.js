import React, { useState, useEffect } from 'react';
import Firebase from '../firebase';
import { setCookie } from 'nookies';

export default function userFirebaseAuth() {
  const [user, setUser] = useState(() => {
    const user = Firebase.auth().currentUser;
    return user;
  });

  const authStateChanged = async (authUser) => {
    setUser(authUser);
    if (authUser) {
      const token = await authUser.getIdToken(true);
      setCookie(null, 'token', token);
    }
  }

  const updateSession = async () => {
    const user = Firebase.auth().currentUser;
    setUser(user);

    if (user) {
      const token = await authUser.getIdToken(true);
      setCookie(null, 'token', token);
    }
  }

  const signInWithEmailAndPassword = (email, password) => 
    Firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword  = (email, password) => 
    Firebase.auth().createUserWithEmailAndPassword(email, password);
  
  const signOut = () => 
    Firebase.auth().signOut().then(updateSession);

  const updateProfile = (profileData) => {
    const user = Firebase.auth().currentUser;
    user.updateProfile(profileData).then(updateSession);
  }

  const setPersistence = (persistenceType) => 
    Firebase.auth().setPersistence(persistenceType);

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    setPersistence,
  };
}