import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { Auth } from '../firebase.init';
export const Authcontext = createContext()

const ContextAuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)
    const SignUp = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    };
    const SignIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    };
    const SignOut = () => {
        setLoding(true)
        return signOut(Auth);
    };
    const UpdateUser = (updateUserProfile) => {
        return updateProfile(Auth.currentUser, updateUserProfile)
    }
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(Auth, (currenUser) => {
            if (currenUser) {
                setUser(currenUser)
                console.log(currenUser)


            }

            else {
                console.log("user log Out")
                setUser(null)

            }
            setLoding(false)
        })
        return () => {
            Unsubscribe()
        }
    }, [])
    const Data = {
        SignUp,
        SignIn,
        SignOut,
        user,
        setUser,
        loding,
        UpdateUser
    }

    return (
        <Authcontext value={Data}>
            {children}
        </Authcontext>
    );
};

export default ContextAuthProvider;