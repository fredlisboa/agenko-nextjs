import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroBanner2 = () => {
    return (
        <section className="agk-hero">
        <div className="hero-wrapper-two">
            <div className="shape shape-one"><span><Image className="rotate360" src="/assets/images/digital-agency/hero/shape/shape1.png" alt="img" width={50} height={50}   /></span></div>
            <div className="shape shape-two"><span><Image className="animate-float-bob-y" src="/assets/images/digital-agency/hero/shape/shape2.png" alt="img" width={40} height={80}   /></span></div>
            <div className="shape circle-one"><span></span></div>
            <div className="shape circle-two"><span></span></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <h1>
                                <span className="text-anm">Digital Modern</span>
                                <span className="text-anm">Agency</span>
                            </h1>
                            <div className="pro">Pro</div>
                            <div className="text-box pf_fadeup">
                                <p>A <span>Digital Modern Agency</span> specializing in innovative web app design branding, and marketing solutions to elevate your business.</p>
                                <div className="hero-button">
                                    <Link href="/about" className="theme-btn style-one">
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
                <div className="row">
                    <div className="col-lg-4">
                        <ul className="service-list pf_fadeup">
                            <li>
                                
                                <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-browser-edge"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Website Design Service</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-code-square"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Web Development Service</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-lightbulb"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Brand Strategy Solutions</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                                <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                    <i className="bi bi-megaphone"></i>
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Digital Marketing Solution</h4>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        
                        <div className="hero-image style-one pf_fadeup">
                            <img src="/assets/images/digital-agency/hero/hero-img1.jpg" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanner2;