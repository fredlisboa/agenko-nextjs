import Link from 'next/link';
import React from 'react';

const ProjectCard1 = ({img,cat1,cat2,cat3,title,content} : any ) => {
    return (
        <div className="agenko-project-item style-two mb-60 pf_fadeup">
        <div className="thumbnail">
            <img src={img} alt="Project Image" />
            <div className="hover-content">
                <div className="project-categories">
                    <a href="#">{cat1}</a>
                    <a href="#">{cat2}</a>
                    <a href="#">{cat3}</a>
                </div>
            </div>
        </div>
        <div className="content">
            <h4 className="title"><Link href="/project/project-details">{title}</Link></h4>
            <p>{content}</p>
        </div>
    </div>
    );
};

export default ProjectCard1;