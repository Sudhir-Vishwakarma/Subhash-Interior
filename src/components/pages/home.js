import React from "react";
import { NavLink } from "react-router-dom";
import AboutImg from "../images/homepage-img/home-about.jpg"
import home from "../style/home.module.css"

const Home = ()=>{


    return (
        <div className={home.mainContainer}>
            <div className={home.heroSection}>
                <div className={home.heroSection2}>
                    <h1>Inspired by You, Designed by Us</h1>
                    <p>From concept to completion, we handle every aspect of your interior design journey with passion and precision. Discover how our innovative designs can elevate your living spaces.</p>
                    <div className={home.heroBtn}>
                        <button>Get a quote</button>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>

            <div className={home.aboutSection}>
                <div className={home.about1}>
                    <img src={AboutImg}/>
                </div>
                <div className={home.about2}>
                    <h3>About</h3>
                    <p className={home.abtTitle}>Learn More About Us</p>
                    <p className={home.abtContent}>At Subhash Interior, we are passionate about transforming spaces into personalized sanctuaries that inspire and elevate everyday living. With a commitment to craftsmanship and creativity, we specialize in bespoke interior design solutions tailored to reflect the unique tastes and lifestyles of our clients. From concept to completion, our team of experienced designers and artisans meticulously curates each project, ensuring every detail harmonizes with the client’s vision. Whether it’s residential or commercial, modern or classic, our goal is to create environments that not only meet but exceed expectations, fostering a sense of comfort, sophistication, and timeless elegance.</p>
                    <button><NavLink to="/about">More About</NavLink></button>
                </div>
            </div>
            
        </div>
    )
}

export default Home;