import Link from 'next/link';
import React from 'react';

const Services2 = () => {
    return (
                <section className="agk-services gray-dark pt-130 pb-100">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    
                                    <div className="section-title mb-65 pf_fadeup">
                                        <span className="sub-title">Our Services</span>
                                        <h2>Building Tomorrow Digital 
                                            Experiences Today</h2>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="text-box mb-60 pf_fadeup">
                                        <p>Creating cutting-edge digital experiences that blend innovation and functionality to meet the evolving needs of tomorrow’s businesses and users</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    
                                    <div className="agenko-card-item style-one mb-30 pf_fadeup">
                                        <div className="card-title">
                                            <div className="sn-number">01</div>
                                            <h3 className="title">Website Development</h3>
                                        </div>
                                        <div className="content">
                                            <p>Business and corporate <span>web dashboard</span> focuses on creating intuitive, data-driven interfaces that enhance decision-making, streamline processes.</p>
                                        </div>
                                        <div className="card-button">
                                            <Link href="/service/service-details" className="theme-btn style-one">
                                                <span className="text-flip">
                                                    <span className="text">LEARN MORE</span>
                                                    <span className="text">LEARN MORE</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                   
                                    <div className="agenko-card-item style-one mb-30 pf_fadeup">
                                        <div className="card-title">
                                            <div className="sn-number">02</div>
                                            <h3 className="title">E-commerce Solutions</h3>
                                        </div>
                                        <div className="content">
                                            <p>Comprehensive <span>e-commerce solutions</span> designed to optimize user experience, boost conversions, and streamline online transactions. Our tailored.</p>
                                        </div>
                                        <div className="card-button">
                                            <Link href="/service/service-details" className="theme-btn style-one">
                                                <span className="text-flip">
                                                    <span className="text">LEARN MORE</span>
                                                    <span className="text">LEARN MORE</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                   
                                    <div className="agenko-card-item style-one mb-30 pf_fadeup">
                                        <div className="card-title">
                                            <div className="sn-number">03</div>
                                            <h3 className="title">Branding & Identity Design</h3>
                                        </div>
                                        <div className="content">
                                            <p>Crafting <span>unique branding</span> and identity designs that reflect your brand’s values, build recognition, and create a lasting impression on audiences</p>
                                        </div>
                                        <div className="card-button">
                                            <Link href="/service/service-details" className="theme-btn style-one">
                                                <span className="text-flip">
                                                    <span className="text">LEARN MORE</span>
                                                    <span className="text">LEARN MORE</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    );
};

export default Services2;