import React from 'react';
import logo from '../../../assets/logo.png'
import './Footer.css'

const Footer = () => {
return (
<div className="footer_area">
    <div className="container">
        <div className="pt-4">
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="footer_service">
                        <h4>About Us</h4>
                        <p>
                        Within five years of business operations, we have expanded Backpack Story and opened 
                        up three other subsidiary offices to focus on the various needs of our customers. 
                        .
                        </p>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="footer_service">
                        <h4>Important Links</h4>
                        <p><a href="/">Our Story</a></p>
                        <p><a href="/">Travel Blog & Tips</a></p>
                        <p><a href="/">Working With Us</a></p>
                        <p><a href="/">Tour Guid</a></p>
                        <p><a href="/">Be Our Partner</a></p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="footer_service">
                        <h4>Quick Links</h4>
                        <p><a href="/">Term</a></p>
                        <p><a href="/">Privacy & Policy</a></p>
                        <p><a href="/">Blog</a></p>
                        <p><a href="/">TIcket</a></p>
                        <p><a href="/">Contact Us</a></p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="footer_service">
                        <h4>Support</h4>
                        <p><a href="/">Customer Support</a></p>
                        <p><a href="/">Privacy & Policy</a></p>
                        <p><a href="/">Terms & Condition</a></p>
                        <p><a href="/">Forum</a></p>
                        <p><a href="/">Tour Guid</a></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="buttom_footer">
        <p>© URAL <span>2021</span> | All Rights Reserved</p>
        <div className="footer_icon">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
        </div>
    </div>
</div>
);
};

export default Footer;