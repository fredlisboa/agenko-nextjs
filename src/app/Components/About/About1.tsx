import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About1 = () => {
    return (
        <section id="about" className="agk-about pt-80 pb-50">
        <div className="container">
            <div className="row">
                <div className="col-xl-7">
                    
                    <div className="agk-content-box style-one mb-50 pf_fadeup">
                        <div className="section-title mb-20">
                            <span className="sub-title">Sobre</span>
                            <h2>Te Ajudo a Transformar Sua Beleza e Autoestima</h2>
                        </div>
                        <p style={{textAlign: 'justify', hyphens: 'auto'}}>Acreditamos que a verdadeira beleza está em realçar quem você já é. Como especialista em <b>Harmonização Orofacial em Goiânia</b>, minha missão é ir além dos procedimentos: eu busco o equilíbrio perfeito entre estética e função para revelar a sua melhor versão. Vamos juntas encontrar a harmonia que seu rosto e sorriso merecem?</p>
                        <p style={{textAlign: 'justify', hyphens: 'auto'}}>Com mais de 15 anos de experiência e mais de 1000 faces transformadas, desenvolvi um olhar clínico apurado para criar resultados que respeitam sua identidade. Aqui, cada <b>detalhe</b> é planejado para proporcionar uma beleza natural, sem exageros, elevando não apenas seus traços, mas principalmente sua <b>autoestima</b> e confiança.</p>
                    <div className="agk-button mb-30">
                        <Link href="/contact" className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">SAIBA MAIS</span>
                                <span className="text">SAIBA MAIS</span>
                            </span>
                        </Link>
                    </div>
                    <ul className="d-flex flex-wrap align-items-center">
                        <li className="pe-3">
                            <div className="agenko-counter-box style-one">
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">1000</span>+</h2>
                                    <p>Faces Transformadas</p>
                                </div>
                            </div>
                        </li>

                        <li className="ps-3 border-start">
                            <div className="agenko-counter-box style-one">
                                <div className="content">
                                    <h2 className="mb-10"><span className="count">5</span></h2>
                                    <p>Estrelas no Google</p>
                                </div>
                            </div>
                        </li>

                    </ul>
                    </div>
                </div>
                <div className="col-xl-5">
                    
                    <div className="agk-image-box style-one mb-50 pf_fadeup">
                        <div className="agk-image">
                        <Image src="/assets/images/digital-agency/about/fiel-beleza.webp" alt="img" width={440} height={532} style={{ width: '100%', height: 'auto' }}   />
                        </div>
                        <div className="agenko-experince-box style-one">
                            <h2><span>15</span>+</h2>
                            <p>Anos de Experiência</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;