import Link from 'next/link';
import React from 'react';

const Pricing1 = () => {
    return (
            <section className="agenko-pricing pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            
                            <div className="agenko-pricing-item style-one mb-20 pf_fadeup">
                                <div className="shape shape-one"><span><img src="/assets/images/pages/shape/shape1.png" alt="shape" /></span></div>
                                <div className="pricing-head">
                                    <span className="sub-title">Business</span>
                                    <h2>Invest in Your Success</h2>
                                    <p>Unlock your potential with affordable, tailored plans designed to fuel growth, enhance performance, and drive long-term success.</p>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-one">
                                        <li><i className="bi bi-check-circle-fill"></i>Unlimited Cards</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Automated management</li>
                                        <li><i className="bi bi-check-circle-fill"></i>SOX compliance</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Enterprise ERP integrations</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Local video issuance</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    
                                    <div className="agk-button">
                                        <Link href="/contact" className="theme-btn style-two"><span className="text">Contact Us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            
                            <div className="agenko-pricing-item style-two mb-20 pf_fadeup">
                                <div className="pricing-head">
                                    <h4>Basic</h4>
                                    <div className="pricing"><span className="sign">$</span>43/mo</div>
                                </div>
                                <div className="pricing-body">
                                    <p>We responsive user-friendly websites tailored to your ensuring seamless functionality, engaging design.</p>
                                </div>
                            </div>
                            
                            <div className="agenko-pricing-item style-two mb-20 pf_fadeup">
                                <div className="pricing-head">
                                    <h4>Standard</h4>
                                    <div className="pricing"><span className="sign">$</span>43/mo</div>
                                </div>
                                <div className="pricing-body">
                                    <p>We responsive user-friendly websites tailored to your ensuring seamless functionality, engaging design.</p>
                                </div>
                            </div>
                            
                            <div className="agenko-pricing-item style-two mb-20 pf_fadeup">
                                <div className="pricing-head">
                                    <h4>Premium</h4>
                                    <div className="pricing"><span className="sign">$</span>43/mo</div>
                                </div>
                                <div className="pricing-body">
                                    <p>We responsive user-friendly websites tailored to your ensuring seamless functionality, engaging design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Pricing1;