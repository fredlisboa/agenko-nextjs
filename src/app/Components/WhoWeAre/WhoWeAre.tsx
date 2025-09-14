'use client'
import React from 'react';
import Link from 'next/link';
import Video from '../Video/Video';

const WhoWeAre = () => {

    return (
        <section className="agk-who-we gray-dark pt-130 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="agk-content-box mb-50 pf_fadeup">
                            <div className="section-title mb-30">
                                <span className="sub-title">Nosso Compromisso</span>
                                <h2>Sua Especialista em Beleza Natural e Resultados de Excelência</h2>
                            </div>
                            <ul className="check-list style-one mb-40">
                                <li><i className="bi bi-check2-circle"></i>Planejamento Individualizado que Respeita Sua Identidade</li>
                                <li><i className="bi bi-check2-circle"></i>Técnicas Avançadas para Resultados Elegantes e Naturais</li>
                                <li><i className="bi bi-check2-circle"></i>Atendimento Exclusivo e Focado em Sua Segurança</li>
                                <li><i className="bi bi-check2-circle"></i>Produtos Premium para Maior Durabilidade e Confiança</li>
                                <li><i className="bi bi-check2-circle"></i>Acompanhamento Pós-Procedimento para Sua Tranquilidade</li>
                            </ul>
                            <div className="agk-button">
                                <Link href="/pricing" className="theme-btn style-one">
                                    <span className="text-flip">
                                        <span className="text">SAIBA MAIS</span>
                                        <span className="text">SAIBA MAIS</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="agk-play-image-box mb-50 pf_fadeup">
                            <Video />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="big-text text-center mt-80 pt-70">
                        <h2 className="text-anm-two">HARMONONIZAÇÃO OROFACIAL</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;