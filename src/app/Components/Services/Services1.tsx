import Link from 'next/link';
import React from 'react';

const Services1 = () => {
    
    return (
        <section className="agk-service-ca pt-125">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">Our Service <span className="line"></span></span>
                            <h2>Innovative Services That 
                                Elevate Your Brand </h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="text-box float-lg-end pf_fadeup">
                            <p>We are a <span>digital Creative agency</span> with 25 years of experience, specializing in delivering cutting-edge </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        
                        <div className="agenko-iconic-box style-four pf_fadeup">
                            <div className="icon">
                                <i className="flaticon-web-developer"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Website Development</h4>
                                <p>We are responsive user-friendly websites tailored to your brand, ensuring seamless functionality, engaging design optimized.</p>
                                <Link href="/service/service-details" className="read-more style-one">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        
                        <div className="agenko-iconic-box style-four pf_fadeup mt-60">
                            <div className="icon">
                                <i className="flaticon-web-developer"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Digital Marketing</h4>
                                <p>Boost your brand with expert digital marketing: SEO, social media, content creation, paid ads, and data-driven strategies for growth.</p>
                                <Link href="/service/service-details" className="read-more style-one">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        
                        <div className="agenko-iconic-box style-four pf_fadeup mt-120">
                            <div className="icon">
                                <i className="flaticon-web-developer"></i>
                            </div>
                            <div className="content">
                                <h4 className="title">Creative Branding</h4>
                                <p>We design distinctive branding and visual identities that connect with your audience, boosting brand recognition and leaving.</p>
                                <Link href="/service/service-details" className="read-more style-one">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services1;