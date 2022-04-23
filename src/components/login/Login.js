import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import initializeAuthentication from './../../firebase/firebase.initialaize';



initializeAuthentication();
const provider = new GoogleAuthProvider();

const Login = () => {
    const [user, setUser]= useState({})

    const handleGoogleSignIn =() =>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(result =>{
            const {displayName, email, photoURL} = result.user;
            const loggedInUser ={
                photo: photoURL,
                name: displayName,
                email: email
            };
            setUser(loggedInUser);
            

        })

    }
    return (
        <div id="login-page">
          
      <div id="login-card">
        <h2>Welcome to My Messenger</h2>
        <div className="login-button google"
        onClick={handleGoogleSignIn} 
        >
          <FcGoogle /> Sign In With Google
        </div>
        <br></br>
        { user.email && <div>
                    <h1> name:{user.name}</h1>
            </div>
            }
        <br></br>
        <div className="login-button facebook">
          <SiFacebook /> Sign In With Facebook
         
        </div>
      </div>
    </div>
    );
};

export default Login;