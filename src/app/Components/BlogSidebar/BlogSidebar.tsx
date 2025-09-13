import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogSidebar = () => {

    const blogContent = [
        {img:'/assets/images/pages/blog/blog-standard1.jpg', title:'Boost Sales Efficiency with Smart Mobile App Design Strategies', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        {img:'/assets/images/pages/blog/blog-standard2.jpg', title:'Boost Sales Efficiency with Smart Mobile App Design Strategies', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},
        {img:'/assets/images/pages/blog/blog-standard3.jpg', title:'Boost Sales Efficiency with Smart Mobile App Design Strategies', content:'Creating user-friendly medical mobile apps with innovative designs and seamless.'},

      ];   

    return (
        <section className="agenko-blog-standard pt-130 pb-115">
        <div className="container">
            <div className="row">
                <div className="col-xl-8">
                    
                    <div className="blog-standard-wrapper">
                        
                    {blogContent.map((item, i) => (
                        <div key={i} className="agenko-blog-item style-four mb-45 pf_fadeup">
                            <div className="post-thumbnail">
                            <Image src={item.img} alt="img" width={777} height={605}   />
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
                    ))} 
                        


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
                        
                        <div className="sidebar-widget sidebar-tag-widget mb-30 pf_fadeup">
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

export default BlogSidebar;