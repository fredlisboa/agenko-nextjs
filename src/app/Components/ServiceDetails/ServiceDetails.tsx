import Image from 'next/image';
import React from 'react';

const ServiceDetails = () => {
    return (
        <section className="agenko-service-details pt-130 pb-80">
        <div className="container">
            
            <div className="service-details-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="agenko-iamge-box mb-70 pf_zoomIn">
                            <div className="agenko-image">
                            <Image src="/assets/images/pages/service/single-service1.jpg" alt="img" width={1290} height={500}   />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        
                        <div className="agenko-content-box mb-50 pf_fadeup">
                            <div className="section-title mb-40">
                                <span className="sub-title">Description</span>
                                <h2>Success Through Client Experiences</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="agenko-counter-item">
                                        <div className="content">
                                            <h2><span className="count">5000</span>+</h2>
                                            <p>Project Complete</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="agenko-counter-item">
                                        <div className="content">
                                            <h2><span className="count">100</span>%</h2>
                                            <p>Satisfaction Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="agenko-content-box mb-50 pf_fadeup">
                            <p className="mb-20">We offer a range of specialized services designed to address your unique business challenges. innovative strategies tailored solutions, our expertise ensures exceptional outcomes.</p>
                            <p className="mb-20">We offer a range of specialized services designed to address your unique business challenges. innovative strategies tailored </p>
                            <ul className="check-list style-one">
                                <li><i className="flaticon-check"></i>Passionate Problem-Solvers For Your</li>
                                <li><i className="flaticon-check"></i>Business & Financial Creative Innovators</li>
                                <li><i className="flaticon-check"></i>Provide National Trusted Client-Centered</li>
                                <li><i className="flaticon-check"></i>Perfect & Modern Work Results-Driven</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServiceDetails;