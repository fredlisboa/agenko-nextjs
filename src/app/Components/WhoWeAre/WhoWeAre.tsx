'use client'
import React from 'react';
import Link from 'next/link';

const WhoWeAre = () => {
    const videoId = "deebdac7-b772-4257-a5d1-be929df1306c";
    const videoUrl = `https://iframe.mediadelivery.net/embed/149294/${videoId}?autoplay=true&muted=true&loop=true&controls=false&background=1`;

    return (
        <section id="who-we-are" className="agk-who-we gray-dark pt-80 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="agk-content-box mb-50 pf_fadeup">
                            <div className="section-title mb-30">
                                <span className="sub-title">Nosso Compromisso</span>
                                <h2>Sua Especialista em Beleza Natural e Resultados de Excelência</h2>
                            </div>
                            <ul className="check-list style-one mb-40">
                                <li><i className="bi bi-check2-circle"></i><span style={{textAlign: 'justify', hyphens: 'auto', wordBreak: 'break-word'}}>Planejamento Individualizado que Respeita Sua Identidade;</span></li>
                                <li><i className="bi bi-check2-circle"></i><span style={{textAlign: 'justify', hyphens: 'auto', wordBreak: 'break-word'}}>Técnicas Avançadas para Resultados Elegantes e Naturais;</span></li>
                                <li><i className="bi bi-check2-circle"></i><span style={{textAlign: 'justify', hyphens: 'auto', wordBreak: 'break-word'}}>Atendimento Exclusivo e Focado em Sua Segurança;</span></li>
                                <li><i className="bi bi-check2-circle"></i><span style={{textAlign: 'justify', hyphens: 'auto', wordBreak: 'break-word'}}>Produtos Premium para Maior Durabilidade e Confiança;</span></li>
                                <li><i className="bi bi-check2-circle"></i><span style={{textAlign: 'justify', hyphens: 'auto', wordBreak: 'break-word'}}>Acompanhamento Pós-Procedimento para Sua Tranquilidade.</span></li>
                            </ul>
                            <div className="agk-button">
                                <Link href="/contact" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">SAIBA MAIS</span>
                                        <span className="text">SAIBA MAIS</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        {/* Simplified Video Embed Directly Here */}
                        <div style={{
                            maxWidth: '420px',
                            width: '100%',
                            margin: 'auto',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                            background: '#000',
                        }}>
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                paddingTop: '177.78%', // 9:16 Aspect Ratio
                            }}>
                                <iframe
                                    src={videoUrl}
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 0,
                                        display: 'block', // Final override attempt
                                    }}
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="big-text text-center mt-80 pt-70">
                        <h2 className="text-anm-two">HARMONONIZAÇÃO OROFACIAL <br/>GOIÂNIA-GO</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
