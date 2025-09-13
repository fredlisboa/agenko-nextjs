import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
            <footer className="agenko-footer gray-dark pt-130 primary-black-bg">
                    <div className="shape shape-one"><span><img className="rotate360" src="/assets/images/creative-agency/footer/element1.png" alt="Shape" /></span></div>
                    <div className="shape shape-two"><span><img className="rotate360" src="/assets/images/creative-agency/footer/element2.png" alt="Shape" /></span></div>
                    <div className="shape shape-blur_one"><span></span></div>
                    <div className="shape shape-blur_two"><span></span></div>
                    
                    <div className="footer-widget-area pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    
                                    <div className="footer-widget footer-about-widget mb-40 pf_fadeup">
                                        <div className="footer-content">
                                            <div className="footer-logo">
                                                 
                                                <a href="#"> <Image src="/assets/images/creative-agency/logo/logo-main.png" alt="img" width={151} height={40}   /></a>
                                            </div>
                                            <p>Agenko creative digital agency delivering innovate web Development marketing.</p>
                                            <form>
                                                <div className="form-group">
                                                    <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                                                    <label><i className="far fa-envelope"></i></label>
                                                    <button className="theme-btn style-two">Subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    
                                    <div className="footer-widget footer-contact-info-widget mb-40 pf_fadeup">
                                        <div className="footer-content mb-25">
                                            <h4 className="widget-title">Main Address</h4>
                                            <p>6801 Hollywood Blvd, Los Angeles, CA 90028</p>
                                        </div>
                                        <div className="footer-content mb-25">
                                            <h4 className="widget-title">Sub-Address</h4>
                                            <p>200 Santa Monica Pier, Santa Monica, CA 90401</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-5">
                                            
                                            <div className="footer-widget footer-nav-widget mb-40 pf_fadeup">
                                                <div className="footer-content mb-35">
                                                    <h4 className="widget-title">Our Link</h4>
                                                    <ul className="footer-nav">
                                                        <li>
                                                            <Link href="/about">About us</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/service">Services</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/project">Our Project</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/faq">FAQ</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/contact">Contact us</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                           
                                            <div className="footer-widget footer-contact-widget mb-40 pf_fadeup">
                                                <div className="footer-content">
                                                    <h4 className="widget-title">Contact</h4>
                                                    <div className="agenko-iconic-box style-three mb-30">
                                                        <div className="icon">
                                                        <i className="bi bi-envelope"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h6>Email</h6>
                                                            <p><a href="mailto:info@agenko.com">info@agenko.com</a></p>
                                                        </div>
                                                    </div>
                                                    <div className="agenko-iconic-box style-three">
                                                        <div className="icon">
                                                        <i className="bi bi-telephone"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h6>Phone</h6>
                                                            <p><a href="tel:+555-7659-9854">+555-7659-9854</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                   
                                    <div className="copyright-text">
                                        <p>&copy; 2025 <span>Agenko</span> - All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    
                                    <div className="copyright-nav">
                                        <ul>
                                            <li><a href="#">Terms & Condition</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    );
};

export default Footer;