import Image from 'next/image';
import React from 'react';

const ProjectDetails = () => {
    return (
            <section className="agenko-project-details pt-130 pb-90">
                <div className="container">
                    <div className="project-details-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="agenko-image text-center mb-50 pf_fadeup">
                                <Image src="/assets/images/pages/project/project-single1.jpg" alt="img" width={1290} height={500}   />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="agenko-content-box mb-50 pf_fadeup">
                                    <h2>Creative Javanese a Lead Designer & Mobile</h2>
                                    <p>We offer a range of specialized services designed to address your unique business <br/> challenges. innovative strategies tailored solutions, our expertise ensures.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="project-duration-box pf_fadeup">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="agenko-info-box mb-30">
                                                <span className="title">Client</span>
                                                <h3>Envato</h3>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="agenko-info-box mb-30">
                                                <span className="title">Category</span>
                                                <h3>Web Design</h3>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="agenko-info-box mb-30">
                                                <span className="title">Start Date</span>
                                                <h3>07-02-2025</h3>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="agenko-info-box mb-30">
                                                <span className="title">End Date</span>
                                                <h3>22-02-2025</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="agenko-content-box pf_fadeup">
                                    <p>Creative Javanese is a skilled Lead Designer specializing in mobile design, blending artistic innovation with functional excellence. With expertise in user-centered design and mobile optimization, they craft intuitive, visually striking interfaces. Their approach combines cultural richness with modern trends, delivering seamless digital experiences that resonate with users and meet project goals.</p>
                                    <h3>The Challenge</h3>
                                    <p>The Challenge is a dynamic test of skill, creativity, and determination, pushing individuals or teams to achieve ambitious goals. It fosters growth through innovative problem-solving, resilience, and collaboration. With high stakes and clear objectives, participants navigate complex scenarios, unlocking potential and driving success while overcoming obstacles to deliver impactful results in personal or professional domains.</p>
                                    <p>Whether in a professional or personal context, The Challenge is designed to inspire growth, spark collaboration, and unlock hidden potential. It tests adaptability, strategic thinking, and teamwork, fostering an environment where participants can learn, improve, and excel. By embracing uncertainty and tackling high-stakes objectives, </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="agenko-image mb-40">
                                            <Image src="/assets/images/pages/project/project-single2.jpg" alt="img" width={630} height={700}   />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="agenko-image mb-40">
                                            <Image src="/assets/images/pages/project/project-single3.jpg" alt="img" width={630} height={700}   />
                                            </div>
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

export default ProjectDetails;