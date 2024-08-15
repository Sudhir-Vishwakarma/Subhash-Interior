import React, { useState } from "react";

import logo from "../images/logo2.png";
import google from "../images/google.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import signup from "../style/signup.module.css"

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignUp = ({switchtosignUP})=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUpErrors, setSignUpErrors] = useState({});



    // Validation //
    const signInValidate = () =>{
        
        const signUpErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        

        if(!name){
            signUpErrors.name = "Username is Required";
        }

        if (!email){
            signUpErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            signUpErrors.email = 'Email is not valid';
        }  

        if(!password){
            signUpErrors.password = "Password is Required";
        } else if(password.length < 5){
            signUpErrors.password = "Password must be atleast 6 Characters"
        }   

        return signUpErrors
    }

    const formHandler = (e)=>{
        e.preventDefault();
        const validationErrors = signInValidate();
        setSignUpErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            console.log("Form Submitted", {name, email, password});
        }

    }


    // Firebase Form Handle //
    const userCreate = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(value => console.log("User Created Successfully..."))
    }

    // Google Authentication //
    const googleAuth = ()=>{
        signInWithPopup(auth, googleProvider);
    }


    return (
        <div className={signup.mainContainer}>
            <div className={signup.signupFilter}>
                <div className={signup.signupContainer}>
                    <img src={logo} className={signup.signuplogo}/>
                    <h1>Welcome!</h1>
                    <p className={signup.signupaccount}>Create your account</p>
                    <form onSubmit={formHandler}>
                        <div className={signup.username}>
                            <div className={signup.signupicon}>
                                <FontAwesomeIcon icon={faUser} className={signup.fauser}/>
                                <input 
                                    id="name"
                                    name="name"
                                    type="text" 
                                    placeholder="Username"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {signUpErrors.name && <p>{signUpErrors.name}</p>}
                        </div>
                        <div className={signup.username}>
                            <div className={signup.signupicon}>
                                <FontAwesomeIcon icon={faEnvelope} className={signup.fauser}/>
                                <input 
                                    id="email"
                                    name="email"
                                    type="email" 
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {signUpErrors.email && <p>{signUpErrors.email}</p>}
                        </div>
                        <div className={signup.username}>
                            <div className={signup.signupicon}>
                                <FontAwesomeIcon icon={faLock} className={signup.fauser}/>
                                <input 
                                    id="password"
                                    name="password"
                                    type="password" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {signUpErrors.password && <p>{signUpErrors.password}</p>}
                        </div>
                        <button className={signup.buttonone} type="submit" onClick={userCreate}>Sign Up</button>
                        <button className={signup.buttontwo} onClick={googleAuth}><img src={google} width="25px"/> Sign In with Google </button>
                    </form>
                    <p className={signup.signupalready}>already have an account ? <span onClick={switchtosignUP}>SignIn here!</span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;