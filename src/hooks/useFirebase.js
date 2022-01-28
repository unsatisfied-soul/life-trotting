import initializeFirebase from "../Components/Firebase/Firebase.init";
import axios from 'axios';
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, getIdToken, signOut,sendEmailVerification  } from "firebase/auth";



// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [autherror,setAuthError]= useState('')

  const auth = getAuth()

  const registerUser = (email,password,name,navigate) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      setAuthError('');
      const newUser = { email, displayName: name };
      setUser(newUser)

      //save user
      saveUser(email,name)
      emailVarified()
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      setAuthError(error.message);
      // ..
    })
    .finally(()=> setIsLoading(false));
  }
  //signin with email password 
  const loginUser = (email,password,location,navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const destination = location?.state?.from || "/";
      navigate(destination);
      setAuthError('');
      
      // ...
    })
    .catch((error) => {

      setAuthError(error.message);
    })
    .finally(()=> setIsLoading(false));
    }

    //email verified
    const emailVarified = () => {
      sendEmailVerification(auth.currentUser)
      .then (result=> {
      console.log(result)

      })
    }

  //observe user
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        // ...
      } else {
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe
  },[])

  //logout
  const logout= ()=> {
    setIsLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(()=> setIsLoading(false));
  }

  //save user
  const saveUser = (email,displayName) => {
      const users = {email,displayName}
      axios.post('https://nameless-brushlands-69236.herokuapp.com/users',users)
      .then(res => {
        if(res.data.insertedId){
            alert('successfully registered')
        }
        
    })
  }

  return {
    user,
    isLoading,
    registerUser,
    loginUser,
    logout,
    autherror
  };
};

export default useFirebase;