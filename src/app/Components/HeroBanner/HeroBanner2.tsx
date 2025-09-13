import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroBanner2 = () => {
    return (
        <section className="agk-hero">
        <div className="hero-wrapper-two">
            <div className="shape shape-one"><span><Image className="rotate360" src="/assets/images/digital-agency/hero/shape/shape1.png" alt="img" width={50} height={50}   /></span></div>
            <div className="shape shape-two"><span><Image className="animate-float-bob-y" src="/assets/images/digital-agency/hero/shape/shape2.png" alt="img" width={40} height={80}   /></span></div>
            <div className="shape circle-one"><span></span></div>
            <div className="shape circle-two"><span></span></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <h1>
                                <span className="text-anm">Harmonização Orofacial em</span>
                                <span className="text-anm">Goiânia-GO</span>
                            </h1>
                            <div className="pro">HOF</div>
                        </div>
                    </div>
                </div>
                <div className="text-box pf_fadeup" style={{marginTop: '-50px', marginBottom: '50px'}}>
                <p style={{textAlign: 'justify'}}><span>Dra Gabriella Lisboa</span> é especialista em equilibrar a relação estética e funcional da face e sorriso, realçar traços naturais — sem cirurgia, gerenciar o envelhecimento e corrigir assimetrias.</p>
                    <div className="hero-button" style={{marginTop: '25px'}}>
                        <Link href="/about" className="theme-btn style-one">
                            <span className="text-flip">
                                <span className="text">SAIBA MAIS</span>
                                <span className="text">SAIBA MAIS</span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <ul className="service-list pf_fadeup">
                            <li>
                                
                                <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                        <Image src="/assets/images/icons/lipo-papada.svg" alt="Lipo de Papada Icon" width={40} height={40} />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Lipo de Papada</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                        <Image src="/assets/images/icons/rinomodelacao.svg" alt="Rinomodelação Icon" width={40} height={40} />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Rinomodelação</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                        <Image src="/assets/images/icons/soft-lift.svg" alt="Lifting Facial Não Cirúrgico Icon" width={40} height={40} />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Lifting Facial Não Cirúrgico</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                                <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                    <div className="icon">
                                        <Image src="/assets/images/icons/preenchimento-facial.svg" alt="Prenchimento Facial Icon" width={40} height={40} />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Preenchimento Facial</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                               <Link href="/service/service-details" className="agenko-iconic-box style-one">
                                   <div className="icon">
                                       <Image src="/assets/images/icons/fios-pdo.svg" alt="Fios de Sustentação Icon" width={60} height={60} />
                                   </div>
                                   <div className="content">
                                       <h4 className="title">Fios de Sustentação PDO</h4>
                                   </div>
                               </Link>
                           </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        
                        <div className="hero-image style-one pf_fadeup">
                            <img src="/assets/images/digital-agency/hero/hero-img1.webp" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanner2;