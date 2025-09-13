import Image from 'next/image';
import React from 'react';

const HeroBanner3 = () => {
    return (
            <section className="agk-hero">
                <div className="hero-wrapper-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                
                                <div className="hero-content mb-70 pf_fadeup">
                                    <h1>Agency For Growth Through Innovative <span>Marketing.</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-image-box text-center pf_fadeup">
                    <Image src="/assets/images/marketing-agency/hero/hero-img1.jpg" alt="img" width={1815} height={658}   />
                        <svg width="835" height="172" viewBox="0 0 835 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42 92V41.5C42 18.5802 23.4198 0 0.5 0H834.5V171.999C834.5 149.907 816.591 132 794.5 132H82C59.9086 132 42 114.091 42 92Z" fill="#0E0F11"/>
                        </svg>
                        <div className="text-box">
                            <p>A <span>digital marketing agency</span> focused delivering innovative strategies to accelerate business growth, enhance brand visibility, and increase customer engagement, using data-driven approaches.</p>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default HeroBanner3;