import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [dataComing,setDataComing] = useState(true)
    const auth = getAuth();

    // update name 

    // const updateName =(name) => {
    //     updateProfile(auth.currentUser, {
    //         displayName: name, photoURL: img
    //     }).then(() => {
    //         console.log('Update User')
    //         window.location.href = "/home";
    //     })
    // }

    // sign in google
    const signIngoogle = () => {
        setDataComing(true);
        const googleprovider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleprovider);
    }
    // State Changed 
    useEffect(()=>{
        const notsubscibed = onAuthStateChanged(auth,user => {
            if (user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setDataComing(false);
            
        })
        return() => notsubscibed;
    },[])

    // log out 
    const logOut = () =>{
        setDataComing(true);
        signOut(auth)
        .then(() => {
        })
        .finally(() => setDataComing(false));
    }
    return {
        user,
        signIngoogle,
        logOut,
        dataComing
    }
}

export default useFirebase;