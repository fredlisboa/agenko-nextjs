import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
            <footer className="agenko-footer gray-dark pt-130 primary-black-bg">
                    <div className="shape shape-one"><span><Image className="rotate360" src="/assets/images/creative-agency/footer/ciranda.webp" alt="Shape" width={200} height={200} /></span></div>
                    <div className="shape shape-two"><span><Image className="rotate360" src="/assets/images/creative-agency/footer/element2.png" alt="Shape" width={130} height={130} /></span></div>
                    <div className="shape shape-blur_one"><span></span></div>
                    <div className="shape shape-blur_two"><span></span></div>
                    
                    <div className="footer-widget-area pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    
                                    <div className="footer-widget footer-about-widget mb-0 pf_fadeup">
                                        <div className="footer-content">
                                            <div className="footer-logo">
                                                 
                                                <a href="#"> <Image src="/assets/images/digital-agency/footer/marca-sd-qd.svg" alt="img" width={300} height={200}   /></a>
                                            </div>
                                            {/* <p>Realçando sua beleza, respeitando sua <span>identidade.</span></p> */}
                                            {/* <form>
                                                <div className="form-group">
                                                    <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                                                    <label><i className="far fa-envelope"></i></label>
                                                    <button className="theme-btn style-two">Subscribe</button>
                                                </div>
                                            </form> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    
                                    <div className="footer-widget footer-contact-info-widget mb-40 pf_fadeup">
                                        <div className="footer-content mb-25">
                                            <h4 className="widget-title">Endereço</h4>
                                            <p><a href="https://share.google/pcuCYJHPmM1pRPwpc" target="_blank" rel="noopener noreferrer">Rua 5, 691, Térreo<br />Ed. The Prime Tam. Office<br />Praça Tamandaré<br />Setor Oeste, Goiânia-GO</a></p>
                                        </div>
                                        <div className="footer-content mb-25">
                                            <h4 className="widget-title">Responsável Técnico</h4>
                                            <p>STUDIO DENTAL COMERCIO DE HIGIENE ORAL LTDA<br  />
                                            CNPJ 46.125.234/0001-66<br  />
                                            EPAO CRO/GO 3906 <br  />
                                            R.T: KRONER MACHADO COSTA | CRO/GO 15656</p>
                                        </div>
                                        {/* <div className="footer-content mb-25">
                                            <h4 className="widget-title">Sub-Address</h4>
                                            <p>200 Santa Monica Pier, Santa Monica, CA 90401</p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-5">
                                            
                                            <div className="footer-widget footer-nav-widget mb-40 pf_fadeup">
                                                <div className="footer-content mb-35">
                                                    <h4 className="widget-title">Links Úteis</h4>
                                                    <ul className="footer-nav">
                                                        <li>
                                                            <Link href="#about">Sobre</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#who-we-are">Compromisso</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#services">Especialidades</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#process">Jornada</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#testimonials">Depoimentos</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#cases">Casos</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#faq">FAQ</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#redes-sociais">Redes Sociais</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/contact">Contato</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                           
                                            <div className="footer-widget footer-contact-widget mb-40 pf_fadeup">
                                                <div className="footer-content">
                                                    <h4 className="widget-title">Contato</h4>
                                                    <div className="agenko-iconic-box style-three mb-30">
                                                        <div className="icon">
                                                        <i className="bi bi-envelope"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h6>Email</h6>
                                                            <p><a href="contato@studiodental.dental">contato@studiodental.dental</a></p>
                                                        </div>
                                                    </div>
                                                    <div className="agenko-iconic-box style-three">
                                                        <div className="icon">
                                                        <i className="bi bi-whatsapp"></i>
                                                        </div>
                                                        <div className="content">
                                                            <h6>WhatsApp</h6>
                                                            <p><a href="https://wa.me/5562982433773?text=Ol%C3%A1!%20Vim%20pelo%20site%20HOF%20Studio%20Dental%20Dra%20Gabriella%20Lisboa%20e%20acabei%20de%20preencher%20o%20formul%C3%A1rio.%20Gostaria%20de%20continuar%20meu%20atendimento." target="_blank" rel="noopener noreferrer">+55 62 9 8243-3773</a></p>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                   
                                    <div className="copyright-text">
                                        <p>&copy; 2025 <span>StudioDental</span></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    
                                    <div className="copyright-nav">
                                        <ul>
                                            <li><a href="/termos-de-uso" target="_blank" rel="noopener noreferrer">Termos de Uso</a></li>
                                            <li><a href="/politica-privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a></li>
                                            <li><a href="/contact">Contato</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    );
};

export default Footer;