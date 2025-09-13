"use client"
import React from 'react';
import Slider from 'react-slick';

const Testimonial4 = () => {

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
            <section className="agenko-testimonial-sec pt-120 pb-120 gray-dark">
                <div className="container">
                    
                    <div className="testimonial-slider-three pf_fadeup">
                        
                    <Slider {...settings}>
                    {testimonialContent.map((item, i) => (
                        <div key={i} className="agenko-testimonial-item style-three text-center">
                            <div className="testimonial-content">
                                <ul className="ratings">
                                <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                        <li><i className="bi bi-star-fill"></i></li>
                                </ul>
                                <p>{item.content}</p>
                                <div className="author-card">
                                    <div className="author-info">
                                        <h5>{item.title}</h5>
                                        <span className="position">{item.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        </Slider>                        
                        
  

                    </div>
                </div>
            </section>
    );
};

export default Testimonial4;