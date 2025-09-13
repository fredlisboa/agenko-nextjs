"use client"
import React from 'react';
import Slider from 'react-slick';

const Brand3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };  

    const brandContent = [
        {img:'/assets/images/creative-agency/client/client1.png'},
        {img:'/assets/images/creative-agency/client/client2.png'},
        {img:'/assets/images/creative-agency/client/client3.png'},
        {img:'/assets/images/creative-agency/client/client4.png'},
        {img:'/assets/images/creative-agency/client/client5.png'},
        {img:'/assets/images/creative-agency/client/client6.png'},
        {img:'/assets/images/digital-agency/client/client7.png'},
        {img:'/assets/images/digital-agency/client/client8.png'},
        {img:'/assets/images/digital-agency/client/client9.png'},
        {img:'/assets/images/digital-agency/client/client10.png'},
      ];   


    return (
                <section className="agk-company">
                        <div className="container">
                            <div className="company-slider-wrapper">
                                <svg width="1293" height="6" viewBox="0 0 1293 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 3L5 5.88675V0.113249L0 3ZM1287.33 3C1287.33 4.47276 1288.53 5.66667 1290 5.66667C1291.47 5.66667 1292.67 4.47276 1292.67 3C1292.67 1.52724 1291.47 0.333333 1290 0.333333C1288.53 0.333333 1287.33 1.52724 1287.33 3ZM4.5 3.5H1290V2.5H4.5V3.5Z" fill="#313131"/>
                                    </svg>
                                    
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="company-slider pt-40 pb-30">
                                        <Slider {...settings}>
                                        {brandContent.map((item, i) => (
                                            <div key={i} className="company-item">
                                                <div className="agk-image">
                                                    <img src={item.img} alt="Company" />
                                                </div>
                                            </div>
                                            ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                <svg width="1293" height="6" viewBox="0 0 1293 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1293 3L1288 0.113249V5.88675L1293 3ZM5.66663 3C5.66663 1.52724 4.47266 0.333333 3 0.333333C1.52722 0.333333 0.333252 1.52724 0.333252 3C0.333252 4.47276 1.52722 5.66667 3 5.66667C4.47266 5.66667 5.66663 4.47276 5.66663 3ZM1288.5 2.5L3 2.5V3.5L1288.5 3.5V2.5Z" fill="#313131"/>
                                    </svg>
                                    
                            </div>
                        </div>
                </section>
    );
};

export default Brand3;