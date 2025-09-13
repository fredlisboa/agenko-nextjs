import Link from 'next/link';
import React from 'react';

const ProjectCard3 = ({img,title,content} : any ) => {
    return (
        <div className="agenko-project-item style-four mb-30 pf_fadeup">
        <div className="thumbnail">
            <img src={img} alt="Project Image" />
            <div className="hover-content">
                <div className="content">
                    <a className="category-btn" href="#">{title}</a>
                    <h4><Link href="/project/project-details">{content}</Link></h4>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProjectCard3;