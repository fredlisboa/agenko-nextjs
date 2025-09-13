import Link from 'next/link';
import React from 'react';

const ProjectCard2 = ({addClass,img,cat1,cat2,cat3,title,content} : any ) => {
    return (
        <div className={addClass}>
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
            <h4><Link href="/project/project-details">{title}</Link></h4>
            <p>{content}</p>
        </div>
    </div>
    );
};

export default ProjectCard2;