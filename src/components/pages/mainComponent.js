import React, { useState, useEffect } from "react"

import PathRoute from "./route";
import SignUp from "./signup";
import SignIn from "./signin";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);

const MainComponent = () =>{

    const [current, setCurrent] = useState("signup");
    const [user, setUser] = useState(null);

    const pageRender = ()=>{
        if(current === "signup"){
            return <SignUp switchtosignUP = {()=> setCurrent("signin")} />
        } else if (current === "signin") {
            return <SignIn switchtosignIN = {()=> setCurrent("signup")} />
        } else {
            return <PathRoute />
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, []);

    if(user === null){
        return(
            <>
                {pageRender()}
            </>
        )
    }

    return(
        <>
            <PathRoute user = {user} />
        </>
    )
}

export default MainComponent;