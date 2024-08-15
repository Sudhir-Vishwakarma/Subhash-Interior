import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import residence from  "../style/commercial.module.css";

const Residential = ()=>{


    return (
        <div className={residence.ResidenceContainer}>
            
            {/* Residential Hero-Section */}
            <div className={residence.residenceHero}>
                <h3>Transforming Commercial Spaces</h3>
                <p>Elevate Your Business Environment Commercial Interior Design Solutions</p>
            </div>


            {/* Residential Services */}
            <div className={residence.mainTimeline}>
                <h3 className={residence.headThree}>Our Services for Commercial</h3>
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
                            <h3>Office Interior Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Space planning for efficient workflow and productivity</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Customized Office Furniture Solutions</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Ergonomic design for Employees Comfort</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Retail Store Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Creating inviting and functional retail environments</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Display solutions and shelving systems</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Lighting design to enhance merchandise presentation</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Hospitality Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Designing welcoming spaces for hotels, restaurants, and cafes.</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Theme development and ambiance creation</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Furniture and decor selection for guest comfort</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Healthcare Facility Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Designing patient-friendly environments in clinics and hospitals</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Compliance with healthcare regulations and standards</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Functional layouts for medical staff efficiency</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Educational Facility Design:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Creating inspiring learning environments for schools and universities</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Classroom layout and furniture solutions</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Collaborative spaces for student interaction</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Public Spaces and Government Buildings:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Designing accessible and functional public spaces</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Designing interiors for government offices and facilities</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Compliance with safety and accessibility regulations</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Fitness and Wellness Centers:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Designing motivating spaces for gyms and wellness centers</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Customized locker room and spa designs</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Sustainable design practices for health-focused environments</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Financial Institutions:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Designing secure and professional environments for banks and financial offices</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Privacy-focused layout designs</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Reception and customer service area design</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Entertainment Venues:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Designing engaging environments for theaters, cinemas, and entertainment centers</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Acoustic solutions and seating arrangements</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Lighting and multimedia integration</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Industrial and Tech Spaces:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Designing functional spaces for industrial and tech companies</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Collaboration areas and innovation hubs</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Sustainable design solutions for industrial environments</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className={residence.verticaltimeline1}
                        contentStyle={{background: "#000", color: "#fff", border: "1px solid #06b453"}}
                        contentArrowStyle={{borderRight: "10px solid #06b453"}}
                    >
                        <div className={residence.titleone}>
                            <h3>Corporate Headquarters:</h3>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Designing flagship offices that reflect corporate identity</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Executive office design and boardroom solutions</p>
                            <p><FontAwesomeIcon icon={faAngleRight} className={residence.resiIcon}/>Integrated technology solutions for modern workplaces</p>
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