import React from "react";
import furniture from "../style/furniture.module.css";

// Images //
// Chairs //
import Rocking from "../images/Furniture-Img/Chairs/Rocking Chair.png";
import Barrel from "../images/Furniture-Img/Chairs/Barrel Chair.png";
import Arm from "../images/Furniture-Img/Chairs/Arm Chair.png";
import Side from "../images/Furniture-Img/Chairs/Side Chair.png";
import Windsor from "../images/Furniture-Img/Chairs/Windsor Chair.png";
import Adirondack from "../images/Furniture-Img/Chairs/Adirondack Chair.png";
import Dining from "../images/Furniture-Img/Chairs/Dining Chair.png";
import Bench from "../images/Furniture-Img/Chairs/Bench.png";

// Tables //
import Coffee from "../images/Furniture-Img/Tables/Coffee Table.png";
import DiningTable from "../images/Furniture-Img/Tables/Dining Table.png";
import Bar from "../images/Furniture-Img/Tables/Bar Table.png";
import Office from "../images/Furniture-Img/Tables/Office Table.png";
import Dressing from "../images/Furniture-Img/Tables/Dressing Table.png";
import Nesting from "../images/Furniture-Img/Tables/Nesting Table.png";
import Cluster from "../images/Furniture-Img/Tables/Cluster table.png";
import Patio from "../images/Furniture-Img/Tables/Patio table.png";
import Round from "../images/Furniture-Img/Tables/Round Table.png";

// Beds //
import Murphy from "../images/Furniture-Img/Beds/Murphy Bed.png";
import Trundle from "../images/Furniture-Img/Beds/Trundle Bed.png";
import SofaCum from "../images/Furniture-Img/Beds/Sofacum Bed.png";
import Ottoman from "../images/Furniture-Img/Beds/Ottoman bed.png";
import FourPoster from "../images/Furniture-Img/Beds/Four Poster Bed.png";
import Bunk from "../images/Furniture-Img/Beds/Bunk bed.png";

// Book Cases //
import Corner from "../images/Furniture-Img/Bookcases/Corner Bookcase.png";
import Kids from "../images/Furniture-Img/Bookcases/Kids Bookcase.png";
import Barrister from "../images/Furniture-Img/Bookcases/Barrister.png";
import Cube from "../images/Furniture-Img/Bookcases/Cube Bookcase.png";
import Storage from "../images/Furniture-Img/Bookcases/Storage Bookcase.png";
import leaning from "../images/Furniture-Img/Bookcases/Leaning Bookcase.png";
import Floating from "../images/Furniture-Img/Bookcases/Floating bookcase.png";
import Library from "../images/Furniture-Img/Bookcases/library.png";

// Cabinets //
import Base from "../images/Furniture-Img/Cabinet/Base cabinet.png";
import wall from "../images/Furniture-Img/Cabinet/upper-cabinet.png";
import Tall from "../images/Furniture-Img/Cabinet/Tall Cabinet.png";
import KitchenCabinet from "../images/Furniture-Img/Cabinet/Kitchen cabinet.png";
import LivingRoomCabinet from "../images/Furniture-Img/Cabinet/living-room-cabinet.jpg";
import BedroomCabinet from "../images/Furniture-Img/Cabinet/bedroom cabinet.jpg";
import BathroomCabinet from "../images/Furniture-Img/Cabinet/batnroom cabinet.jpg";
import OfficeCabinet from "../images/Furniture-Img/Cabinet/office cabinet.jpg";
import SlidingCabinet from "../images/Furniture-Img/Cabinet/sliding door cabinet.png";

// Wardrobes //
import SlidingWardrobe from "../images/Furniture-Img/Wardrobe/sliding door wardrobe.png";
import CornerWardrobe from "../images/Furniture-Img/Wardrobe/Corner Wardrobe.png";
import FittedWardrobe from "../images/Furniture-Img/Wardrobe/Fitted wardrobe.png";
import GlassWardrobe from "../images/Furniture-Img/Wardrobe/Glass wardrobe.png";
import WalkinWardrobe from "../images/Furniture-Img/Wardrobe/Walkin wardrobe.png";

