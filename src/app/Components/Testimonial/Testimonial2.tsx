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
        autoplaySpeed: 8000,        
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
        {subtitle:'Relato de um paciente no <a href="https://share.google/pcuCYJHPmM1pRPwpc" target="_blank" rel="noopener noreferrer"><b>Google</b></a>', title:'Eduardo Henrique Alves', content:'Ótimo, o atendimento é excelente. Realmente tratam o paciente com muito carinho e sabem o que é melhor pra ele(a)! Extremamente profissionais que fazem eu ter um ótimo sorriso! Obrigado'},
        {subtitle:'Relato de um paciente no <a href="https://share.google/pcuCYJHPmM1pRPwpc" target="_blank" rel="noopener noreferrer"><b>Google</b></a>', title:'Sara Miranda', content:'O Segredo da felicidade no trabalho reside em uma palavra: excelência e todos vocês fazem com excelência mesmo, muito amor e principalmente se preocupando com os pacientes!! Os melhores, super indico 😍😍😍'},
        {subtitle:'Relato de um paciente no <a href="https://share.google/pcuCYJHPmM1pRPwpc" target="_blank" rel="noopener noreferrer"><b>Google</b></a>', title:'Ana Clara Salgado', content:'Atendimento de qualidade e precisão. Tudo de primeiro mundo! Lugar lindo, limpo, aconchegante. Profissionais especialistas, resultados impressionantes. Parabéns a toda equipe. ❤️'}
      ]; 

    return (
            <section id="testimonials" className="agk-testimonial pt-80 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center mb-50 pf_fadeup">
                                <span className="sub-title">Depoimentos</span>
                                <h2>Transformações que Cruzam Fronteiras</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
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
                                                        <h5 dangerouslySetInnerHTML={{ __html: item.subtitle }}></h5>
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
                        <div className="col-lg-5">
                            
                            <div className="agk-image-box mb-50 pf_fadeup">
                                <div className="agk-image">
                                <Image src="/assets/images/digital-agency/testimonial/bocao.webp" className="animated-image" alt="img" width={524} height={509} style={{ borderRadius: '10px', overflow: 'hidden', width: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Testimonial2;