import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog4 = () => {

    const blogContent = [
        {img:'/assets/images/pages/blog/blog1.jpg', title:'Medical mobile app design and development', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        {img:'/assets/images/pages/blog/blog2.jpg', title:'Sales management mobile app design solutions', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        {img:'/assets/images/pages/blog/blog3.jpg', title:'Financial and wallet website design services', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        {img:'/assets/images/pages/blog/blog4.jpg', title:'Sales Team Productivity Starts with Great App Design', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        {img:'/assets/images/pages/blog/blog5.jpg', title:'Optimizing Sales Workflows with Effective App UI/UX Design', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        {img:'/assets/images/pages/blog/blog6.jpg', title:'Boost Sales Efficiency with Smart Mobile App Design Strategies', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
      ]; 


    return (
            <section className="agenko-blog-grid pt-130 pb-80">
                <div className="container">
                    <div className="row">
                    {blogContent.map((item, i) => (
                        <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                            <div className="agenko-blog-item style-four mb-40 pf_fadeup">
                                <div className="post-thumbnail">
                                <Image src={item.img} alt="img" width={414} height={323}   />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span><i className="bi bi-person"></i>Alex Mika</span>
                                        <span><i className="bi bi-calendar-fill"></i>Dec12, 2024</span>
                                        <span><i className="bi bi-chat"></i>5 Comment</span>
                                    </div>
                                    <h4 className="title"><Link href="/blog/blog-details">{item.title}</Link></h4>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                        ))} 
                    </div>

                </div>
            </section>
    );
};

export default Blog4;