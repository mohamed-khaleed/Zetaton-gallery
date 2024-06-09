// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase-config.js';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, updateDoc, arrayUnion, arrayRemove, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      setCurrentUser(user);
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setFavoritePhotos(userDoc.data().favoritePhotos || []);
        }
      } else {
        setFavoritePhotos([]);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setFavoritePhotos([]); // Reset favorite photos on logout
    return signOut(auth);
  };

  const addFavoritePhoto = async (photoUrl) => {
    if (!currentUser) return;
    const userRef = doc(db, 'users', currentUser.uid);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      await setDoc(userRef, { favoritePhotos: [photoUrl] });
    } else {
      await updateDoc(userRef, {
        favoritePhotos: arrayUnion(photoUrl)
      });
    }
    setFavoritePhotos((prev) => [...prev, photoUrl]);
  };

  const removeFavoritePhoto = async (photoUrl) => {
    if (!currentUser) return;
    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, {
      favoritePhotos: arrayRemove(photoUrl)
    });
    setFavoritePhotos((prev) => prev.filter(photo => photo !== photoUrl));
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    addFavoritePhoto,
    removeFavoritePhoto,
    favoritePhotos
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
