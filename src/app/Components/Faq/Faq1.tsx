"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Faq1 = () => {

    const faqContent = [
        {title:'What services does your agency provide?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
        {title:'Can I update the website content myself?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
        {title:'How does the web design process work?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
        {title:' How long will my project take to complete?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
        {title:'Do you offer website maintenance and support?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
        {title:'Can you redesign my existing website?', content:'We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.'},
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

    return (
<section className="agk-faq pt-130 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    
                                    <div className="section-title mb-50 pf_fadeup">
                                        <span className="sub-title">FAQ</span>
                                        <h2>Got Questions? We’ve Got Answers</h2>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                   
                                    <div className="faq-big-text">Faq’s</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    
                                    <div className="agk-image-box mb-50 pf_fadeup">
                                        <div className="agk-image">
                                        <Image src="/assets/images/digital-agency/faq/faq1.jpg" alt="img" width={550} height={555}   />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="agk-content-box mb-30">
                                       
                                        <div className="agk-accordion" id="accordionOne">
                                        {faqContent.map((item, index) => (
                                            <div key={index} className={`agenko-accordion-item mb-20 pf_fadeup ${index === openItemIndex ? "active" : "" }`} >
                                                <div onClick={() => handleItemClick(index)} className="accordion-header">
                                                    <h6  className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true">
                                                    {item.title}
                                                    </h6>
                                                </div>
                                                <div ref={accordionContentRef}  id="collapse1" className="accordion-collapse accordion-content" data-bs-parent="#accordionOne">
                                                    <div className="accordion-content">
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    );
};

export default Faq1;