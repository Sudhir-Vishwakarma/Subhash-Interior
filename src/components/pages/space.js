import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import residence from  "../style/space.module.css";

const Residential = ()=>{


    return (
        <div className={residence.ResidenceContainer}>
            
            {/* Residential Hero-Section */}
            <div className={residence.residenceHero}>
                <h3>Space Optimization</h3>
                <p>Design Your Space Personalized Planning for Every Room</p>
            </div>


            {/* Residential Services */}
            <div className={residence.mainTimeline}>
                <h3 className={residence.headThree}>Our Services for Space</h3>
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
                            <h3>Needs Assessment and Consultation:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Conduct client interviews to understand preferences and requirements</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Identify primary functions and activities for the space</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Discuss style preferences and design inspirations</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Site Analysis:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Measure dimensions of the space accurately</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Identify existing structural elements</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Document the current layout and usage of the space</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Space Utilization Studies:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Analyze how people move through the space</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Evaluate workspace efficiency and productivity</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Assess storage needs and identify underutilized areas</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Concept Development:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Conduct brainstorming sessions to generate design ideas</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Create preliminary sketches and diagrams</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Develop mood boards for visual inspiration</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Zoning and Partitioning:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Define functional zones within the space</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Plan for privacy with partitions and screens</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Ensure zoning elements align with the overall design theme</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Circulation and Flow Planning:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Create clear pathways for easy movement</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Ensure accessibility to all areas</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Design layouts that avoid clutter</p>
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