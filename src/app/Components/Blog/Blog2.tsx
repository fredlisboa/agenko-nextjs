"use client"
import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';
import Image from 'next/image';

const Blog2 = () => {

    const blogContent = [
        {img:'/assets/images/digital-agency/blog/blog1.jpg', title:'How to Start a Blog Beginner Best',authorImg:'/assets/images/digital-agency/blog/author1.jpg'},
        {img:'/assets/images/digital-agency/blog/blog1.jpg', title:'How to Start a Blog Beginner Best',authorImg:'/assets/images/digital-agency/blog/author2.jpg'},
        {img:'/assets/images/digital-agency/blog/blog1.jpg', title:'How to Start a Blog Beginner Best',authorImg:'/assets/images/digital-agency/blog/author1.jpg'},
      ]; 

      useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <section id="blog" className="agk-blogs gray-dark pt-80 pb-30">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    
                    <div className="section-title mb-50 pf_fadeup">
                        <span className="sub-title">Latest Blog</span>
                        <h2>Our Global Client</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    
                    <div className="agk-button float-lg-end mb-60 pf_fadeup">
                        <a href="blog-grid.html" className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">View All Blogs</span>
                                <span className="text">View All Blogs</span>
                            </span>
                        </a>
                    </div>    
                </div>
            </div>
            <div className="row">
            {blogContent.map((item, i) => (
                <div key={i} className="col-lg-12">
                    <div className="agenko-blog-item style-one mb-40 pf_fadeup">
                        <div className="post-hover-wrap bg_cover" data-background={item.img}>
                            <div className="agk-button">
                                <Link href="/blog/blog-details" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">Read More</span>
                                        <span className="text">Read More</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="post-inner-wrap">
                            <div className="author-item">
                                <div className="author-thumb">
                                    <Image src={item.authorImg} alt="Author Image" width={50} height={50} />
                                </div>
                                <div className="author-info">
                                    <span>Posted By</span>
                                    <h4>Mr. David Liam</h4>
                                </div>
                            </div>
                            <div className="post-content">
                                <h3 className="title"><Link href="/blog/blog-details">{item.title}</Link></h3>
                                <div className="post-categories">
                                    <a href="#">Website</a>
                                    <a href="#">Landing Page</a>
                                </div>
                            </div>
                            <div className="post-date">
                            <i className="bi bi-calendar-check"></i>
                                <a href="#">01 January 2025</a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}


            </div>
        </div>
    </section>
    );
};

export default Blog2;