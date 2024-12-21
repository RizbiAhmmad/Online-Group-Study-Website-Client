import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.init"; 


export const AuthContext = createContext();
const auth = getAuth(app); 

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  
  const updateUserProfile = (profileData) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, profileData);
    }
    return Promise.reject(new Error("No user is currently logged in"));
  };

  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  
  const authInfo = {
    user,
    setUser,
    loading,
    createNewUser,
    logOut,
    updateUserProfile,
    signIn,
    googleSignIn,
  };


  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
