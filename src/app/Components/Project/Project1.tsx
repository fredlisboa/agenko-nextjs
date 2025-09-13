import React from 'react';
import ProjectCard1 from '../Card/ProjectCard1';
import Link from 'next/link';

const Project1 = () => {
    return (
        <section className="agk-project pt-130">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="section-title text-center mb-50 pf_zoomIn">
                            <span className="sub-title">Complete Work</span>
                            <h2>Creative Projects We have <br/> Delivered To Client</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        
                        <ProjectCard1
                            img="/assets/images/creative-agency/project/project1.jpg"
                            cat1="Website"
                            cat2="Landing Page"
                            cat3="UI/UX"
                            title="Banking & Financial Mobile Apps"
                            content="AWe develop secure, user-friendly banking apps, streamlining financial services"
                        ></ProjectCard1>

                        <ProjectCard1
                            img="/assets/images/creative-agency/project/project3.jpg"
                            cat1="Website"
                            cat2="Landing Page"
                            cat3="UI/UX"
                            title="Software Agency Website Header"
                            content="Building innovative software solutions to drive your business forward."
                        ></ProjectCard1>
  
                    </div>
                    <div className="col-lg-5">
                        
                        <ProjectCard1
                            img="/assets/images/creative-agency/project/project2.jpg"
                            cat1="Website"
                            cat2="Landing Page"
                            cat3="UI/UX"
                            title="Knead That Dough Brand Identity"
                            content="Crafting a fresh, vibrant brand identity for Knead That Dough."
                        ></ProjectCard1>
                       <ProjectCard1
                            img="/assets/images/creative-agency/project/project2.jpg"
                            cat1="Website"
                            cat2="Landing Page"
                            cat3="UI/UX"
                            title="Crypto Tap Wallet Mobile Apps"
                            content="Secure, fast, and user-friendly crypto wallet for seamless."
                        ></ProjectCard1>
    
                        <div className="agk-button  text-center text-lg-start mb-60 pf_fadeup">
                            <Link href="/project/project-details" className="theme-btn style-one">
                                <span className="text-flip">
                                    <span className="text">View All</span>
                                    <span className="text">View All</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project1;