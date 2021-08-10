import React, { useState, useEffect } from 'react';
import Firebase from '../firebase';

export default function userFirebaseAuth() {
  const [user, setUser] = useState(() => {
    const user = Firebase.auth().currentUser;
    return user;
  });

  const authStateChanged = async (authUser) => {
    setUser(authUser);
  }

  const updateSession = () => {
    const user = Firebase.auth().currentUser;
    setUser(user);
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
  };
}