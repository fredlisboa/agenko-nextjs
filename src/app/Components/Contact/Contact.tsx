import Image from 'next/image';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="agenko-contact pt-130 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            
                            <div className="contact-info-wrapper mb-50 pf_fadeup">
                                <div className="shape"><span><Image src="/assets/images/pages/shape/world.png" alt="img" width={306} height={647}   /></span></div>
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
                        src="http://googleusercontent.com/maps/google.com/10" 
                        width="100%"
                        height="450" 
                        style={{ 
                            border: 0,
                            filter: 'grayscale(1)' // <-- ADD THIS LINE
                        }} 
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