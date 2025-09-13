"use client"
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const Testimonial3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

    const testimonialContent = [
        {subtitle:'CEO & Founder', title:'Ms. Alex Mika', content:'Binorly Agency completely transformed our online presence! Their exceptional website development expertise to beyond expectations, creating a visually stunning and user-friendly website. The team is attention to detail and commitment to!'},
        {subtitle:'CEO & Founder', title:'Ms. Alex Mika', content:'Binorly Agency completely transformed our online presence! Their exceptional website development expertise to beyond expectations, creating a visually stunning and user-friendly website. The team is attention to detail and commitment to!'},
      ]; 

    return (
                    <section className="agenko-testimonial pt-130 pb-130">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    
                                    <div className="section-title mb-45 pf_fadeup">
                                        <span className="sub-title">Client Feedback</span>
                                        <h2>Hear from Our Satisfied 
                                            Clients Feedback</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                   
                                    <div className="text-box mb-45 pf_fadeup">
                                        <p>Discover how our clients achieved success with Binorly Agency expert <span>web design and development</span>, delivering outstanding digital solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    
                                    <div className="agenko-image-box agenko-rotate-image mb-50 pf_fadeup">
                                        <div className="agenko-image">
                                        <Image src="/assets/images/marketing-agency/testimonial/testimonial1.jpg" alt="img" width={432} height={490}   />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    
                                    <div className="testimonial-slider mb-50 pf_fadeup">

                                    <Slider {...settings}>
                                    {testimonialContent.map((item, i) => (
                                        <div key={i} className="agenko-testimonial-item style-three">
                                            <div className="testimonial-content">
                                                <ul className="ratings">
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                </ul>
                                                <p>{item.content}</p>
                                                <div className="author-item">
                                                    <div className="author-info">
                                                        <h4>{item.title}</h4>
                                                        <span className="position">{item.subtitle}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </Slider>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    );
};

export default Testimonial3;