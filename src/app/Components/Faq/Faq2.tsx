"use client"
import React, { useEffect, useRef, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import Link from 'next/link';

const Faq2 = () => {

       const faqContent = [
            {title:'What services does your agency provide?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:'Can I update the website content myself?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:'How does the web design process work?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:' How long will my project take to complete?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:'Do you offer website maintenance and support?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:'Can you redesign my existing website?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:'Can I update the website content myself?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:'How does the web design process work?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:' How long will my project take to complete?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:'Do you offer website maintenance and support?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:'Can I update the website content myself?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:'How does the web design process work?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
            {title:' How long will my project take to complete?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},                        
          ]; 
    
          const accordionContentRef = useRef(null);
          const [openItemIndex, setOpenItemIndex] = useState(-1);
          const [firstItemOpen, setFirstItemOpen] = useState(true);
        
          const handleItemClick = index => {
            if (index === openItemIndex) {
              setOpenItemIndex(-1);
            } else {
              setOpenItemIndex(index);
            }
          };
          useEffect(() => {
            if (firstItemOpen) {
              setOpenItemIndex(0);
              setFirstItemOpen(false);
            }
          }, [firstItemOpen]);

          useEffect(() => {
            loadBackgroudImages();
        }, []);

    return (
        <section className="agenko-faqs pt-130 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        
                        <div className="agenko-accordion mb-30" id="accordionOne">
                        {faqContent.map((item, index) => (
                            <div key={index} className={`agenko-accordion-item mb-20 pf_fadeup ${index === openItemIndex ? "active" : "" }`} >
                                <div onClick={() => handleItemClick(index)} className="accordion-header" role="button" tabIndex={0} onKeyDown={() => handleItemClick(index)} aria-expanded={index === openItemIndex}>
                                    <h6 className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse1">
                                    {item.title}
                                    </h6>
                                </div>
                                <div ref={accordionContentRef} id="collapse1" className="accordion-collapse accordion-content" data-bs-parent="#accordionOne">
                                    <div className="accordion-content">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                             ))}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-widget-area">
                            
                            <div className="sidebar-widget 2 mb-30 wow fadeInDown">
                                <div className="widget-content">
                                    <h4 className="sidebar-title">Get In Touch</h4>
                                    <p className="mb-15">Contact for support inquiries & collaboration</p>
                                    <form className="agenko-contact-form style-one">
                                        <div className="form-group">
                                            <input type="text" className="form_control" placeholder="Name" name="name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form_control" placeholder="Email" name="email" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form_control" placeholder="Subject" name="subject" required />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form_control" placeholder="Message" name="message" rows={3}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button className="theme-btn style-two">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            
                            <div className="sidebar-widget sidebar-banner-widget mb-30 wow fadeInDown">
                        <div className="widget-content bg_cover" data-background="/assets/images/pages/blog/post-banner.jpg">
                                    <div className="content">
                                        <h3>Expert & Experienced Business Services.</h3>
                                        <Link href="/contact" className="theme-btn style-two">Contact us</Link>
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

export default Faq2;