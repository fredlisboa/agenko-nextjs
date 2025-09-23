"use client"; // Required for using onClick handlers for smooth scrolling

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    // Function to handle smooth scrolling for in-page anchor links
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const href = e.currentTarget.getAttribute('href');
        
        // This pattern looks for links that start with '/#'
        if (href && href.startsWith('/#')) {
            const targetId = href.substring(2); // Extracts the ID (e.g., 'faq')
            const elem = document.getElementById(targetId);
            
            // If the element exists on the current page, scroll smoothly to it
            if (elem) {
                e.preventDefault(); // Stop the link from navigating away
                elem.scrollIntoView({
                  behavior: "smooth",
                });
            }
            // If the element does NOT exist, do nothing here.
            // Let the Next.js <Link> component handle navigation to the home page,
            // and the browser will automatically jump to the hash after loading.
        }
    };

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
                                         
                                        <Link href="/"> <Image src="/assets/images/digital-agency/footer/marca-sd-qd.svg" alt="img" width={300} height={200} /></Link>
                                    </div>
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
                                                    <Link href="/#about" onClick={handleSmoothScroll}>Sobre</Link>
                                                </li>
                                                <li>
                                                    <Link href="/#who-we-are" onClick={handleSmoothScroll}>Compromisso</Link>
                                                </li>
                                                <li>
                                                    <Link href="/#services" onClick={handleSmoothScroll}>Especialidades</Link>
                                                </li>
                                                <li>
                                                    <Link href="/#process" onClick={handleSmoothScroll}>Jornada</Link>
                                                </li>
                                                <li>
                                                    <Link href="/#testimonials" onClick={handleSmoothScroll}>Depoimentos</Link>
                                                </li>
                                                <li>
                                                    <Link href="/#cases" onClick={handleSmoothScroll}>Casos</Link>
                                                </li>
                                                <li>
                                                    <Link href="/#faq" onClick={handleSmoothScroll}>FAQ</Link>
                                                </li>
                                                <li>
                                                    <Link href="/#redes-sociais" onClick={handleSmoothScroll}>Redes Sociais</Link>
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
                                                    <p><a href="mailto:contato@studiodental.dental">contato@studiodental.dental</a></p>
                                                </div>
                                            </div>
                                            <div className="agenko-iconic-box style-three">
                                                <div className="icon">
                                                    <i className="bi bi-whatsapp"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>WhatsApp</h6>
                                                    <p><a href="/contact#form-section">+55 62 9 8243-3773</a></p>
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
                                    {/* --- FIX IS HERE: Using <a> for new tabs, <Link> for in-app pages --- */}
                                    <li><a href="/termos-de-uso" target="_blank" rel="noopener noreferrer">Termos de Uso</a></li>
                                    <li><a href="/politica-privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a></li>
                                    <li><Link href="/contact">Contato</Link></li>
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