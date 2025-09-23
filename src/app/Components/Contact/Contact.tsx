"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

// --- Extend the global Window interface for tracking scripts ---
declare global {
  interface Window {
    dataLayer: any[];
    KTracking?: { 
      reportConversion: () => void;
    };
  }
}

// --- Define types for the form ---
interface FormData {
    nome: string;
    whatsapp: string;
    email: string;
}

// Added a specific status for the WhatsApp validation error
type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'client-error' | 'client-error-whatsapp';

interface FormMessage {
    type: FormStatus;
    text: string; // text can be used as a fallback
}

// --- WhatsApp Button Component with Advanced Styling ---
// Modified to accept an optional directHref prop
interface WhatsAppButtonProps {
    onWhatsAppClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Made optional
    directHref?: string; // New optional prop for direct link
}

const WhatsAppButton = ({ onWhatsAppClick, directHref }: WhatsAppButtonProps) => {
    // Determine if it should be a direct link or trigger the scroll/glow
    const isDirectLink = !!directHref;
    const commonProps = {
        className: "whatsapp-button-special",
        rel: "noopener noreferrer",
        // The common style for the button/link
    };

    return (
        <>
            <style jsx>{`
                .whatsapp-button-special {
                    display: inline-block;
                    padding: 15px 30px;
                    margin-top: 15px;
                    border-radius: 50px;
                    font-size: 18px;
                    font-weight: bold;
                    text-decoration: none !important;
                    color: white !important;
                    background: linear-gradient(45deg, #25d366, #128c7e, #25d366);
                    background-size: 200% auto;
                    border: 2px solid #ffffff;
                    box-shadow: 0 4px 15px 0 rgba(49, 196, 95, 0.75);
                    transition: all 0.4s ease-in-out;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                    animation: whatsappPulse 2s infinite;
                    cursor: pointer; /* Indicate it's clickable */
                }

                .whatsapp-button-special:hover {
                    background: white;
                    color: #128c7e !important;
                    transform: translateY(-3px) scale(1.05);
                    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.4);
                    animation: none; /* Stop pulsing on hover */
                }
                
                .whatsapp-button-special::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent);
                    transition: all 0.7s;
                    z-index: -1;
                }

                .whatsapp-button-special:hover::before {
                    left: 100%;
                }

                @keyframes whatsappPulse {
                    0% {
                        transform: scale(0.98);
                        box-shadow: 0 0 0 0 rgba(49, 196, 95, 0.7);
                    }
                    70% {
                        transform: scale(1.02);
                        box-shadow: 0 0 0 15px rgba(49, 196, 95, 0);
                    }
                    100% {
                        transform: scale(0.98);
                        box-shadow: 0 0 0 0 rgba(49, 196, 95, 0);
                    }
                }

                .whatsapp-button-special span {
                    margin-right: 10px;
                }
            `}</style>
            {isDirectLink ? (
                <a
                    href={directHref}
                    target="_blank"
                    {...commonProps}
                >
                    <span>📱</span> Abrir WhatsApp Agora
                </a>
            ) : (
                <button
                    type="button" // Prevent form submission if this button is accidentally inside a form
                    onClick={onWhatsAppClick}
                    {...commonProps}
                >
                    <span>📱</span> Abrir WhatsApp Agora
                </button>
            )}
        </>
    );
};


