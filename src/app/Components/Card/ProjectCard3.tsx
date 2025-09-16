import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const ProjectCard3 = ({img,title,content} : any ) => {
    return (
        <div className="agenko-project-item style-four mb-30 pf_fadeup">
        <div className="thumbnail">
            <Image src={img} alt="Project Image" width={500} height={300} /> {/* Adjust width and height as needed */}
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