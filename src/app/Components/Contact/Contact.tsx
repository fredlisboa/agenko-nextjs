import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="agenko-contact pt-130 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            
                            <div className="contact-info-wrapper mb-50 pf_fadeup">
                                <div className="shape"><span><Image src="/assets/images/pages/shape/world.png" alt="img" width={306} height={647}   /></span></div>
                                <ul>
                                    <li>
                                        <div className="phone"><a href="tel:+1(555)123-4567">+1 (555) 123-4567</a></div>
                                    </li>
                                    <li>
                                        
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Address</h3>
                                                <p>6801 Hollywood Blvd, Los Angeles, 
                                                    CA 90028</p>
                                                <p>6801 Hollywood Blvd, Los Angeles, 
                                                        CA 90028</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Email</h3>
                                                <p><a href="mailto:Info@agenko45.com">Info@agenko45.Com</a></p>
                                                <p><a href="mailto:Info@agenko45.com">Info@agenko45.Com</a></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Follow</h3>
                                                <div className="social-link">
                                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-20">
                                    <span className="sub-title">Get In Touch</span>
                                    <h2>Get started and grow your business now.</h2>
                                </div>
                                <p className="mb-20">Start today to unlock opportunities and drive your business toward success.</p>
                                <form className="agenko-contact-form style-one" id="contact-form" action="contact.php" method="POST">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="Name" name="name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="Email" name="email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="Subject" name="subject" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className="form_control" rows={5} placeholder="Message" name="message"></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="theme-btn">Send Message</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-message"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="agenko-map">
                
                <div className="map-box" data-aos="fade-up" data-aos-duration="1300">
                    <iframe src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                </div>
            </section>            
        </div>
    );
};

export default Contact;