const Contact = () => {
    // --- Refs and State ---
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const formSectionRef = useRef<HTMLDivElement>(null); // Ref for the form section
    const [formData, setFormData] = useState<FormData>({ nome: '', whatsapp: '', email: '' });
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [formMessage, setFormMessage] = useState<FormMessage | null>(null);
    const [isFormGlowing, setIsFormGlowing] = useState(false); // State for form glow effect

    // --- Original WhatsApp direct link ---
    const directWhatsAppLink = "https://wa.me/5562982433773?text=Olá!%20Vim%20pelo%20site%20HOF%20Studio%20Dental%20Dra%20Gabriella%20Lisboa%20e%20acabei%20de%20preencher%20o%20formulário.%20Gostaria%20de%20continuar%20meu%20atendimento.";


    // --- Handlers and Logic ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'whatsapp') {
            const numericValue = value.replace(/\D/g, '').slice(0, 11);
            setFormData((prev) => ({ ...prev, [name]: numericValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Function to scroll to the form and apply a glow effect
    const scrollToFormAndGlow = (e?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement> | React.FormEvent) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault(); // Prevent default link/button behavior
        }

        if (formSectionRef.current) {
            formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Trigger glow animation
            setIsFormGlowing(true);
            
            // Remove the animation class after it finishes
            const animationDuration = 1500; // Matches CSS animation duration
            setTimeout(() => {
                setIsFormGlowing(false);
            }, animationDuration);
        }
    };

    const validateForm = (): boolean => {
        const { nome, whatsapp, email } = formData;
        if (!nome || nome.trim().length < 2) {
            setFormMessage({ type: 'client-error', text: '❌ Por favor, digite seu nome completo.' });
            scrollToFormAndGlow(); // Scroll and glow on validation error
            return false;
        }
        if (!email || !email.includes('@') || !email.includes('.')) {
            setFormMessage({ type: 'client-error', text: '❌ Por favor, digite um email válido.' });
            scrollToFormAndGlow(); // Scroll and glow on validation error
            return false;
        }
        if (!whatsapp || whatsapp.trim().length < 11) {
            setFormMessage({ type: 'client-error-whatsapp', text: '' }); 
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormMessage(null);
        if (!validateForm()) return;
    
        setFormStatus('loading');
        try {
            const marketingParams = sessionStorage.getItem('marketing_params') || 'not_set';
    
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, marketing_params: marketingParams }),
            });
            
            const result = await response.json();
            if (response.ok) {
                setFormStatus('success');
                setFormMessage({ type: 'success', text: result.message });
                try {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        event: 'sd_landing_page_nextjs',
                        lead_name: formData.nome,
                        lead_email: formData.email,
                        lead_whatsapp: formData.whatsapp,
                        form_source: 'nextjs_contact_form_v1',
                        page_url: window.location.href,
                        marketing_params: marketingParams,
                    });
                    
                    if (window.KTracking?.reportConversion) {
                        window.KTracking.reportConversion();
                    }
                } catch (trackingError) {
                    console.warn('⚠️ Error during tracking:', trackingError);
                }
                setTimeout(() => setFormData({ nome: '', whatsapp: '', email: '' }), 500);
            } else {
                setFormStatus('error');
                setFormMessage({ type: 'error', text: result.message || '⚠️ Houve um problema temporário.' });
                scrollToFormAndGlow();
            }
        } catch (error) {
            setFormStatus('error');
            setFormMessage({ type: 'error', text: '⚠️ Houve um problema temporário. Tente novamente.' });
            scrollToFormAndGlow();
        }
    };

    useEffect(() => {
        const container = mapContainerRef.current;
        const overlay = overlayRef.current;

        const handleFirstTouch = () => {
            if (container && overlay) {
                const iframe = container.querySelector('.bw-map');
                if (iframe) {
                    iframe.classList.add('is-active');
                }
                overlay.remove(); 
            }
        };

        if (overlay) {
            overlay.addEventListener('touchstart', handleFirstTouch, { passive: true });
        }

        return () => {};
    }, []);

    // Effect for initial page load with hash
    useEffect(() => {
        if (window.location.hash === '#form-section') {
            setTimeout(() => {
                scrollToFormAndGlow();
            }, 100);
        }
    }, []);

    // Effect for handling hash changes while on the page
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#form-section') {
                scrollToFormAndGlow();
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []); 


    const renderFormMessage = () => {
        if (!formMessage) return null;

        if (formMessage.type === 'client-error-whatsapp') {
            return (
                <div className="message error" style={{ textAlign: 'center', lineHeight: 1.6 }}>
                    <p>❌ Por favor, digite um WhatsApp válido (mín. 11 dígitos).</p>
                    <p>
                        <strong>Ou continue sua jornada:</strong> Preencha o formulário acima para prosseguir ou clique abaixo para falar conosco.
                    </p>
                    <WhatsAppButton directHref={directWhatsAppLink} />
                </div>
            );
        }

        if (formMessage.type === 'success') {
            return (
                <div className="message success" style={{ textAlign: 'center', lineHeight: 1.6 }}>
                    <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
                        <strong>✅ Tudo certo! Recebemos seu contato.</strong>
                    </p>
                    <p>Nossa equipe entrará em contato com você em breve.</p>
                    <p>
                        <strong>Continue sua jornada:</strong> Para falar diretamente conosco, clique no botão abaixo.
                    </p>
                    <WhatsAppButton directHref={directWhatsAppLink} />
                </div>
            );
        }

        if (formMessage.text) {
             return (
                <div className={`message ${formMessage.type.includes('error') ? 'error' : 'server-error'}`}>
                    {formMessage.text}
                </div>
            );
        }

        return null;
    };
    
    const requiredMark = <span style={{ color: 'red', fontWeight: 'bold' }}>*</span>;

    return (
        <div>
            <style jsx>{`
                @keyframes scalePulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                    100% { transform: scale(1); }
                }

                @keyframes hoverGrow {
                    from { transform: scale(1); }
                    to { transform: scale(1.05); }
                }

                .theme-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    animation: scalePulse 2s infinite ease-in-out;
                    transition: all 0.3s ease-in-out;
                }

                .theme-btn:hover {
                    animation: hoverGrow 0.3s forwards ease-in-out;
                    transform: scale(1.05);
                }

                .calendar-icon {
                    font-size: 1.2em;
                    vertical-align: middle;
                }

                .form-highlight-section {
                    transition: box-shadow 0.3s ease-in-out;
                    border-radius: 20px;
                }

                .form-highlight-section.glow-pulse {
                    animation: glowPulse 1.5s ease-out;
                }

                @keyframes glowPulse {
                    0% {
                        box-shadow: 0 0 5px 2px rgba(255, 168, 238, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 25px 8px rgba(255, 168, 238, 0.9);
                    }
                    100% {
                        box-shadow: 0 0 5px 2px rgba(255, 168, 238, 0.3);
                    }
                }
            `}</style>
            <section className="agenko-contact pt-80 pb-30">
                 <div className="container">
                      <div className="row">
                          <div className="col-lg-5">
                              <div className="contact-info-wrapper mb-50 pf_fadeup">
                                  <div className="shape"><span><Image src="/assets/images/pages/shape/world.png" alt="img" width={306} height={647} /></span></div>
                                  <ul>
                                      <li>
                                          <div className="phone">
                                              <a 
                                                  href="#"
                                                  onClick={scrollToFormAndGlow}
                                                  rel="noopener noreferrer"
                                              >
                                                  +55 (62) 9 8243-3773
                                              </a>
                                          </div>
                                      </li>
                                      <li>
                                        {/* --- FIX IS HERE: Added the missing closing </div> tag --- */}
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
                                                      <a 
                                                          href="#"
                                                          onClick={scrollToFormAndGlow}
                                                          rel="noopener noreferrer"
                                                      >
                                                          <i className="bi bi-whatsapp"></i>
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                           <div className="col-lg-7">
                               <div 
                                   id="form-section"
                                   ref={formSectionRef}
                                   className={`agenko-content-box mb-50 pf_fadeup form-highlight-section ${isFormGlowing ? 'glow-pulse' : ''}`}
                               >
                                   <div className="section-title mb-20">
                                       <span className="sub-title">Agende Sua Avaliação Gratuita</span>
                                       <h2>Seu sorriso ideal começa com um plano.</h2>
                                   </div>
                                   <p className="mb-20" style={{textAlign: 'justify', hyphens: 'auto'}}>Preencha o formulário para agendar sua avaliação gratuita. Nossa equipe de gestão de pacientes entrará em contato em breve para confirmar o <b>melhor horário</b> para você.</p>
                                   
                                   {formStatus !== 'success' && (
                                       <form className="agenko-contact-form style-one" id="contact-form" onSubmit={handleSubmit} noValidate>
                                           <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="nome" className="form-label">Nome Completo {requiredMark}</label>
                                                        <input id="nome" type="text" className="form_control" placeholder="Digite seu nome" name="nome" required value={formData.nome} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="whatsapp" className="form-label">WhatsApp {requiredMark}</label>
                                                        <input id="whatsapp" type="tel" className="form_control" placeholder="Apenas números com DDD" name="whatsapp" required value={formData.whatsapp} onChange={handleInputChange} inputMode="numeric" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="email" className="form-label">Email {requiredMark}</label>
                                                        <input id="email" type="email" className="form_control" placeholder="seumelhor@email.com" name="email" required value={formData.email} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <button type="submit" className="theme-btn" disabled={formStatus === 'loading'}>
                                                            {formStatus === 'loading' ? (
                                                                <>
                                                                    <span className="calendar-icon">🗓️</span> ENVIANDO...
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <span className="calendar-icon">🗓️</span> Agendar Avaliação Gratuita
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                           </div>
                                       </form>
                                   )}

                                   <div className="col-lg-12">
                                       {renderFormMessage()}
                                   </div>
                              </div>
                          </div>
                      </div>
                 </div>
            </section>
            
            <section className="agenko-map">
                <div 
                    ref={mapContainerRef} 
                    className="map-container map-box" 
                    data-aos="fade-up" 
                    data-aos-duration="1300"
                >
                    <div ref={overlayRef} className="map-overlay"></div>
                    <iframe 
                        className="bw-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8665369307814!2d-49.26699702421499!3d-16.683560784088595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef103169657dd%3A0x36fe497b6a5c894f!2sStudio%20Dental%20Odontologia!5e0!3m2!1sen!2sbr!4v1758104356339!5m2!1sen!2sbr"
                        width="100%"
                        height="450" 
                        style={{ border: 0, position: 'relative', zIndex: 0 }}
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