import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import {  useToast, Icon} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons"

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const toast = useToast();
  const toastIcon =  <Icon as={CheckIcon} boxSize="0.5" />

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
          metadata: user.metadata,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signup = (email, password, userName) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (firstName, lastName, url, newPhoneNumber) => {
    let newdisplayName = firstName.concat(" ", lastName);
    return updateProfile(auth.currentUser, {
      displayName: newdisplayName,
      photoURL: url,
    });
  };

  const changePassword = (newPassword) => {
    updatePassword(auth.currentUser, newPassword)
      .then(() => {
        console.log("password changed");
        toast({
          title: 'Password Upadate.',
          description: "You have succesfully updated your password.",
          status: 'success',
          duration: 9000,
          isClosable: true,
          containerStyle:{
            background:"#B794F4",
            
          },
          icon:{toastIcon}
        })
      })
      .catch((error) => {
        console.log("we have been unable to change your password");
        console.log(error);
      });
  };

  const changeEmail = (newEmail) => {
    updateEmail(auth.currentUser, newEmail)
      .then(() => {
        console.log("email changed");
        toast({
          title: 'Password Upadate.',
          description: "You have succesfully updated your password.",
          status: 'success',
          duration: 9000,
          isClosable: true,
          containerStyle:{
            background:"#B794F4",
            
          },
          icon:{toastIcon}
        })
      })
      .catch((error) => {
        console.log("we have been unable to change your email");
        console.log(error);
      });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setUser(null);
    signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        updateUser,
        changeEmail,
        changePassword,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
