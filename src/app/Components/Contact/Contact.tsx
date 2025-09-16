"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

// --- FIX for TypeScript Error ---
// Extend the global Window interface to include properties added by external scripts like GTM.
declare global {
  interface Window {
    dataLayer: any[];
    KTracking?: { // Make KTracking optional as it might not always be present
      reportConversion: () => void;
    };
  }
}

// Define the type for our form data
interface FormData {
    nome: string;
    whatsapp: string;
    email: string;
}

// Define the type for our component's state
type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'client-error';
interface FormMessage {
    type: FormStatus;
    text: string;
}

const Contact = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        whatsapp: '',
        email: '',
    });
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [formMessage, setFormMessage] = useState<FormMessage | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        if (name === 'whatsapp') {
            const numericValue = value.replace(/\D/g, '').slice(0, 11);
            setFormData((prevData) => ({ ...prevData, [name]: numericValue }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const validateForm = (): boolean => {
        const { nome, whatsapp, email } = formData;

        if (!nome || nome.trim().length < 2) {
            setFormMessage({ type: 'client-error', text: '❌ Por favor, digite seu nome completo.' });
            return false;
        }

        if (!email || !email.includes('@') || !email.includes('.')) {
            setFormMessage({ type: 'client-error', text: '❌ Por favor, digite um email válido.' });
            return false;
        }

        if (!whatsapp || whatsapp.trim().length < 10) {
            setFormMessage({ type: 'client-error', text: '❌ Por favor, digite um WhatsApp válido (mín. 10 dígitos).' });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormMessage(null);

        if (!validateForm()) {
            return;
        }

        setFormStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
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
                        page_url: window.location.href
                    });
                    console.log('📊 DataLayer push successful.');

                    if (window.KTracking && typeof window.KTracking.reportConversion === 'function') {
                        window.KTracking.reportConversion();
                        console.log('✅ Keitaro conversion reported.');
                    }
                } catch (trackingError) {
                    console.warn('⚠️ Error during tracking:', trackingError);
                }

                setTimeout(() => {
                     setFormData({
                        nome: '',
                        whatsapp: '',
                        email: '',
                    });
                }, 500);

            } else {
                setFormStatus('error');
                setFormMessage({ type: 'error', text: result.message || '⚠️ Houve um problema temporário. Tente novamente.' });
            }
        } catch (error) {
            setFormStatus('error');
            setFormMessage({ type: 'error', text: '⚠️ Houve um problema temporário. Tente novamente em alguns segundos.' });
        }
    };

    useEffect(() => {
        // ... (map interaction logic remains the same)
    }, []);

    const renderFormMessage = () => {
        if (!formMessage) return null;

        if (formStatus === 'success') {
            return (
                <div className="message success" style={{ textAlign: 'center', lineHeight: 1.6 }}>
                    <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
                        <strong>✅ Tudo certo! Recebemos seu contato.</strong>
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        Nossa equipe entrará em contato com você em breve.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        <strong>Continue sua jornada:</strong> Clique abaixo para falar diretamente conosco!
                    </p>
                    <a 
                        href="https://wa.me/5562982433773?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20acabei%20de%20preencher%20o%20formul%C3%A1rio.%20Gostaria%20de%20continuar%20meu%20atendimento." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="whatsapp-button"
                    >
                        <span>📱</span> Abrir WhatsApp Agora
                    </a>
                </div>
            );
        }

        return (
            <div className={`message ${formMessage.type === 'client-error' ? 'error' : 'server-error'}`}>
                {formMessage.text}
            </div>
        );
    };
    
    // Helper for the red asterisk
    const requiredMark = <span style={{ color: 'red', fontWeight: 'bold' }}>*</span>;

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
                                     <h2>Seu sorriso ideal começa com um plano.</h2>
                                 </div>
                                 <p className="mb-20" style={{textAlign: 'justify', hyphens: 'auto'}}>Preencha o formulário para agendar sua avaliação gratuita. Nossa equipe de gestão de pacientes entrará em contato em breve para confirmar o <b>melhor horário</b> para você.</p>
                                 
                                {formStatus !== 'success' ? (
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
                                                        {formStatus === 'loading' ? 'ENVIANDO...' : 'Agendar Avaliação Gratuita'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                 ) : null}

                                <div className="col-lg-12">
                                    {renderFormMessage()}
                                </div>
                             </div>
                         </div>
                     </div>
                 </div>
            </section>
            
            <section className="agenko-map">
                 {/* ... (map section remains the same) ... */}
            </section>        
        </div>
    );
};

export default Contact;