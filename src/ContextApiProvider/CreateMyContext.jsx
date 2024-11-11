
import { createContext, useEffect, useState } from 'react';
import auth from './../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export let MyContext = createContext(null)

export default function CreateMyContext({ children }) {
    let [user , setUser] = useState(null);


    let [loader , setLoader] = useState(true);

    let registerUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    let signInUser = (email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth , email , password);
    }

    // observer 
    useEffect(()=>{
        
        let unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoader(false)
        })

        return ()=>{
            unSubscribe()
        }
    },[])

    let logOut = ()=>{
        setLoader(true)
        signOut(auth);
    }

    let myData = {
       registerUser,
       signInUser,
       user,
       logOut,
       loader
    }

    return (
        <MyContext.Provider value={myData} >
            {
                children
            }
        </MyContext.Provider>
    )
}
