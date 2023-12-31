import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.config";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [darkMode, setDarMode] = useState(false);

  // function for toggle dark mode
  const toggleTheme = () => {
    setDarMode(!darkMode);
  };

  // function for register a user
  const registerEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email login
  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out function
  const logOut = () => {
    return signOut(auth);
  };

  // user change effect
  useEffect(() => {
    setLoading(true);
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unscribe();
  }, []);

  const appValue = {
    user,
    loading,
    logOut,
    registerEmail,
    emailLogin,
    setUser,
    darkMode,
    toggleTheme,
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
