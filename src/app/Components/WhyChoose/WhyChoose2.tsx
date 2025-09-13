import Image from 'next/image';
import React from 'react';

const WhyChoose2 = () => {
    return (
        <section className="agenko-why-choose pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="agenko-content-box mb-30 pf_fadeup">
                            <div className="seciton-title mb-30">
                                <span className="sub-title">Why Choose Us</span>
                                <h2>Your Trusted Partner for Success & Innovation</h2>
                            </div>
                            <p className="mb-35">At Agenko Agency, we specialize in delivering strategic growth solutions tailored to elevate your business to new heights. By combining and innovative strategies, data-driven insights, and creative.</p>
                            
                            <div className="agenko-skill-list">
                                
                                <div className="agenko-skill-item style-one mb-20">
                                    <div className="progress-title">
                                        <h5>Development Solution <span>77%</span></h5>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                
                                <div className="agenko-skill-item style-one mb-20">
                                    <div className="progress-title">
                                        <h5>Design Solution <span>87%</span></h5>
                                    </div>
                                    <div className="progress-title"></div>
                                    <div className="progress">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                                
                                <div className="agenko-skill-item style-one mb-20">
                                    <div className="progress-title">
                                        <h5>Marketing Solution <span>81%</span></h5>
                                    </div>
                                    <div className="progress-title"></div>
                                    <div className="progress">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="agenko-image-box text-center text-lg-end mb-50 pf_fadeup">
                            <div className="agenko-image">
                                <Image src="/assets/images/pages/team/team-single2.jpg" alt="img" width={520} height={476}   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose2;