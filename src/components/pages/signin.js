import React, { useState } from "react";

import logo from "../images/logo2.png";
import google from "../images/google.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import signin from "../style/signup.module.css"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";


const auth = getAuth(app);

const SignIn = ({switchtosignIN})=>{


    // Validation //
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signinErrors, setSignInErrors] = useState({});


    const signInValidate = () =>{
        
        const signinErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        

        if (!email) {
            signinErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            signinErrors.email = 'Email is not valid';
        }  

        if(!password){
            signinErrors.password = "Password is Required";
        } else if(password.length < 5){
            signinErrors.password = "Password must be atleast 6 Characters"
        }   

        return signinErrors
    }

    const formHandler = (e)=>{
        e.preventDefault();
        const validationErrors = signInValidate();
        setSignInErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            console.log("Form Submitted", {email, password});
        }

    }


    // Firebase Form Handle //
    const signInUser = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((value) => console.log("SignIn Successfully..."))
        .catch((err) => alert("Invalid User Try Again"));
    }


    return (
        <div className={signin.mainContainer}>
            <div className={signin.signupFilter}>
                <div className={signin.signupContainer}>
                    <img src={logo} className={signin.signuplogo}/>
                    <h1>Welcome back!</h1>
                    <p className={signin.signupaccount}>LogIn to your account</p>
                    <form onSubmit={formHandler}>
                        <div className={signin.username}>
                            <div className={signin.signupicon}>
                                <FontAwesomeIcon icon={faEnvelope} className={signin.fauser}/>
                                <input 
                                    id="email"
                                    name="email"
                                    type="email" 
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {signinErrors.email && <p>{signinErrors.email}</p>}
                        </div>
                        <div className={signin.username}>
                            <div className={signin.signupicon}>
                                <FontAwesomeIcon icon={faLock} className={signin.fauser}/>
                                <input 
                                    id="password"
                                    name="password"
                                    type="password"    
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {signinErrors.password && <p>{signinErrors.password}</p>}
                        </div>
                        <button className={signin.buttonone} type="submit" onClick={signInUser}>Sign In</button>
                        <button className={signin.buttontwo}><img src={google} width="25px"/> Sign In with Google </button>
                    </form>
                    <p className={signin.signupalready}>Don't have an account ? <span onClick={switchtosignIN}>SignUp here!</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn;