

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
   
    return (
        <footer className="footer">
            <div className="Back-top">
                <h2>
                    <a href="#top" aria-label="Back to top of the page">Back to Top</a>
                </h2>
            </div>
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>We are dedicated to providing high-quality service and support for all our clients.</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#" aria-label="Go to home section">Home</a></li>
                        <li><a href="#about" aria-label="Learn more about us">About</a></li>
                        <li><a aria-label="Explore our services">Services</a></li>
                        <li><a href="#" aria-label="Contact us">Contact</a></li>
                      
                    </ul>
                  
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><a href="mailto:info@example.com" aria-label="Email us at info@example.com">Email: info@example.com</a></p>
                    <p><a href="tel:+1234567890" aria-label="Call us at +123 456 7890">Phone: +123 456 7890</a></p>
                   
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Visit our Facebook page">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" aria-label="Visit our Twitter page">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" aria-label="Visit our Instagram page">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" aria-label="Visit our LinkedIn page">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 React Rocket Developers | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
