import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { NavLink } from "react-router-dom";

import residence from  "../style/residential.module.css";

const Residential = ()=>{


    return (
        <div className={residence.ResidenceContainer}>
            
            
            {/* Residential Hero-Section */}

            <div className={residence.residenceHero}>
                <h3>Transforming Residential Spaces</h3>
                <p>Making Your Home a MasterPiece with our Exceptional Interior Design</p>
            </div>



            {/* Residential Services */}
            
            <div className={residence.mainTimeline}>
                <h3 className={residence.headThree}>Our Services for Residential</h3>
                <VerticalTimeline
                    lineColor="#06b453"
                    className={residence.Timeline}
                >
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>LivingRoom Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Space Planning and Furniture layout</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Custom Furniture Design</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Lighting Solutions</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Wall treatments & Decor</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Bedroom Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Master Bedroom Design</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Children's Room Design</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Guest Room Design</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Kitchen Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Modular kitchen Installations</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Custom Cabinetry</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Countertops and Backsplashes</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Appliance Integration</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Bathroom Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Custom vanity units</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Tiling and Flooring</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Shower and Bathtub Design</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Plumbing Fixtures</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Home Office Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Ergonomic Furniture Solutions</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Space Planning</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Storage Solution</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Lighting and Decor</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Dining Room Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Furniture selection and layout</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Table settings and decor</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Kids’ Room Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Playroom design</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Study Area Design</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Themed Decor</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Storage Solutions</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Outdoor Spaces:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Garden landscaping</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Outdoor Furniture</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Custom Storage Solutions:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Built-in cabinetry</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Walk-in closets</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Pantry design</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Garage storage</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Renovation and Remodeling:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Complete home renovations</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Room additions</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Structural changes</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Flooring and tiling</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Sustainable Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Eco-friendly materials</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Sustainable furniture</p>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>   
            </div>

            {/* Footer Section */}

            <div className={residence.footerContainer}>
                <div className={residence.footer}>
                    <div className={residence.quick}>
                        <h1>Quick Links</h1>
                        <NavLink className={residence.footerLinks} to="/">Home</NavLink>
                        <NavLink className={residence.footerLinks} to="/about">About</NavLink>
                        <NavLink className={residence.footerLinks} to="/contact">Contact</NavLink>
                    </div>
                    <div className={residence.quick}>
                        <h1>Services</h1>
                        <NavLink className={residence.footerLinks} to="/service/residential">Residential</NavLink>
                        <NavLink className={residence.footerLinks} to="/service/commercial">Commercial</NavLink>
                        <NavLink className={residence.footerLinks} to="/service/space">Space</NavLink>
                        <NavLink className={residence.footerLinks} to="/service/furniture">Furniture</NavLink>
                    </div>
                    <div className={residence.quick}>
                        <h1>Social Links</h1>
                        <div className={residence.socialLinks}>
                            <NavLink className={residence.iconNav} ><FontAwesomeIcon icon={faFacebookF} className={`${residence.iconFacebook} ${residence.iconFacebookk}`}/></NavLink>
                            <NavLink className={residence.iconNav}><FontAwesomeIcon icon={faInstagram} className={`${residence.iconFacebook} ${residence.iconInstagram}`}/></NavLink>
                            <NavLink className={residence.iconNav}><FontAwesomeIcon icon={faLinkedinIn} className={`${residence.iconFacebook} ${residence.iconLinkedIn}`}/></NavLink>
                            <NavLink className={residence.iconNav}><FontAwesomeIcon icon={faXTwitter} className={`${residence.iconFacebook} ${residence.iconTwitter}`}/></NavLink>
                            <NavLink className={residence.iconNav}><FontAwesomeIcon icon={faYoutube} className={`${residence.iconFacebook} ${residence.iconYoutube}`}/></NavLink>
                            <NavLink className={residence.iconNav}><FontAwesomeIcon icon={faWhatsapp} className={`${residence.iconFacebook} ${residence.iconWhatsapp}`}/></NavLink>
                        </div>
                    </div>
                    <div className={residence.quick}>
                        <h1>NewsLetter</h1>
                        <div className={residence.newsletter}>
                            <input type="text" placeholder="Enter your Email"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className={residence.reserved}>© 2024 SVimla Interior. All rights reserved.</p>
            </div>



        </div>
    )
}

export default Residential;