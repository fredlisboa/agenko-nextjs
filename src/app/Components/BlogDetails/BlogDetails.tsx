import Image from 'next/image';
import React from 'react';

const BlogDetails = () => {
    return (
            <section className="agenko-blog-detils pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            
                            <div className="blog-details-wrapper">
                                <div className="agenko-post-item pf_fadeup">
                                    <div className="main-post">
                                        <div className="post-thumbnail">
                                        <Image src="/assets/images/pages/blog/blog-single1.jpg" alt="img" width={777} height={605}   />
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta">
                                            <span><i className="bi bi-person"></i>Alex Mika</span>
                                        <span><i className="bi bi-calendar-fill"></i>Dec12, 2024</span>
                                        <span><i className="bi bi-chat"></i>5 Comment</span>
                                            </div>
                                            <h4 className="post-title">Medical Mobile Design & Development </h4>
                                            <p>Creating user-friendly medical mobile apps with innovative designs and seamless functionality to enhance healthcare accessibility and patient engagement. Designing and developing innovative medical mobile apps with user-friendly interfaces, advanced features, and secure functionality to enhance healthcare delivery, streamline processes, and improve patient engagement and satisfaction</p>
                                            <p>A versatile template crafted to narrate the journey of your project, detailing its origins, inspirations, and key influences. Functionality to enhance healthcare delivery, streamline processes, and improve patient engagement and satisfaction</p>
                                            <blockquote>
                                                <div className="icon"><i className="flaticon-inverted-commas"></i></div>
                                                <h4>Agenko Agency transformed our business with their innovative strategies and dedicated support. Their team understood </h4>
                                                <div className="author-info">
                                                    <h4>Mr. David Liam</h4>
                                                    <h5>CEO & Founder</h5>
                                                </div>
                                            </blockquote>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="block-image mb-40">
                                                    <Image src="/assets/images/pages/blog/blog-single2.jpg" alt="img" width={377} height={377}   />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="block-image mb-40">
                                                    <Image src="/assets/images/pages/blog/blog-single3.jpg" alt="img" width={377} height={377}   />
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <h4>Research & strategy</h4>
                                            <p>Conducting comprehensive research and crafting data-driven strategies to support informed decision-making, streamline operations, and achieve sustainable growth while aligning with organizational goals and market demands.</p>
                                            <ul className="check-list style-one">
                                                <li><i className="bi bi-check2-square"></i>Brand Development</li>
                                                <li><i className="bi bi-check2-square"></i>UX/UI Design</li>
                                                <li><i className="bi bi-check2-square"></i>Front-End Development</li>
                                                <li><i className="bi bi-check2-square"></i>AI Writing</li>
                                                <li><i className="bi bi-check2-square"></i>Shopify Development</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="entry-footer wow fadeInUp">
                                        <div className="tag-links">
                                            <span>Tag:</span>
                                            <a href="#">Design</a>
                                            <a href="#">Creative</a>
                                            <a href="#">Agency</a>
                                        </div>
                                        <div className="social-share">
                                            <span>share:</span>
                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                                            <a href="#"><i className="bi bi-linkedin"></i></a>
                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="comments-area mt-60 mb-50 pf_fadeup">
                                    <h3 className="comments-title">Popular Comments</h3>
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment">
                                                <div className="comment-avatar">
                                                <Image src="/assets/images/pages/blog/comment1.jpg" alt="img" width={100} height={100}   />
                                                </div>
                                                <div className="comment-wrap">
                                                    <div className="comment-author-content">
                                                        <span className="author-name">Mr. David Liam</span>
                                                        <p>Streamlining processes with an optimized workflow that enhances efficiency, fosters collaboration, and ensures seamless execution </p>
                                                        <a href="#" className="reply">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="comment">
                                                <div className="comment-avatar">
                                                <Image src="/assets/images/pages/blog/comment2.jpg" alt="img" width={100} height={100}   />
                                                </div>
                                                <div className="comment-wrap">
                                                    <div className="comment-author-content">
                                                        <span className="author-name">Michel holder</span>
                                                        <p>Streamlining processes with an optimized workflow that enhances efficiency, fosters collaboration, and ensures </p>
                                                        <a href="#" className="reply">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="agenko-contact-form style-two mb-30 pf_fadeup">
                                    <h3 className="comments-heading mb-25">Leave a Comments</h3>
                                    <form className="comment-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" className="form_control" placeholder="Enter Name" name="email"  />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form_control" placeholder="Email Address" name="email"  />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form_control" rows={4} placeholder="Write Comments"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <button className="theme-btn style-two">Post Your Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            
                            <div className="sidebar-widget-area">
                                
                                <div className="sidebar-widget sidebar-search-widget mb-30 pf_fadeup">
                                    <div className="widget-content">
                                        <h4 className="sidebar-title">Search</h4>
                                        <form>
                                            <div className="form-group">
                                                <input type="search" className="form_control" placeholder="Search here..." name="search" required />
                                                <button className="search-btn"><i className="bi bi-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                
                                <div className="sidebar-widget sidebar-category-widget mb-30 pf_fadeup">
                                    <div className="widget-content">
                                        <h4 className="sidebar-title">Categories</h4>
                                        <ul className="widget-nav">
                                            <li><a href="#">Creative Agency <span>(05)</span></a></li>
                                            <li><a href="#">Modern Agency <span>(03)</span></a></li>
                                            <li><a href="#">Business <span>(06)</span></a></li>
                                            <li><a href="#">Marketing  <span>(08)</span></a></li>
                                            <li><a href="#">Video Tutorial  <span>(10)</span></a></li>
                                            <li><a href="#">Design Agency  <span>(12)</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="sidebar-widget sidebar-post-widget mb-30 pf_fadeup">
                                    <div className="widget-content">
                                        <h4 className="sidebar-title">Recent Post</h4>
                                        <ul className="recent-post-list">
                                            <li className="post-thumbnail-content">
                                            <Image src="/assets/images/pages/blog/post-thumb1.jpg" alt="img" width={100} height={110}   />
                                                <div className="post-title-date">
                                                    <span><a href="#">Website</a></span>
                                                    <h6><a href="#">Flavorful Fusion: Exploring the Art
                                                        of culinary blending</a></h6>
                                                </div>
                                            </li>
                                            <li className="post-thumbnail-content">
                                            <Image src="/assets/images/pages/blog/post-thumb2.jpg" alt="img" width={100} height={110}   />
                                                <div className="post-title-date">
                                                    <span><a href="#">Dashboard</a></span>
                                                    <h6><a href="#">Chef Spotlight: Behind the scenes
                                                        of culinary mastery</a></h6>
                                                </div>
                                            </li>
                                            <li className="post-thumbnail-content">
                                            <Image src="/assets/images/pages/blog/post-thumb3.jpg" alt="img" width={100} height={110}   />
                                                <div className="post-title-date">
                                                    <span><a href="#">Mobile App</a></span>
                                                    <h6><a href="#">Time-Honored recipes with a 
                                                        modern twist</a></h6>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="sidebar-widget sidebar-tag-widget pf_fadeup mb-30">
                                    <div className="widget-content">
                                        <h4 className="sidebar-title">Popular Tags</h4>
                                        <div className="tagcloud">
                                            <a href="#">Design</a>
                                            <a href="#">Creative</a>
                                            <a href="#">Modern</a>
                                            <a href="#">Digital</a>
                                            <a href="#">Minimal</a>
                                            <a href="#">Agenko</a>
                                            <a href="#">Business</a>
                                            <a href="#">Financial</a>
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

export default BlogDetails;