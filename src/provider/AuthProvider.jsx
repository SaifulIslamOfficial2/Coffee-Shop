/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "../contex";


function AuthProvider({children}) {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const CreateUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password )
    }

    // create for login page 
      // Login User (Sign In)
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedInUser = userCredential.user; // ইউজারের তথ্য
        setUser(loggedInUser); // লগইন হওয়া ইউজারকে state-এ সংরক্ষণ
        setLoading(false); // লোডিং শেষ
        return loggedInUser; // সফল হলে ইউজারের তথ্য রিটার্ন
      })
      .catch((error) => {
        setLoading(false); // লোডিং শেষ
        throw error; // ত্রুটি হ্যান্ডেলিং
      });
  };


    const userInfo = {user,loading,CreateUser,loginUser }
  return (
  <AuthContext.Provider value={userInfo}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthProvider