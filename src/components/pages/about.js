import React from "react";

import ourStory from "../images/aboutpage-img/story.png";
import ourMission from "../images/aboutpage-img/mission.png";
import ourVision from "../images/aboutpage-img/vision.png";
import ourValues from "../images/aboutpage-img/value.png";
import ourProcess from "../images/aboutpage-img/process.png";
import about from "../style/about.module.css"

import Collapsible from 'react-collapsible';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { NavLink } from "react-router-dom";

const About = ()=>{
    return (
        <div className={about.mainAbout}>
           
           
            <div className={about.aboutHero}>
                <h3>Wanna Learn who we are</h3>
                <p>Get a Chance to know about us and Relive our Journery</p>
            </div>


            <div className={about.abtContent}>
                <div className={about.abtstory}>
                    <h3>Our Story</h3>
                    <p className={about.storyPara1}>SVimla Interior was founded in 1986 by Subhash Vishwakarma, a visionary dedicated to transforming spaces with innovative design solutions. Over the years, the business earned a reputation for excellence and personalized service.</p>

                    <p className={about.storyPara2}>In January 2024, Subhash's son, Sudhakar Vishwakarma, took over the business. Having grown up with his father's passion for design, Sudhakar brings a fresh perspective while honoring the legacy of quality and creativity.</p>

                    <p className={about.storyPara3}>Today, SVimla Interior stands as a testament to over three decades of dedication and innovation. We continue to deliver exceptional interior design services, blending tradition with modernity to create unique, inspiring spaces for our clients.</p>
                </div>
                <div className={about.storyImg}>
                    <img  src={ourStory} width="200px" />
                </div>
                <div className={about.missionImg}>
                    <img  src={ourMission} width="200px" />
                </div>
                <div className={about.abtMission}>
                    <h3>Our Mission</h3>
                    <p>At SVimla Interior, our mission is to transform your spaces into stunning masterpieces that blend beauty, functionality, and innovation. We are dedicated to crafting personalized, elegant interiors that reflect your unique story and style. With a steadfast commitment to excellence, creativity, and craftsmanship, we strive to exceed your expectations and enhance your living experience. Let us turn your dreams into reality, one exquisite detail at a time.</p>
                </div>
                <div className={about.ourVision}>
                    <h3>Our Vision</h3>
                    <p>Our vision at SVimla Interior is rooted in our dedication to crafting bespoke interior solutions that resonate deeply with our clients' aspirations and lifestyles. We envision a future where our meticulous attention to detail and unwavering commitment to customer satisfaction redefine the art of interior decor. By seamlessly integrating aesthetic beauty with practical functionality, we aim to create immersive environments that inspire creativity, foster harmony, and evoke a profound sense of joy and fulfillment. Our goal is to lead by example, inspiring others in the industry to uphold the highest standards of design excellence and client satisfaction, thereby establishing SVimla Interior as the epitome of personalized luxury and timeless sophistication.</p>
                </div>
                <div className={about.visionImg}>
                    <img  src={ourVision} width="200px" />
                </div>
                <div className={about.valueImg}>
                    <img  src={ourValues} width="200px" />
                </div>
                <div className={about.ourValues}>
                    <h3>Our Values</h3>
                    <p>At SVimla Interior, our values guide every aspect of our work. We're dedicated to excellence, approaching each project with care and commitment. Creativity and innovation drive us to push boundaries in interior design, crafting spaces that inspire. With a client-centric approach, we tailor our designs to exceed expectations, prioritizing clear communication and professionalism. Sustainability is integral to our ethos, as we strive for environmentally conscious practices and uphold impeccable craftsmanship. Transparency and integrity define our relationships, and community engagement is central to our commitment to making a positive impact through design and service.</p>
                </div>
                <div className={about.ourProcess}>
                    <h3>Our Process</h3>
                    <p>Initial Consultation</p>
                    <p>Detailed Planning</p>
                    <p>Budget Scheduling</p>
                    <p>Implementation</p>
                    <p>Final Installation</p>
                </div>
                <div className={about.processImg}>
                    <img  src={ourProcess} width="200px" />
                </div>
            </div>


            {/* About Accordion */}
            <div className={about.accordionContainer}>
                <h3>Frequently Asked Question</h3>
                <div className={about.faq}>
                    <div className={about.collapse}>
                        <Collapsible 
                        trigger={
                            <div className={about.trigger}>
                                <span>How can I get started with SVimla Interior for my project?</span>
                                <FontAwesomeIcon icon={faPlus} className={about.abtPlus}/>
                            </div>
                        }>
                            <p className={about.triggerContent}>Getting started is easy! Simply contact us to schedule a consultation. During the initial meeting, we’ll discuss your vision, needs, and budget. From there, we’ll create a custom design plan and timeline to ensure your project is executed flawlessly from start to finish.</p>
                        </Collapsible>
                    </div>
                    <div className={about.collapse}>
                        <Collapsible 
                        trigger={
                            <div className={about.trigger}>
                                <span>Can SVimla Interior work within my budget?</span>
                                <FontAwesomeIcon icon={faPlus} className={about.abtPlus}/>
                            </div>
                        }>
                            <p className={about.triggerContent}>Absolutely! At SVimla Interior, we believe that great design should be accessible to everyone. We work closely with our clients to understand their budget and provide tailored solutions that maximize value without compromising on quality or aesthetics.</p>
                        </Collapsible>
                    </div>
                    <div className={about.collapse}>
                        <Collapsible 
                        trigger={
                            <div className={about.trigger}>
                                <span>How does SVimla Interior ensure the quality of its work?</span>
                                <FontAwesomeIcon icon={faPlus} className={about.abtPlus}/>
                            </div>
                        }>
                            <p className={about.triggerContent}>Quality is at the heart of everything we do at SVimla Interior. We use only the finest materials and work with skilled craftsmen to ensure that every project meets our high standards. Our team oversees every aspect of the design and implementation process, ensuring that the final result is both beautiful and durable.</p>
                        </Collapsible>
                    </div>
                    <div className={about.collapse}>
                        <Collapsible 
                        trigger={
                            <div className={about.trigger}>
                                <span>Does SVimla Interior provide ongoing support after the completion of a project?</span>
                                <FontAwesomeIcon icon={faPlus} className={about.abtPlus}/>
                            </div>
                        }>
                            <p className={about.triggerContent}>Yes, SVimla Interior values long-term client relationships. We offer ongoing support and maintenance services to ensure that our designs continue to look and function beautifully over time. Whether you need advice on furniture placement or additional design updates, we're here to help.</p>
                        </Collapsible>
                    </div>
                    <div className={about.collapse}>
                        <Collapsible 
                        trigger={
                            <div className={about.trigger}>
                                <span>How does SVimla Interior prioritize sustainability in its design practices?</span>
                                <FontAwesomeIcon icon={faPlus} className={about.abtPlus}/>
                            </div>
                        }>
                            <p className={about.triggerContent}>We incorporate eco-friendly materials and sustainable design principles to create healthier, more environmentally responsible spaces for our clients.</p>
                        </Collapsible>
                    </div>
                    <div className={about.collapse}>
                        <Collapsible 
                        trigger={
                            <div className={about.trigger}>
                                <span>Can SVimla Interior assist with custom furniture and decor?</span>
                                <FontAwesomeIcon icon={faPlus} className={about.abtPlus}/>
                            </div>
                        }>
                            <p className={about.triggerContent}>Yes, we collaborate with skilled artisans to create bespoke furniture and decor pieces that complement our design concepts and enhance the overall aesthetic.</p>
                        </Collapsible>
                    </div>
                </div>
                
            </div>


            {/* Footer Section */}

            <div className={about.footerContainer}>
                <div className={about.footer}>
                    <div className={about.quick}>
                        <h1>Quick Links</h1>
                        <NavLink className={about.footerLinks} to="/">Home</NavLink>
                        <NavLink className={about.footerLinks} to="/about">About</NavLink>
                        <NavLink className={about.footerLinks} to="/contact">Contact</NavLink>
                    </div>
                    <div className={about.quick}>
                        <h1>Services</h1>
                        <NavLink className={about.footerLinks} to="/service/residential">Residential</NavLink>
                        <NavLink className={about.footerLinks} to="/service/commercial">Commercial</NavLink>
                        <NavLink className={about.footerLinks} to="/service/space">Space</NavLink>
                        <NavLink className={about.footerLinks} to="/service/furniture">Furniture</NavLink>
                    </div>
                    <div className={about.quick}>
                        <h1>Social Links</h1>
                        <div className={about.socialLinks}>
                            <NavLink className={about.iconNav} ><FontAwesomeIcon icon={faFacebookF} className={`${about.iconFacebook} ${about.iconFacebookk}`}/></NavLink>
                            <NavLink className={about.iconNav}><FontAwesomeIcon icon={faInstagram} className={`${about.iconFacebook} ${about.iconInstagram}`}/></NavLink>
                            <NavLink className={about.iconNav}><FontAwesomeIcon icon={faLinkedinIn} className={`${about.iconFacebook} ${about.iconLinkedIn}`}/></NavLink>
                            <NavLink className={about.iconNav}><FontAwesomeIcon icon={faXTwitter} className={`${about.iconFacebook} ${about.iconTwitter}`}/></NavLink>
                            <NavLink className={about.iconNav}><FontAwesomeIcon icon={faYoutube} className={`${about.iconFacebook} ${about.iconYoutube}`}/></NavLink>
                            <NavLink className={about.iconNav}><FontAwesomeIcon icon={faWhatsapp} className={`${about.iconFacebook} ${about.iconWhatsapp}`}/></NavLink>
                        </div>
                    </div>
                    <div className={about.quick}>
                        <h1>NewsLetter</h1>
                        <div className={about.newsletter}>
                            <input type="text" placeholder="Enter your Email"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className={about.reserved}>© 2024 SVimla Interior. All rights reserved.</p>
            </div>

        </div>
    )
}

export default About;