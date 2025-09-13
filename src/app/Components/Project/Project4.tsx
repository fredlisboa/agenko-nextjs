import React from 'react';
import ProjectCard3 from '../Card/ProjectCard3';

const Project4 = () => {
    return (
        <section className="agenko-project pt-130 pb-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <ProjectCard3
                                    img="/assets/images/pages/project/project1.jpg"
                                    title="Web Design"
                                    content="Creative Javanese a Lead Designer & Mobile"
                                ></ProjectCard3>
                            </div>
                            <div className="col-lg-6">
                            <ProjectCard3
                                    img="/assets/images/pages/project/project2.jpg"
                                    title="Web Design"
                                    content="Creative Javanese a Lead Designer & Mobile"
                                ></ProjectCard3>
                            </div>
                            <div className="col-lg-6">
                            <ProjectCard3
                                    img="/assets/images/pages/project/project3.jpg"
                                    title="Web Design"
                                    content="Creative Javanese a Lead Designer & Mobile"
                            ></ProjectCard3>
                            </div>
                            <div className="col-lg-12">
                            <ProjectCard3
                                    img="/assets/images/pages/project/project4.jpg"
                                    title="Web Design"
                                    content="Creative Javanese a Lead Designer & Mobile"
                            ></ProjectCard3>                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                            <ProjectCard3
                                    img="/assets/images/pages/project/project5.jpg"
                                    title="Web Design"
                                    content="Creative Javanese a Lead Designer & Mobile"
                            ></ProjectCard3>                                 
                            </div>
                            <div className="col-lg-6">
                            <ProjectCard3
                                    img="/assets/images/pages/project/project6.jpg"
                                    title="Web Design"
                                    content="Creative Javanese a Lead Designer & Mobile"
                            ></ProjectCard3>                                
                            </div>
                            <div className="col-lg-12">
                            <ProjectCard3
                                    img="/assets/images/pages/project/project7.jpg"
                                    title="Web Design"
                                    content="Creative Javanese a Lead Designer & Mobile"
                            ></ProjectCard3>                                 
                            </div>
                            <div className="col-lg-12">
                            <ProjectCard3
                                    img="/assets/images/pages/project/project8.jpg"
                                    title="Web Design"
                                    content="Creative Javanese a Lead Designer & Mobile"
                            ></ProjectCard3>                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project4;