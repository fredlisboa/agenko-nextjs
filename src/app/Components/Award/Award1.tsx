import Image from 'next/image';
import React from 'react';

const Award1 = () => {
    return (
        <section className="agk-award-ca pb-85">
        <div className="container">
            <div className="row align-items-center ">
                <div className="col-lg-6">
                    
                    <div className="section-title mb-50 pf_fadeup">
                        <span className="sub-title">Our Award</span>
                        <h2>Striving for Excellence Awards & Recognition</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                   
                    <div className="text-box float-lg-end mb-50 pf_fadeup">
                        <p>We are a <span>digital Creative agency</span> with 25 years of experience, specializing in delivering cutting-edge </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    
                    <div className="agk-image-box mb-50 pf_fadeup">
                        <div className="agk-image">
                        <Image src="/assets/images/creative-agency/gallery/award1.jpg" alt="img" width={410} height={543}   />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                   
                    <div className="award-list mb-30">
                        
                        <div className="agenko-award-box style-one mb-20 pf_fadeup">
                            <div className="award-platform">
                                <h5>Microsoft Platform</h5>
                            </div>
                            <div className="award-name">
                                <h5>Website 2024 - 1st Winner</h5>
                            </div>
                            <div className="award-date">
                                <h5>Mar 2024</h5>
                            </div>
                        </div>
                        
                        <div className="agenko-award-box style-one mb-20 pf_fadeup">
                            <div className="award-platform">
                                <h5>LinkedIn Platform</h5>
                            </div>
                            <div className="award-name">
                                <h5>Mobile App  Winner </h5>
                            </div>
                            <div className="award-date">
                                <h5>Apr 2024</h5>
                            </div>
                        </div>
                        
                        <div className="agenko-award-box style-one mb-20 pf_fadeup">
                            <div className="award-platform">
                                <h5>Adobe Platform</h5>
                            </div>
                            <div className="award-name">
                                <h5>Digital Vanguard - 1st Winner</h5>
                            </div>
                            <div className="award-date">
                                <h5>May 2024</h5>
                            </div>
                        </div>
                        
                        <div className="agenko-award-box style-one mb-20 pf_fadeup">
                            <div className="award-platform">
                                <h5>Fiverr Platform</h5>
                            </div>
                            <div className="award-name">
                                <h5>Winner Innova excel Award</h5>
                            </div>
                            <div className="award-date">
                                <h5>Jul 2024</h5>
                            </div>
                        </div>
                        
                        <div className="agenko-award-box style-one mb-20 pf_fadeup">
                            <div className="award-platform">
                                <h5>Upwork Platform</h5>
                            </div>
                            <div className="award-name">
                                <h5>Top Rated Winner Award</h5>
                            </div>
                            <div className="award-date">
                                <h5>Aug2024</h5>
                            </div>
                        </div>
                        
                        <div className="agenko-award-box style-one mb-20 pf_fadeup">
                            <div className="award-platform">
                                <h5>Upwork Platform</h5>
                            </div>
                            <div className="award-name">
                                <h5>Top Rated Winner Award</h5>
                            </div>
                            <div className="award-date">
                                <h5>Aug2024</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Award1;