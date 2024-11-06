import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" srcset="" className='logo'/>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti labore earum commodi modi, iure possimus molestias laudantium omnis quasi voluptatum? Error minima ipsam et dolorum tempora aut sint maxime non.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" srcset="" />
                        <img src={assets.twitter_icon} alt="" srcset="" />
                        <img src={assets.linkedin_icon} alt="" srcset="" />
                        </div>



                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privarcy Policy</li>
                    </ul>



                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                       
                        <li>
                            +91-6380974239
                        </li>
                        <li>tastebite@gmail.com</li>
                    </ul>



                </div>
            </div>
            <hr/>
            <p className="footer-copyright">
                Copyright @ 2024  Love At First Bite.com - All Right Reversed.
            </p>














        </div>

    )
}

export default Footer