import Image from 'next/image';
import React from 'react';

const Cta2 = () => {
    return (
        <section className="agenko-join-team pb-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    
                    <div className="big-text mb-50 pf_fadeup">
                        <span className="fill-text">Join Our</span>
                        
                        <span><Image src="/assets/images/pages/shape/circle-shape1.png" alt="img" width={135} height={135}   />Talented</span>
                        <span>Team</span>
                    </div>
                </div>
                <div className="col-lg-5">
                   
                    <div className="agenko-team-image float-lg-end mb-30">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="agenko-image mb-20 pf_fadeup pf_fadeup">
                                    <Image src="/assets/images/pages/team/team-thumb1.jpg" alt="img" width={200} height={204}   />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="agenko-image mb-20 pf_fadeup pf_fadeup">
                                <Image src="/assets/images/pages/team/team-thumb2.jpg" alt="img" width={190} height={182}   />
                                </div>
                                <div className="agenko-image mb-20 pf_fadeup pf_fadeup">
                                <Image src="/assets/images/pages/team/team-thumb3.jpg" alt="img" width={220} height={187}   />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Cta2;