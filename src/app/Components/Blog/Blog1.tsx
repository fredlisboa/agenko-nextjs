import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog1 = () => {
    return (
        <section className="agk-blog pt-130 pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        
                        <div className="section-title mb-50 text-lg-start text-center pf_fadeup">
                            <span className="sub-title">Latest Articles</span>
                            <h2>Stay Updated with Our Recent Articles</h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        
                        <div className="agk-button float-lg-end mb-60 text-lg-end text-center pf_fadeup">
                            <Link href="/blog" className="theme-btn style-one">
                                <span className="text-flip">
                                    <span className="text">View All Blogs</span>
                                    <span className="text">View All Blogs</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                       
                        <div className="agenko-blog-item style-two mb-40 pf_fadeup">
                            <div className="post-thumbnail">
                            <Image src="/assets/images/creative-agency/blog/blog1.jpg" alt="img" width={260} height={260}   />
                            </div>
                            <div className="post-content">
                                <div className="post-categories">
                                    <a href="#">Website</a>
                                </div>
                                <h4 className="title"><Link href="/blog/blog-details">MKT Gency for your online 
                                    business Plane.</Link></h4>
                                <p>Strategic marketing agency boosting to your online business success.</p>
                                <a href="#">15 Apr, 2024</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        
                        <div className="agenko-blog-item style-two mb-40 pf_fadeup">
                            <div className="post-thumbnail">
                            <Image src="/assets/images/creative-agency/blog/blog2.jpg" alt="img" width={260} height={260}   />
                            </div>
                            <div className="post-content">
                                <div className="post-categories">
                                    <a href="#">Website</a>
                                </div>
                                <h4 className="title"><Link href="/blog/blog-details">Meeting Collaboration for
                                    your business.</Link></h4>
                                <p>Strategic marketing agency boosting to your online business success.</p>
                                <a href="#">15 Apr, 2024</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog1;