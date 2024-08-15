import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./navigation";

import Home from "./home";
import About from "./about";
import Residential from "./residential";
import Commercial from "./commercial";
import Space from "./space";
import Furniture from "./furniture";
import Contact from "./contact";
import SignIn from "./signin";
import SignUp from "./signup";



const PathRoute = ({user})=>{
    return (
        <>
            <BrowserRouter>
                <Navigation user = {user} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" />
                    <Route path="/service/residential" element={<Residential />} />
                    <Route path="/service/commercial" element={<Commercial />} />
                    <Route path="/service/space" element={<Space />} />
                    <Route path="/service/furniture" element={<Furniture />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PathRoute;