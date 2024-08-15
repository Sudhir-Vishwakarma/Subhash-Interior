import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import AboutImg from "../images/homepage-img/home-about.jpg";
import ResidentialImg from "../images/homepage-img/residential-img.jpg";
import CommercialImg from "../images/homepage-img/commercial-img.jpg";
import SpaceImg from "../images/homepage-img/space-img.jpg";
import FurnitureImg from "../images/homepage-img/furniture-img.jpg";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import home from "../style/home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUsers, faIndianRupeeSign, faHandshake, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = ()=>{

    // testimonials //
    const testimonials  = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    }


    // Form Validation //
    const [homeForm, setHomeForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [homeErrors, setHomeErrors] = useState({});

    const homeHandler = (e) =>{
        const {name, value} = e.target;
        setHomeForm({ ...homeForm, [name]: value})
        
    }

    const homeValidate = () =>{
        const homeErrors = {};

        // Name Validation //
        if(!homeForm.name.trim()){
            homeErrors.name = "Name is Required";
        }

        // Email Validation //
        if(!homeForm.email.trim()){
            homeErrors.email = "Email is Required";
        } else if(!/\S+@\S+\.\S+/.test(homeForm.email)){
            homeErrors.email = "Email Address is Invalid"
        }

        // Phone Validation //
        if(!homeForm.phone.trim()){
            homeErrors.phone = "Phone number is Required"
        } else if(!/^\d{10}$/.test(homeForm.phone)){
            homeErrors.phone = "Phone number must be 10 Digits"
        }

        // Message Validation //
        if(!homeForm.message.trim()){
            homeErrors.message = "Message is Required"
        } else if(homeForm.message.length < 30){
            homeErrors.message = "Message must be atleast 30 characters"
        }


        return homeErrors;
    }

    const homeSubmit = (e)=>{
        e.preventDefault();
        const validationErrors = homeValidate();
        if(Object.keys(validationErrors).length === 0){
            alert("Form Submit Successfully");
        } else {
            setHomeErrors(validationErrors);
        }
    }

    


    return (
        <div className={home.mainContainer}>
            <div className={home.heroSection}>
                <div className={home.heroSection2}>
                    <h1>Inspired by You, Designed by Us</h1>
                    <p>From concept to completion, we handle every aspect of your interior design journey with passion and precision. Discover how our innovative designs can elevate your living spaces.</p>
                    <div className={home.heroBtn}>
                        <a href="https://wa.me/917738816630?text=Hello! How can I help you?" target="_blank"><button>WhatsApp</button>
                        </a>
                        <NavLink to="/contact"><button>Contact Us</button></NavLink>
                    </div>
                </div>
            </div>


            {/* About Section */}

            <div className={home.aboutSection}>
                <div className={home.about1}>
                    <img src={AboutImg}/>
                </div>
                <div className={home.about2}>
                    <h3>About</h3>
                    <p className={home.abtTitle}>Learn More About Us</p>
                    <p className={home.abtContent}>At SVimla Interior, we are passionate about transforming spaces into personalized sanctuaries that inspire and elevate everyday living.</p>
                    <p className={home.abtContent}>With a commitment to craftsmanship and creativity, we specialize in bespoke interior design solutions tailored to reflect the unique tastes and lifestyles of our clients.</p>
                    <p className={home.abtContent}>From concept to completion, our team of experienced designers and artisans meticulously curates each project, ensuring every detail harmonizes with the client’s vision.</p> 
                    <p className={home.abtContent}>Whether it’s residential or commercial, modern or classic, our goal is to create environments that not only meet but exceed expectations, fostering a sense of comfort, sophistication, and timeless elegance.</p>
                    <button><NavLink to="/about" className={home.abtBtn}>More About</NavLink></button>
                </div>
            </div>


            {/* Why Choose Us Section */}

            <div className={home.chooseSection}>
                <h3>Why Choose Us</h3>
                <p className={home.chooseTitle}>Reliable Expertise in Transforming Homes with Style</p>
                <div className={home.chooseContainer}>
                    <div className={home.choose1}>
                        <FontAwesomeIcon icon={faHouse} className={home.chooseIcon} />
                        <p className={home.interior}>Interior for Home</p>
                        <p>Personalize your living spaces with expert interior design services that prioritize creativity, quality craftsmanship, and client satisfaction.</p>
                    </div>
                    <div className={home.choose1}>
                        <FontAwesomeIcon icon={faUsers} className={home.chooseIcon} />
                        <p className={home.interior}>Trusted by Thousand</p>
                        <p>Delivering trusted, top-tier interior design solutions, valued and preferred by thousands for quality, creativity, and excellence</p>
                    </div>
                    <div className={home.choose1}>
                        <FontAwesomeIcon icon={faIndianRupeeSign} className={home.chooseIcon} />
                        <p className={home.interior}>Financing made Easy</p>
                        <p>Effortlessly fund your ideal interior renovations with flexible financing plans designed for simplicity, affordability, and peace of mind.</p>
                    </div>
                    <div className={home.choose1}>
                        <FontAwesomeIcon icon={faHandshake} className={home.chooseIcon} />
                        <p className={home.interior}>24/7 Support</p>
                        <p>Access expert support 24/7, ensuring your interior design journey is smooth and successful with timely assistance at every step.</p>
                    </div>
                </div>
            </div>


            {/* Service Section */}

            <div className={home.serviceContainer}>
                <h3>Services</h3>
                <p className={home.serviceTitle}>Complete services to beautify your living spaces</p>
                <div className={home.serviceContent}>
                    <div className={home.service1}>
                        <div className={home.serviceImg}>
                            <img src={ResidentialImg} width="200px"/>
                        </div>
                        <p className={home.residentialPara}>Residential Design</p>
                        <p className={home.servicePara}>Innovative residential design crafting unique, stylish, and efficient homes that reflect your personality and meet your specific needs</p>
                        <button><NavLink to="/service/residential" className={home.serviceBtn}>know More</NavLink></button>
                    </div>
                    <div className={home.service1}>
                        <div className={home.serviceImg}>
                            <img src={CommercialImg} width="200px"/>
                        </div>
                        <p className={home.residentialPara}>Commercial Design</p>
                        <p className={home.servicePara}>Expertly planned commercial designs  for modern business efficiency, productivity, and aesthetic harmony without compromise</p>
                        <button><NavLink to="/service/commercial" className={home.serviceBtn}>know More</NavLink></button>
                    </div>
                    <div className={home.service1}>
                        <div className={home.serviceImg}>
                            <img src={SpaceImg} width="200px"/>
                        </div>
                        <p className={home.residentialPara}>Space Planning</p>
                        <p className={home.servicePara}>Meticulous space planning maximizing functionality and circulation, creating efficient and aesthetically captivating interiors</p>
                        <button><NavLink to="/service/space" className={home.serviceBtn}>know More</NavLink></button>
                    </div>
                    <div className={home.service1}>
                        <div className={home.serviceImg}>
                            <img src={FurnitureImg} width="200px"/>
                        </div>
                        <p className={home.residentialPara}>Furniture Customize</p>
                        <p className={home.servicePara}>Artisanal furniture creations tailored to enrich interiors with distinctive craftsmanship and personalized elegance</p>
                        <button><NavLink to="/service/furniture" className={home.serviceBtn}>know More</NavLink></button>
                    </div>
                </div>
            </div>     


            {/* Living Room Design */}

            <div className={home.livingRoom}>
                <div className={home.livingContainer}>
                    <div className={home.livingContent}>
                        <h3>Living Room Design</h3>
                        <p>Designing a living room involves harmonizing comfort and style. Begin by strategically arranging furniture for optimal flow and functionality. Select a soothing color palette, incorporate lighting and textures, and personalize with decor for a space that reflects your personality</p>
                        <button><Link to="/contact" className={home.livingBtn}>Get Started</Link></button>
                    </div>
                </div>
            </div>




            {/* Testimonials */}

            <div className={home.testimonials}>
                <h3 className={home.sliderTitle}>Testimonials</h3>
                <p className={home.sliderpara1}>User Endorsements</p>
                <Slider {...testimonials} className={home.testSlider}>
                    <div className={home.slider1}>
                        <FontAwesomeIcon icon={faQuoteLeft} className={home.sliderIcon}/>
                        <p>I am beyond thrilled with the transformation SVimla Interior brought to my home. From the initial consultation to the final reveal, every step was handled with the utmost professionalism and creativity. The team's attention to detail and commitment to excellence is unparalleled. My living space now feels luxurious and uniquely mine. I highly recommend SVimla Interior for anyone looking to elevate their home's aesthetic.</p>
                        <h3>Sudhir Vishwakarma</h3>
                    </div>
                    <div className={home.slider1}>
                        <FontAwesomeIcon icon={faQuoteLeft} className={home.sliderIcon} />
                        <p>Working with SVimla Interior was an absolute delight. Their design team took the time to understand my vision and turned it into a reality that exceeded all my expectations. The quality of materials used and the craftsmanship were top-notch. My office space now feels both functional and stylish, making it a joy to work in. Thank you, SVimla Interior, for your outstanding work!</p>
                        <h3>Sudhir Vishwakarma</h3>
                    </div>
                    <div className={home.slider1}>
                        <FontAwesomeIcon icon={faQuoteLeft} className={home.sliderIcon} />
                        <p>SVimla Interior did an incredible job renovating my kitchen and dining area. The designers were very attentive to my needs and preferences, and the final design was a perfect blend of modern and cozy. The project was completed on time and within budget, and the team was always available to answer my questions. I am extremely happy with the results and would not hesitate to recommend SVimla Interior to friends and family.</p>
                        <h3>Sudhir Vishwakarma</h3>
                    </div>
                    <div className={home.slider1}>
                        <FontAwesomeIcon icon={faQuoteLeft} className={home.sliderIcon} />
                        <p>From start to finish, my experience with SVimla Interior was fantastic. They transformed my outdated bedroom into a serene and elegant retreat. The team was highly professional, always punctual, and kept me informed throughout the entire process. The end result is simply stunning. I am so grateful for their hard work and dedication. SVimla Interior truly made my dream bedroom a reality.</p>
                        <h3>Sudhir Vishwakarma</h3>
                    </div>
                    <div className={home.slider1}>
                        <FontAwesomeIcon icon={faQuoteLeft} className={home.sliderIcon} />
                        <p>SVimla Interior's team is exceptionally talented and creative. They took my rather vague ideas and turned them into a beautiful and cohesive design for my living room and study. The project management was flawless, and the attention to detail was evident in every aspect of the work. I am incredibly pleased with the outcome and feel proud to show off my newly designed spaces. Highly recommended!</p>
                        <h3>Sudhir Vishwakarma</h3>
                    </div>
                    <div className={home.slider1}>
                        <FontAwesomeIcon icon={faQuoteLeft} className={home.sliderIcon} />
                        <p>I hired SVimla Interior to redesign my bathroom and couldn't be happier with the results. The design team provided innovative solutions and beautiful design options that perfectly suited my taste and lifestyle. The workmanship was impeccable, and the project was completed ahead of schedule. My bathroom now feels like a luxurious spa, and I enjoy every moment I spend in it. Thank you, SVimla Interior, for your exceptional service!</p>
                        <h3>Sudhir Vishwakarma</h3>
                    </div>
                </Slider>
            </div>



            {/* Contact Us */}
            
            <div className={home.homeContact}>
                <h3>Book a Consultation</h3>
                <div className={home.contactForm}> 
                    <form onSubmit={homeSubmit}>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            value={homeForm.name}
                            onChange={homeHandler} 
                            placeholder="Enter Your Name"
                        />
                        {homeErrors.name && <p>{homeErrors.name}</p>}
                        <input 
                            type="email"
                            id="email" 
                            name="email"
                            value={homeForm.email}
                            onChange={homeHandler}
                            placeholder="Enter Your E-mail"
                        />
                        {homeErrors.email && <p>{homeErrors.email}</p>}
                        <input 
                            type="text"
                            id="phone"
                            name="phone" 
                            value={homeForm.phone}
                            onChange={homeHandler}
                            placeholder="Enter Your Number"
                        />
                        {homeErrors.phone && <p>{homeErrors.phone}</p>}
                        <textarea 
                            rows="3" 
                            id="message"
                            name="message"
                            value={homeForm.message}
                            onChange={homeHandler}
                            placeholder="Type Your Message"
                        ></textarea>
                        {homeErrors.message && <p>{homeErrors.message}</p>}
                        <button type="submit">Submit</button> 
                    </form>
                </div>
            </div>


            {/* Footer */}

            <div className={home.footerContainer}>
                <div className={home.footer}>
                    <div className={home.quick}>
                        <h1>Quick Links</h1>
                        <NavLink className={home.footerLinks} to="/">Home</NavLink>
                        <NavLink className={home.footerLinks} to="/about">About</NavLink>
                        <NavLink className={home.footerLinks} to="/contact">Contact</NavLink>
                    </div>
                    <div className={home.quick}>
                        <h1>Services</h1>
                        <NavLink className={home.footerLinks} to="/service/residential">Residential</NavLink>
                        <NavLink className={home.footerLinks} to="/service/commercial">Commercial</NavLink>
                        <NavLink className={home.footerLinks} to="/service/space">Space</NavLink>
                        <NavLink className={home.footerLinks} to="/service/furniture">Furniture</NavLink>
                    </div>
                    <div className={home.quick}>
                        <h1>Social Links</h1>
                        <div className={home.socialLinks}>
                            <NavLink className={home.iconNav} ><FontAwesomeIcon icon={faFacebookF} className={`${home.iconFacebook} ${home.iconFacebookk}`}/></NavLink>
                            <NavLink className={home.iconNav}><FontAwesomeIcon icon={faInstagram} className={`${home.iconFacebook} ${home.iconInstagram}`}/></NavLink>
                            <NavLink className={home.iconNav}><FontAwesomeIcon icon={faLinkedinIn} className={`${home.iconFacebook} ${home.iconLinkedIn}`}/></NavLink>
                            <NavLink className={home.iconNav}><FontAwesomeIcon icon={faXTwitter} className={`${home.iconFacebook} ${home.iconTwitter}`}/></NavLink>
                            <NavLink className={home.iconNav}><FontAwesomeIcon icon={faYoutube} className={`${home.iconFacebook} ${home.iconYoutube}`}/></NavLink>
                            <NavLink className={home.iconNav}><FontAwesomeIcon icon={faWhatsapp} className={`${home.iconFacebook} ${home.iconWhatsapp}`}/></NavLink>
                        </div>
                    </div>
                    <div className={home.quick}>
                        <h1>NewsLetter</h1>
                        <div className={home.newsletter}>
                            <input type="text" placeholder="Enter your Email"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className={home.reserved}>© 2024 SVimla Interior. All rights reserved.</p>
            </div>
            
        </div>
    )
}

export default Home;