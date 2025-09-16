import Image from 'next/image';
// 1. Import useEffect and useRef from React
import React, { useEffect, useRef } from 'react';

const Contact = () => {
    // 2. Create a ref to attach to the iframe element
    const mapRef = useRef<HTMLIFrameElement>(null);

    // 3. Use useEffect to add an event listener after the component mounts
    useEffect(() => {
        const mapIframe = mapRef.current;

        const handleFirstTouch = () => {
            if (mapIframe) {
                mapIframe.classList.add('is-active');
                mapIframe.removeEventListener('touchstart', handleFirstTouch);
            }
        };

        if (mapIframe) {
            mapIframe.addEventListener('touchstart', handleFirstTouch);
        }

        return () => {
            if (mapIframe) {
                mapIframe.removeEventListener('touchstart', handleFirstTouch);
            }
        };
    }, []); // The empty array [] ensures this effect runs only once

    return (
        <div>
            <section className="agenko-contact pt-130 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact-info-wrapper mb-50 pf_fadeup">
                                <div className="shape"><span><Image src="/assets/images/pages/shape/world.png" alt="img" width={306} height={647} /></span></div>
                                <ul>
                                    <li>
                                        <div className="phone"><a href="tel:+5562982433773">+55 (62) 9 8243-3773</a></div>
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
                                                <input type="text" className="form_control" placeholder="Nome" name="nome" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="Email" name="email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form_control" placeholder="Assunto" name="assunto" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className="form_control" rows={5} placeholder="Mensagem" name="mensagem"></textarea>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="theme-btn">Enviar Mensagem</button>
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
                <div className="map-box" data-aos="fade-up" data-aos-duration="1300">
                    <iframe 
                        ref={mapRef} // 4. Attach the ref to the iframe
                        className="bw-map"
                        // 5. Updated to the final, correct, permanent HTTPS embed URL
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.899805988117!2d-49.26127262417757!3d-16.68172744040439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef19313a51669%3A0x2f32b8a73543864d!2sStudio%20Dental%20Odontologia!5e0!3m2!1sen!2sbr!4v1726510769351!5m2!1sen!2sbr"
                        width="100%"
                        height="450" 
                        style={{ border: 0 }} 
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