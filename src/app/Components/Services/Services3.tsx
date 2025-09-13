"use client"
import Link from 'next/link';
import React from 'react';

const Services3 = () => {
    return (
        <section className="agk-services pt-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    
                    <div className="section-title mb-50 pf_fadeup">
                        <span className="sub-heading">Our Service</span>
                        <h2>We are Digital Agency With
                            25+ Years Experience</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    
                    <div className="text-box mb-50 pf_fadeup">
                        <p>We are a <span>Digital Agency</span> with over 25 years of experience, specializing in delivering cutting-edge digital solutions, including web design, marketing, and branding, to help businesses achieve sustainable growth and success.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    
                    <div className="agenko-iconic-box style-six mb-40 pf_fadeup">
                        <div className="icon">
                        <i className="bi bi-router-fill"></i>
                        </div>
                        <div className="content">
                            <h4>Business Service</h4>
                            <p>Offering a wide range of business services, including consulting, strategy development, and operational support to drive efficiency.</p>
                            <div className="agk-button">
                                <Link href="/service/service-details" className="theme-btn style-two"><span className="text">Learn More</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    
                    <div className="agenko-iconic-box style-six mb-40 pf_fadeup">
                        <div className="icon">
                        <i className="bi bi-router-fill"></i>
                        </div>
                        <div className="content">
                            <h4>Intelligent Architecture</h4>
                            <p>Offering a wide range of business services, including consulting, strategy development, and operational support to drive efficiency.</p>
                            <div className="agk-button">
                                <Link href="/service/service-details" className="theme-btn style-two"><span className="text">Learn More</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    
                    <div className="agenko-iconic-box style-six mb-40 pf_fadeup">
                        <div className="icon">
                        <i className="bi bi-router-fill"></i>
                        </div>
                        <div className="content">
                            <h4>Branding Service</h4>
                            <p>Offering a wide range of business services, including consulting, strategy development, and operational support to drive efficiency.</p>
                            <div className="agk-button">
                                <Link href="/service/service-details" className="theme-btn style-two"><span className="text">Learn More</span><span className="icon"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Services3;