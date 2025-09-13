"use client"
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const Testimonial2 = () => {

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
        {subtitle:'CEO & Founder', title:'Ms. Alex Mika', content:'Binorly Agency completely transformed our online presence! Their exceptional website development expertise went beyond expectations, creating a visually stunning and user-friendly website.'},
        {subtitle:'CEO & Founder', title:'Ms. Alex Mika', content:'Binorly Agency completely transformed our online presence! Their exceptional website development expertise went beyond expectations, creating a visually stunning and user-friendly website.'},
      ]; 

    return (
            <section className="agk-testimonial gray-dark pt-130 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center mb-50 pf_fadeup">
                                <span className="sub-title">Testimonials</span>
                                <h2>Success Stories From Around the Globe</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            
                            <div className="agk-image-box mb-50 pf_fadeup">
                                <div className="agk-image">
                                <Image src="/assets/images/digital-agency/testimonial/testimonial_img1.jpg" className="animated-image" alt="img" width={524} height={509}   />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testimonial-wrapper mb-50 pf_fadeup">
                                
                                <div className="testimonial-slider">
                                <Slider {...settings}>
                                {testimonialContent.map((item, i) => (                                    
                                    <div key={i} className="agenko-testimonial-item style-one">
                                        <div className="testimonial-content">
                                            <ul className="ratings">
                                            <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                                <li><i className="bi bi-star-fill"></i></li>
                                            </ul>
                                            <p>{item.content}</p>
                                            <div className="author-item-quote d-flex justify-content-between align-items-center">
                                                <div className="author-item">
                                                    <div className="author-info">
                                                        <h4>{item.title}</h4>
                                                        <h5>{item.subtitle}</h5>
                                                    </div>
                                                </div>
                                                <div className="quote">
                                                <i className="bi bi-chat-square-quote-fill"></i>
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
                </div>
            </section>
    );
};

export default Testimonial2;