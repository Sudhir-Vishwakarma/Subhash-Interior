import React, { useState } from "react";
import contact from "../style/contact.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import { NavLink } from "react-router-dom";

const Contact = ()=>{


    // Form Validation //
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        number: "",
        message: ""
    });
    const [contactErrors, setContactErrors] = useState({});

    const contactHandler = (e)=>{
        const {name, value} = e.target;
        setContactForm({...contactForm, [name]: value});
    }

    const contactValidate = () =>{
        const contactErrors = {};


        // Name Validation //
        if(!contactForm.name.trim()){
            contactErrors.name = "Name is Required";
        }

        // Email Validation //
        if(!contactForm.email.trim()){
            contactErrors.email = "Email is Required";
        } else if(!/\S+@\S+\.\S+/.test(contactForm.email)){
            contactErrors.email = "Email Address is Invalid"
        }

        // Phone Validation //
        if(!contactForm.number.trim()){
            contactErrors.number = "Phone number is Required"
        } else if(!/^\d{10}$/.test(contactForm.number)){
            contactErrors.number = "Phone number must be 10 Digits"
        }

        // Message Validation //
        if(!contactForm.message.trim()){
            contactErrors.message = "Message is Required"
        } else if(contactForm.message.length < 30){
            contactErrors.message = "Message must be atleast 30 characters"
        }

        return contactErrors;
    }
 
    const submitHandler = (e) =>{
        e.preventDefault();
        const contactValidationErrors = contactValidate();
        if(Object.keys(contactValidationErrors).length === 0){
            alert("Form Submit Successfully");
        } else {
            setContactErrors(contactValidationErrors);
        }

    }






    return (
        <div className={contact.mainContainer}>


            {/* Hero Section */}

            <div className={contact.heroSection}></div>


            {/* Contact Section */}

            <div className={contact.contactContainer}>
                <h3>Get In Touch</h3>
                <div className={contact.contactContent}>
                    <div className={contact.social}>
                        <div className={contact.address}>
                            <FontAwesomeIcon icon={faLocationDot} className={contact.addressIcon}/>
                            <div className={contact.location}>
                                <h1>Our Location</h1>
                                <p>Thakur Village</p>
                                <p>Kandivali(e)</p>
                                <p>Mumbai 400101</p>
                            </div>
                        </div>
                        <div className={contact.address}>
                            <FontAwesomeIcon icon={faEnvelope} className={contact.addressIcon}/>
                            <div className={contact.location}>
                                <h1>E-mail Address</h1>
                                <p>karmasudhir48@gmail.com</p>
                            </div>
                        </div>
                        <div className={contact.address}>
                            <FontAwesomeIcon icon={faMobile} className={contact.addressIcon}/>
                            <div className={contact.location}>
                                <h1>Phone Number</h1>
                                <p>(91+) 7738816630</p>
                                <p>(91+) 8692989873</p>
                                <p>(91+) 7710945924</p>
                        </div>
                            </div>
                        <div className={contact.socialLinks}>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faFacebookF} className={`${contact.iconFacebook} ${contact.iconFacebookk}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faInstagram} className={`${contact.iconFacebook} ${contact.iconInstagram}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faLinkedinIn} className={`${contact.iconFacebook} ${contact.iconLinkedIn}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faXTwitter} className={`${contact.iconFacebook} ${contact.iconTwitter}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faYoutube} className={`${contact.iconFacebook} ${contact.iconYoutube}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faWhatsapp} className={`${contact.iconFacebook} ${contact.iconWhatsapp}`}/></NavLink>
                        </div>
                    </div>
                    <div className={contact.message}>
                        <form onSubmit={submitHandler}>
                            <input 
                                type="text"
                                id="name" 
                                name="name"
                                placeholder="Enter Your name"
                                value={contactForm.name}
                                onChange={contactHandler}
                            />
                            {contactErrors.name && <p>{contactErrors.name}</p>}
                            <input 
                                id="email"
                                name="email"
                                type="email" 
                                placeholder="Enter Your Email"
                                value={contactForm.email}
                                onChange={contactHandler}
                            />
                            {contactErrors.email && <p>{contactErrors.email}</p>}
                            <input 
                                id="number"
                                name="number"
                                type="text" 
                                placeholder="Enter Your Number"
                                value={contactForm.number}
                                onChange={contactHandler}
                            />
                            {contactErrors.number && <p>{contactErrors.number}</p>}
                            <textarea 
                                id="message"
                                name="message"
                                rows="5" 
                                placeholder="Your Message"
                                value={contactForm.message}
                                onChange={contactHandler}
                            ></textarea>
                            {contactErrors.message && <p>{contactErrors.message}</p>}
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>


            {/* Footer Section */}

            <div className={contact.footerContainer}>
                <div className={contact.footer}>
                    <div className={contact.quick}>
                        <h1>Quick Links</h1>
                        <NavLink className={contact.footerLinks} to="/">Home</NavLink>
                        <NavLink className={contact.footerLinks} to="/about">About</NavLink>
                        <NavLink className={contact.footerLinks} to="/contact">Contact</NavLink>
                    </div>
                    <div className={contact.quick}>
                        <h1>Services</h1>
                        <NavLink className={contact.footerLinks} to="/service/residential">Residential</NavLink>
                        <NavLink className={contact.footerLinks} to="/service/commercial">Commercial</NavLink>
                        <NavLink className={contact.footerLinks} to="/service/space">Space</NavLink>
                        <NavLink className={contact.footerLinks} to="/service/furniture">Furniture</NavLink>
                    </div>
                    <div className={contact.quick}>
                        <h1>Social Links</h1>
                        <div className={contact.socialLinks}>
                            <NavLink className={contact.iconNav} ><FontAwesomeIcon icon={faFacebookF} className={`${contact.iconFacebook} ${contact.iconFacebookk}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faInstagram} className={`${contact.iconFacebook} ${contact.iconInstagram}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faLinkedinIn} className={`${contact.iconFacebook} ${contact.iconLinkedIn}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faXTwitter} className={`${contact.iconFacebook} ${contact.iconTwitter}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faYoutube} className={`${contact.iconFacebook} ${contact.iconYoutube}`}/></NavLink>
                            <NavLink className={contact.iconNav}><FontAwesomeIcon icon={faWhatsapp} className={`${contact.iconFacebook} ${contact.iconWhatsapp}`}/></NavLink>
                        </div>
                    </div>
                    <div className={contact.quick}>
                        <h1>NewsLetter</h1>
                        <div className={contact.newsletter}>
                            <input type="text" placeholder="Enter your Email"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className={contact.reserved}>© 2024 SVimla Interior. All rights reserved.</p>
            </div>
            


        </div>
    )
}

export default Contact;