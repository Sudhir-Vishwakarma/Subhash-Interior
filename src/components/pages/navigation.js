import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import logo from "../images/logo2.png";

import navi from "../style/navigation.module.css"

import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";


const auth = getAuth(app);

const Navigation = ({user})=>{


    // HamburgerMenu //
    const [hamburgerMenu, setHamburgerMenu] = useState(true);

    const hamburgerHandler = () =>{
        setHamburgerMenu(false);
    }

    const faTimesHandler = () =>{
        setHamburgerMenu(true);
    }

    // Dropdown //
    const [dropdown, setDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const dropdownToggle = () =>{
       setDropdown(!dropdown); 
    }

    useEffect(() =>{
        if(dropdownRef.current){
            dropdownRef.current.style.maxHeight = "0px";
        }
    },[]);

    return(
            <>
            {hamburgerMenu ? (
                <div id={navi.container1} className={`${navi.navigationContainer} ${hamburgerMenu ? navi.slidein : navi.slideout}`}>
                    <div className={navi.logoContainer}>
                        <NavLink to="/" exact><img src={logo} /></NavLink>
                        <div className={navi.iconFaBarsContainer} onClick={hamburgerHandler}>
                            <FontAwesomeIcon icon={faBars} className={navi.iconFaBars}/>
                        </div>
                    </div>
            
                    <div className={navi.menu}>
                        <ul className={navi.mainNavigation}>
                            <li><NavLink className={navi.navlink} to="/" exact>Home</NavLink></li>
                            <li><NavLink className={navi.navlink} to="/about">About</NavLink></li>
                            <li className={navi.showMenu} >
                                <NavLink className={navi.navlink}>Service</NavLink>
                                <FontAwesomeIcon icon={faAngleDown} className={navi.faHome} />
                                <ul className={navi.subNavigation}>
                                        <li><NavLink className={navi.navlink} to="/service/residential">Residential</NavLink></li>
                                        <li><NavLink className={navi.navlink} to="/service/commercial">Commercial</NavLink></li>
                                        <li><NavLink className={navi.navlink} to="/service/space">Space</NavLink></li>
                                        <li><NavLink className={navi.navlink} to="/service/furniture">Furniture</NavLink></li>
                                    </ul>
                            </li>
                            <li><NavLink className={navi.navlink} to="/contact">Book a Consultation</NavLink></li>
                        </ul> 

                        <div className={navi.username}>
                            <p className={navi.welcome}>Welcome!</p>
                            <p className={navi.users}>{user.email}</p>
                        </div>
                        <button className={navi.logout} onClick={() => signOut(auth)}>Log Out</button>
                    </div>

                </div>
            ) : (
                <div id={navi.container2} className={` ${navi.mobilenavContainer} ${hamburgerMenu ? navi.slideout : navi.slidein}`}>
                    <div className={navi.mobileLogoContainer}>
                        <NavLink to="/" exact><img src={logo} /></NavLink>
                        <div className={navi.mobileFaTimesContainer} onClick={faTimesHandler}>
                            <FontAwesomeIcon icon={faTimes} className={navi.mobileFaTimes}/>
                        </div>                                 
                    </div>                        

                    <div className={navi.mobileUsername}>
                        <p className={navi.mobileWelcome}>Welcome!</p>
                        <p className={navi.mobileUsers}>{user.email}</p>
                    </div>
                        
                    
                    <div className={navi.mobileMenu}>
                        <ul className={navi.mobilemainNavigation}>
                            <li><NavLink className={navi.mobileNavlink} to="/" exact>Home</NavLink></li>
                            <li><NavLink className={navi.mobileNavlink} to="/about">About</NavLink></li>
                            <li className={navi.mobileShowMenu} onClick={dropdownToggle}>
                                <NavLink className={navi.mobileNavlink}>Service</NavLink>
                                <FontAwesomeIcon icon={faAngleDown} className={navi.mobilefaHome} />
                                <ul 
                                    className={`${navi.mobileSubNavigation} ${dropdown ? navi.show : navi.hide}`} 
                                    ref={dropdownRef} 
                                    style={
                                        dropdown
                                          ? { maxHeight: dropdownRef.current.scrollHeight + 'px' }
                                          : { maxHeight: '0px' }
                                      }
                                >
                                        <li><NavLink className={navi.mobileNavlink} to="/service/residential">Residential</NavLink></li>
                                        <li><NavLink className={navi.mobileNavlink} to="/service/commercial">Commercial</NavLink></li>
                                        <li><NavLink className={navi.mobileNavlink} to="/service/space">Space</NavLink></li>
                                        <li><NavLink className={navi.mobileNavlink} to="/service/furniture">Furniture</NavLink></li>
                                    </ul>
                            </li>
                            <li><NavLink className={navi.mobileNavlink} to="/contact">Book a Consultation</NavLink></li>
                        </ul> 

                        
                        <button className={navi.mobileLogout} onClick={() => signOut(auth)}>Log Out</button>
                    </div>

                </div>
            )}
                

                
            </>
    )
}

export default Navigation;