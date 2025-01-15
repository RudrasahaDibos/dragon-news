import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user ,setuser]= useState(null)

    const createuser =(email,password)=>{
     return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
    const UnSubScripe =  onAuthStateChanged(auth,curentuser =>{
             console.log('User is Auth State change ',curentuser)
             setuser(curentuser)
        })
        return ()=>{
            UnSubScripe()
        }
    },[])

    const Logout =()=>{
       return signOut(auth)
    }
    const SigninUser =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const authinfo ={
       user,createuser,Logout,SigninUser
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;