"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const Contact = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null); // Ref for the container div
    const overlayRef = useRef<HTMLDivElement>(null); // Ref for the overlay div

    useEffect(() => {
        const container = mapContainerRef.current;
        const overlay = overlayRef.current;

        const handleFirstTouch = () => {
            if (container && overlay) {
                // Find the iframe inside the container and add the .is-active class to it
                const iframe = container.querySelector('.bw-map');
                if (iframe) {
                    iframe.classList.add('is-active');
                }

                // Hide the overlay so the user can now interact with the map
                overlay.classList.add('is-hidden');
                
                // Remove the listener since it's only needed once
                overlay.removeEventListener('touchstart', handleFirstTouch);
            }
        };

        if (overlay) {
            overlay.addEventListener('touchstart', handleFirstTouch, { passive: true });
        }

        return () => {
            if (overlay) {
                overlay.removeEventListener('touchstart', handleFirstTouch);
            }
        };
    }, []);

    return (
        <div>
            <section className="agenko-contact pt-80 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact-info-wrapper mb-50 pf_fadeup">
                                <div className="shape"><span><Image src="/assets/images/pages/shape/world.png" alt="img" width={306} height={647} /></span></div>
                                <ul>
                                    <li>
                                        <div className="phone"><a href="https://wa.me/5562982433773?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20acabei%20de%20preencher%20o%20formul%C3%A1rio.%20Gostaria%20de%20continuar%20meu%20atendimento." target="_blank" rel="noopener noreferrer">+55 (62) 9 8243-3773</a></div>
                                    </li>
                                    <li>
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Endereço</h3>
                                                <p>Rua 5, 691, Térreo</p>
                                                <p>Ed. The Prime Tam. Office</p> 
                                                <p>Praça Tamandaré, Setor Oeste</p>
                                                <p>Goiânia-GO, Brasil</p>
                                                <p>CEP 74.115-060</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Email</h3>
                                                <p><a href="mailto:contato@studiodental.dental">contato@studiodental.dental</a></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="agenko-info-box">
                                            <div className="content">
                                                <h3>Siga-nos</h3>
                                                <div className="social-link">
                                                    <a href="https://www.instagram.com/dragabriellalisboa/" target="_blank" rel="noopener noreferrer">
                                                    <i className="bi bi-instagram"></i></a>
                                                    <a href="https://share.google/pcuCYJHPmM1pRPwpc" target="_blank" rel="noopener noreferrer"><i className="bi bi-google"></i></a>
                                                    <a href="https://tiktok.com/@studiodental.dental" target="_blank" rel="noopener noreferrer"><i className="bi bi-tiktok"></i></a>
                                                    <a href="https://wa.me/5562982433773?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20acabei%20de%20preencher%20o%20formul%C3%A1rio.%20Gostaria%20de%20continuar%20meu%20atendimento." target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="agenko-content-box mb-50 pf_fadeup">
                                <div className="section-title mb-20">
                                    <span className="sub-title">Agende Sua Avaliação</span>
                                    <h2>Seu sorriso ideal começa com um plano.
                                    </h2>
                                </div>
                                <p className="mb-20">Preencha o formulário para agendar sua avaliação gratuita. Nossa equipe de gestão de pacientes entrará em contato em breve para confirmar o <b>melhor horário</b> para você.</p>
                                <form className="agenko-contact-form style-one" id="contact-form" action="contact.php" method="POST">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="Nome*" name="nome" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="WhatsApp*" name="whatsapp" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="Email*" name="email" required />
                                            </div>
                                        </div>
                                        {/* <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="Assunto" name="assunto" required />
                                            </div>
                                        </div> */}
                                        {/* <div className="col-lg-12">
                                            <textarea className="form_control" rows={5} placeholder="Mensagem" name="mensagem"></textarea>
                                        </div> */}
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="theme-btn">Agendar Avaliação Gratuita</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-message"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="agenko-map">
                {/* 1. We wrap the iframe in a container div and attach a ref */}
                <div 
                    ref={mapContainerRef} 
                    className="map-container map-box" 
                    data-aos="fade-up" 
                    data-aos-duration="1300"
                >
                    {/* 2. This is the new invisible overlay */}
                    <div ref={overlayRef} className="map-overlay"></div>

                    <iframe 
                        className="bw-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8665369307814!2d-49.26699702421499!3d-16.683560784088595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef103169657dd%3A0x36fe497b6a5c894f!2sStudio%20Dental%20Odontologia!5e0!3m2!1sen!2sbr!4v1758043960796!5m2!1sen!2sbr"
                        width="100%"
                        height="450" 
                        style={{ border: 0, position: 'relative', zIndex: 0 }} // Added position and z-index
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>        
        </div>
    );
};

export default Contact;