import Image from 'next/image';
import React from 'react';

const TeamDetails = () => {
    return (
            <section className="agenko-team-details pt-130 pb-80">
                <div className="container">
                    <div className="team-details-wrapper">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="agenko-image-box mb-50 pf_fadeup">
                                    <div className="agenko-image">
                                    <Image src="/assets/images/pages/team/team-single1.jpg" alt="img" width={410} height={414}   />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="member-info mb-50 pf_fadeup">
                                    <h2>Oliver Bennett</h2>
                                    <span className="position">CEO & Founder</span>
                                    <p>i am [Oliver Bennett], a passionate [CEO & Founder] with a love for [specific interest or skill]. With [X years] of experience in [Agenko], I specialize in [specific expertise]. I take pride in [value or accomplishment], striving to deliver [key outcome or benefit] in all I do. Outside of work, I enjoy [personal interest or hobby], always seeking inspiration to fuel my creativity and growth.</p>
                                    <ul className="social-link">
                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                        <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                        <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default TeamDetails;