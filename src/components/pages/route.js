import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./navigation";

import Home from "./home";
import About from "./about";
import Service from "./service";
import Residential from "./residential";
import Commercial from "./commercial";
import Space from "./space";
import Custom from "./custom";
import Contact from "./contact";
import Furniture from "./furniture";
import SignIn from "./signin";
import Login from "./login";

const Path = ()=>{
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/service/residential" element={<Residential />} />
                    <Route path="/service/commercial" element={<Commercial />} />
                    <Route path="/service/space" element={<Space />} />
                    <Route path="/service/furniture" element={<Furniture />} />
                    <Route path="/custom" element={<Custom />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/login" element={<Login />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Path;