// Sets //
import BedroomSet from "../images/Furniture-Img/Sets/Bedroom.png";
import LivingRoomSet from "../images/Furniture-Img/Sets/Living Room.png"; 
import ModularBedroom from "../images/Furniture-Img/Sets/Modular Bedroom.png";
import ModularLivingRoom from "../images/Furniture-Img/Sets/Modular Living-Room.png";
import Modularkitchen from "../images/Furniture-Img/Sets/Modular kitchen.png";
import ModularOffice from "../images/Furniture-Img/Sets/Modular Office.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import { NavLink } from "react-router-dom";


const Furniture = ()=>{
    return (
        <div className={furniture.mainContainer}>


            <div className={furniture.furnitureHero}>
                <h3 className={furniture.heroHeader}>Our Products</h3>
                <p className={furniture.heroPara}>Creating customizable furniture options to suit diverse preferences</p>
            </div>
            <div className={furniture.products}>


                {/* Chairs */}
                <div className={furniture.chairFurniture}>
                    <h3>Chairs</h3>
                    <div className={furniture.chairs}>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Rocking} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Rocking Chair</p>
                            <p className={furniture.chairDesc}>Rocking chairs provide soothing motion and timeless comfort, making them a favorite for relaxation</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Rocking Chair?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Barrel} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Barrel Chair</p>
                            <p className={furniture.chairDesc}>A barrel chair features a rounded back that forms a cozy, enclosed seating space, offering both style and comfort</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Barrel Chair?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Arm} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Arm Chair</p>
                            <p className={furniture.chairDesc}>Armchairs offer stylish support with their comfortable design and supportive armrests, perfect for relaxation</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Arm Chair?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Side} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Side Chair</p>
                            <p className={furniture.chairDesc}>Side chairs offer stylish, space-efficient seating, perfect for adding comfort and function to any room</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Side Chair?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Windsor} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Windsor Chair</p>
                            <p className={furniture.chairDesc}>Windsor chairs offer rustic charm and durability with their iconic spindle backs and solid construction</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Windsor Chair?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Adirondack} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Adirondack Chair</p>
                            <p className={furniture.chairDesc}>Adirondack chairs provide relaxed comfort with their wide arms and slanted seat, perfect for outdoor lounging</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Adirondack Chair?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Dining} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Dining Chair</p>
                            <p className={furniture.chairDesc}>Dining chairs provide essential comfort and style for your dining area, enhancing every meal experience</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Dining Chair?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Bench} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Bench</p>
                            <p className={furniture.chairDesc}>Benches provide practical seating with a simple, elegant design, ideal for both indoor and outdoor spaces</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Bench?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Tables */}
                <div className={furniture.chairFurniture}>
                    <h3>Tables</h3>
                    <div className={furniture.chairs}>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Coffee} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Coffee Table</p>
                            <p className={furniture.chairDesc}>The coffee table serves as a versatile centerpiece, ideal for holding drinks, magazines, and decorative items</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Coffee Table?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={DiningTable} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Dining Table</p>
                            <p className={furniture.chairDesc}>Enhance your dining area with a dining table, blending design and function for memorable meals and moments</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Dining Table?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Bar} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Bar Table</p>
                            <p className={furniture.chairDesc}>Bar tables elevate your space with stylish design, offering a perfect spot for casual dining and social interaction</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Bar Table?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Office} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Office Table</p>
                            <p className={furniture.chairDesc}>Office tables offer a dedicated surface for work tasks, blending practicality with a professional aesthetic</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Office Table?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Dressing} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Dressing Table</p>
                            <p className={furniture.chairDesc}>Dressing tables provide a dedicated area for personal care, blending functionality with decorative charm</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Dressing Table?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Nesting} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Nesting Table</p>
                            <p className={furniture.chairDesc}>Enhance your living area with nesting tables, combining stylish design with practical, adjustable surfaces</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Nesting Table?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Cluster} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Cluster Table</p>
                            <p className={furniture.chairDesc}>Cluster tables combine form and function, offering a dynamic and adaptable solution for various room layouts</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Cluster Table?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Patio} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Patio Table</p>
                            <p className={furniture.chairDesc}>The patio table provides a central spot for outdoor activities, combining functionality with outdoor charm</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Patio Table?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Round} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Round Table</p>
                            <p className={furniture.chairDesc}>Round tables blend style and functionality, providing a central, accessible surface for meals and gatherings</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Round Table?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Beds */}
                <div className={furniture.chairFurniture}>
                    <h3>Beds</h3>
                    <div className={furniture.chairs}>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Murphy} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Murphy Bed</p>
                            <p className={furniture.chairDesc}>Murphy beds blend practicality and innovation, allowing you to create a multifunctional space with ease</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Murphy Bed?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Trundle} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Trundle Bed</p>
                            <p className={furniture.chairDesc}>A trundle bed provides extra sleeping space with a pull-out bed stored underneath, ideal for guests</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Trundle Bed?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={SofaCum} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>SofaCum Bed</p>
                            <p className={furniture.chairDesc}>A sofa cum bed combines seating and sleeping space, offering versatile functionality for small living areas</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about SofaCum Bed?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Ottoman} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Ottoman Bed</p>
                            <p className={furniture.chairDesc}>Ottoman beds offer a space-saving design, featuring lift-up storage beneath the mattress for added convenience</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Ottoman Bed<?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={FourPoster} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Four-Poster Bed</p>
                            <p className={furniture.chairDesc}>Four-poster beds offer a classic, sophisticated design, perfect for creating a focal point in any bedroom</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Four-Poster Bed?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Bunk} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Bunk Bed</p>
                            <p className={furniture.chairDesc}>Bunk beds offer a practical solution for kids' rooms, combining fun and functionality in a compact design</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Bunk Bed?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Bookcases */}
                <div className={furniture.chairFurniture}>
                    <h3>Book Cases</h3>
                    <div className={furniture.chairs}>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Corner} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Corner Bookcase</p>
                            <p className={furniture.chairDesc}>Corner bookcases maximize space, fitting snugly into corners to provide stylish storage for books and decor</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Corner Bookcase?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Kids} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Kids Book-Shelf</p>
                            <p className={furniture.chairDesc}>Enhance your child's room with a kids' bookshelf, combining fun designs with practical book storage</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Kids Book-Shelf?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Barrister} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Barrister Bookcase</p>
                            <p className={furniture.chairDesc}>A barrister bookcase features elegant glass-fronted shelves, providing a classic way to display and protect your books</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Barrister Bookcase?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Cube} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Modular Bookcase</p>
                            <p className={furniture.chairDesc}>Enhance your room with a modular bookcase, combining versatile design with the ability to adapt to changing needs</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Modular Bookcase?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Storage} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Storage Bookcase</p>
                            <p className={furniture.chairDesc}>Storage bookcases offer a mix of open and enclosed storage, perfect for organizing books, decor, and personal items</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Storage Bookcase?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={leaning} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Leaning Bookcase</p>
                            <p className={furniture.chairDesc}>A leaning bookcase features a sleek, angled design that leans against the wall, adding a modern touch to any space</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Leaning Bookcase?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Floating} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Floating Bookcase</p>
                            <p className={furniture.chairDesc}>Floating bookcases offer a sophisticated, unobtrusive way to organize and display books, ideal for modern interiors</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Floating Bookcase?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Library} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Library</p>
                            <p className={furniture.chairDesc}>Enhance your home library with a bookshelf built for durability and ample storage, ideal for avid readers</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Library?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Cabinets */}
                <div className={furniture.chairFurniture}>
                    <h3>Cabinets</h3>
                    <div className={furniture.chairs}>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Base} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Base Cabinet</p>
                            <p className={furniture.chairDesc}>Enhance your kitchen or bathroom with a base cabinet, designed to offer durable storage and support countertops</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Base Cabinet?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={wall} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Wall Cabinet</p>
                            <p className={furniture.chairDesc}>A wall cabinet maximizes vertical space, offering stylish storage solutions above countertops or floors</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Wall Cabinet?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Tall} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Tall Cabinet</p>
                            <p className={furniture.chairDesc}>Enhance your storage solutions with a tall cabinet, combining functionality with a streamlined, space-efficient design</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Tall Cabinet?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={KitchenCabinet} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Kitchen Cabinet</p>
                            <p className={furniture.chairDesc}>Enhance your kitchen with cabinets designed for practical storage, optimizing your cooking space</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Kitchen Cabinet?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={LivingRoomCabinet} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Living-Room Cabinet</p>
                            <p className={furniture.chairDesc}>A living room cabinet combines style and functionality, providing storage for media, decor, and everyday items</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Living-Room Cabinet?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={BedroomCabinet} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Bed-Room Cabinet</p>
                            <p className={furniture.chairDesc}>Enhance your bedroom with a cabinet designed for efficient storage and a cohesive look in your space</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Bed-Room Cabinet?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={BathroomCabinet} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Bath-Room Cabinet</p>
                            <p className={furniture.chairDesc}>Enhance your bathroom with a cabinet that blends functionality and style, offering space for essentials and decor</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Bath-Room Cabinet?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={OfficeCabinet} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Office Cabinet</p>
                            <p className={furniture.chairDesc}>An office cabinet offers organized storage for documents and supplies, enhancing workspace efficiency</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Office Cabinet?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={SlidingCabinet} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Sliding Cabinet</p>
                            <p className={furniture.chairDesc}>Enhance your room with a sliding cabinet, combining sleek design with practical, space-efficient storage</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Sliding Cabinet?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Wardrobe */}
                <div className={furniture.chairFurniture}>
                    <h3>Wardrobes</h3>
                    <div className={furniture.chairs}>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={SlidingWardrobe} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Sliding Wardrobe</p>
                            <p className={furniture.chairDesc}>Enhance your bedroom with a sliding wardrobe, combining elegant design with practical, easy-access storage solutions</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Sliding Wardrobe?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={CornerWardrobe} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Corner Wardrobe</p>
                            <p className={furniture.chairDesc}>Enhance your room with a corner wardrobe, combining stylish design with practical, space-saving storage</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Corner Wardrobe?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={FittedWardrobe} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Fitted Wardrobe</p>
                            <p className={furniture.chairDesc}>A fitted wardrobe provides custom storage solutions, perfectly designed to fit your room’s dimensions and needs</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Fitted Wardrobe?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={GlassWardrobe} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Glass Wardrobe</p>
                            <p className={furniture.chairDesc}>A glass wardrobe offers a modern, sleek design with transparent doors that enhance visibility and style</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Glass Wardrobe?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={WalkinWardrobe} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Walkin Wardrobe</p>
                            <p className={furniture.chairDesc}>A walk-in wardrobe offers expansive, luxurious storage space, allowing easy access to your entire clothing collection</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Walkin Wardrobe?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Sets */}
                <div className={furniture.chairFurniture}>
                    <h3>Sets</h3>
                    <div className={furniture.chairs}>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={BedroomSet} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Bedroom Set</p>
                            <p className={furniture.chairDesc}>Bedroom sets offer a complete solution for outfitting your space, combining style and functionality for a harmonious bedroom</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Bedroom Set?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={LivingRoomSet} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Living Room Set</p>
                            <p className={furniture.chairDesc}>Living room sets offer a complete solution for furnishing your space, combining comfort and design for a unified look</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Living Room Set?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={ModularBedroom} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Modular Bedroom</p>
                            <p className={furniture.chairDesc}>A modular bedroom set features customizable pieces that can be rearranged to fit your space and style preferences</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Modular Bedroom?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={ModularLivingRoom} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Modular living Room</p>
                            <p className={furniture.chairDesc}>Enhance your living area with a modular set, combining stylish design with adaptability to suit different room configurations</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Modular living Room?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={Modularkitchen} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Modular Kitchen</p>
                            <p className={furniture.chairDesc}>Enhance your kitchen with a modular set, combining stylish design with customizable features for optimal efficiency</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Modular Kitchen?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                        <div className={furniture.chair}>
                            <div className={furniture.chairImg}>
                                <img src={ModularOffice} width="100px"/>
                            </div>
                            <p className={furniture.chairTitle}>Modular Office</p>
                            <p className={furniture.chairDesc}>The modular office features practical design, allowing for customizable layouts and storage to fit your needs</p>
                            <div className={furniture.chairBtn}>
                                <a href="https://wa.me/917738816630?text=Hello! What would you like to know about Modular Office?" target="_blank">
                                    <button>Get Price</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
     
            </div>


            {/* Footer */}

            <div className={furniture.footerContainer}>
                <div className={furniture.footer}>
                    <div className={furniture.quick}>
                        <h1>Quick Links</h1>
                        <NavLink className={furniture.footerLinks} to="/">Home</NavLink>
                        <NavLink className={furniture.footerLinks} to="/about">About</NavLink>
                        <NavLink className={furniture.footerLinks} to="/contact">Contact</NavLink>
                    </div>
                    <div className={furniture.quick}>
                        <h1>Services</h1>
                        <NavLink className={furniture.footerLinks} to="/service/residential">Residential</NavLink>
                        <NavLink className={furniture.footerLinks} to="/service/commercial">Commercial</NavLink>
                        <NavLink className={furniture.footerLinks} to="/service/space">Space</NavLink>
                        <NavLink className={furniture.footerLinks} to="/service/furniture">Furniture</NavLink>
                    </div>
                    <div className={furniture.quick}>
                        <h1>Social Links</h1>
                        <div className={furniture.socialLinks}>
                            <NavLink className={furniture.iconNav} ><FontAwesomeIcon icon={faFacebookF} className={`${furniture.iconFacebook} ${furniture.iconFacebookk}`}/></NavLink>
                            <NavLink className={furniture.iconNav}><FontAwesomeIcon icon={faInstagram} className={`${furniture.iconFacebook} ${furniture.iconInstagram}`}/></NavLink>
                            <NavLink className={furniture.iconNav}><FontAwesomeIcon icon={faLinkedinIn} className={`${furniture.iconFacebook} ${furniture.iconLinkedIn}`}/></NavLink>
                            <NavLink className={furniture.iconNav}><FontAwesomeIcon icon={faXTwitter} className={`${furniture.iconFacebook} ${furniture.iconTwitter}`}/></NavLink>
                            <NavLink className={furniture.iconNav}><FontAwesomeIcon icon={faYoutube} className={`${furniture.iconFacebook} ${furniture.iconYoutube}`}/></NavLink>
                            <NavLink className={furniture.iconNav}><FontAwesomeIcon icon={faWhatsapp} className={`${furniture.iconFacebook} ${furniture.iconWhatsapp}`}/></NavLink>
                        </div>
                    </div>
                    <div className={furniture.quick}>
                        <h1>NewsLetter</h1>
                        <div className={furniture.newsletter}>
                            <input type="text" placeholder="Enter your Email"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className={furniture.reserved}>© 2024 SVimla Interior. All rights reserved.</p>
            </div>












        </div>
    )
}

export default Furniture;