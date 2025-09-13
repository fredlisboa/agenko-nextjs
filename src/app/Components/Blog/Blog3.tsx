import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog3 = ({paddingTop}) => {
    return (
        <section className={paddingTop}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        
                        <div className="section-title mb-50 pf_fadeup">
                            <span className="sub-title">Latest Blogs </span>
                            <h2>Expert Insights and News
                                Stay Ahead with Us</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="text-box mb-40 pf_fadeup">
                            <p>Explore expert insights, industry trends, and the latest digital news to keep your business informed and ahead of the competition</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        
                        <div className="agenko-blog-item style-three mb-40 pf_fadeup">
                            <div className="post-thumbnail">
                            <Image src="/assets/images/marketing-agency/blog/blog1.jpg" alt="img" width={633} height={510}   />
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span><a href="#">Web Design</a></span>
                                        <span><a href="#">02 Oct, 2025</a></span>
                                    </div>
                                    <h4 className="title"><Link href="/blog/blog-details">Creative Javanese a Lead Designer & Mobile 
                                        UI/UX Core Checklist</Link></h4>
                                </div>
                                <div className="post-button">
                                    <Link href="/blog/blog-details" className="icon-btn style-one"><i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                        <div className="agenko-blog-item style-three mb-40 pf_fadeup">
                            <div className="post-thumbnail">
                            <Image src="/assets/images/marketing-agency/blog/blog2.jpg" alt="img" width={633} height={510}   />
                            </div>
                            <div className="post-content-wrap">
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span><a href="#">Web Design</a></span>
                                        <span><a href="#">02 Oct, 2025</a></span>
                                    </div>
                                    <h4 className="title"><Link href="/blog/blog-details">Defensive Guide to Make a Daily More Creative 
                                        Website Productive Working Flow</Link></h4>
                                </div>
                                <div className="post-button">
                                    <Link href="/blog/blog-details" className="icon-btn style-one"><i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog3;