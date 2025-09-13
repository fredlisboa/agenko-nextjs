import React from 'react';
import ProjectCard2 from '../Card/ProjectCard2';
import Link from 'next/link';

const Project3 = () => {
    return (
            <section className="agk-project pt-85 pb-100">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            
                            <div className="section-title mb-55 pf_fadeup">
                                <span className="sub-title">Complete work</span>
                                <h2>We are leading Innovative
                                    marketing agency.</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            
                            <div className="agk-button float-lg-end mb-60 pf_fadeup">
                                <Link href="/project" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">LEARN MORE</span>
                                        <span className="text">LEARN MORE</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ProjectCard2
                                addClass="agenko-project-item style-three mb-50 pf_fadeup"
                                img="/assets/images/marketing-agency/project/project1.jpg"
                                cat1="Website"
                                cat2="Landing Page"
                                cat3="UI/UX"
                                title="Daily Schedule Mobile Apps"
                                content="A daily schedule app designed to help users efficiently plan, organize, activities."
                            ></ProjectCard2>
                            <ProjectCard2
                                addClass="agenko-project-item style-three mb-50 pf_fadeup"
                                img="/assets/images/marketing-agency/project/project2.jpg"
                                cat1="Website"
                                cat2="Landing Page"
                                cat3="UI/UX"
                                title="Rawr Studio Website"
                                content="Rawr Studio is a creative agency specializing in bold, innovative designs."
                            ></ProjectCard2>
                        </div>
                        <div className="col-lg-6">
                        <ProjectCard2
                                addClass="agenko-project-item style-three mt-50 pf_fadeup"
                                img="/assets/images/marketing-agency/project/project3.jpg"
                                cat1="Website"
                                cat2="Landing Page"
                                cat3="UI/UX"
                                title="Nexus Production Landing Page"
                                content="A production company delivering innovative solutions for film, video, and media."
                            ></ProjectCard2>                            
                        <ProjectCard2
                                addClass="agenko-project-item style-three mt-50 pf_fadeup"
                                img="/assets/images/marketing-agency/project/project4.jpg"
                                cat1="Website"
                                cat2="Landing Page"
                                cat3="UI/UX"
                                title="Financial Claim Dashboard"
                                content="A dashboard designed for tracking, managing, and streamlining financial claims."
                            ></ProjectCard2>
                            
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Project3;