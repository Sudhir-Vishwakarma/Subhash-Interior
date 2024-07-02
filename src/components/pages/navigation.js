import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import sudhir from "../images/2.png";
import navi from "../style/navigation.module.css"

const Navigation = ()=>{


    return(
        <>
            <div className={navi.navigationContainer}>
                <NavLink to="/" exact><img src={sudhir} width="50px"/></NavLink>
                 
                <div className={navi.menu}>
                    <ul className={navi.mainNavigation}>
                        <li><NavLink className={navi.navlink} to="/" exact>Home</NavLink></li>
                        <li><NavLink className={navi.navlink} to="/about">About</NavLink></li>
                        <li className={navi.showMenu}>
                            <NavLink className={navi.navlink} to="/service">Service</NavLink>
                            <FontAwesomeIcon icon={faAngleDown} className={navi.faHome} />
                            <ul className={navi.subNavigation}>
                                <li><NavLink className={navi.navlink} to="/service/residential">Residential</NavLink></li>
                                <li><NavLink className={navi.navlink} to="/service/commercial">Commercial</NavLink></li>
                                <li><NavLink className={navi.navlink} to="/service/space">Space</NavLink></li>
                                <li><NavLink className={navi.navlink} to="/service/furniture">Furniture</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink className={navi.navlink} to="/custom">Custom</NavLink></li>
                        <li><NavLink className={navi.navlink} to="/contact">Contact</NavLink></li>
                        <li><NavLink className={navi.navlink} >Get a quote</NavLink></li>    
                    </ul> 

                    <ul className={navi.register}>
                        <li><NavLink className={`${navi.navlink} ${navi.login}`} to="/login">LogIn</NavLink></li>
                        <li><NavLink className={`${navi.navlink} ${navi.signin}`} to="/signin">SignIn</NavLink></li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Navigation;