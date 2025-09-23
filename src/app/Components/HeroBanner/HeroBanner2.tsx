'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroBanner2 = () => {
    const handleScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const targetId = href.substring(1);
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "auto", // Changed from "smooth" to "auto" for potential performance improvement
        });
      };

    return (
        <section id="hero" className="agk-hero">
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
                <p style={{textAlign: 'justify', hyphens: 'auto'}}><span>Dra Gabriella Lisboa</span> é especialista em equilibrar a relação estética e funcional da face e sorriso, realçar traços naturais — com técnicas cirúrgicas e não cirúrgicas, gerenciar o envelhecimento e corrigir assimetrias.</p>
                    <div className="hero-button" style={{marginTop: '25px'}}>
                        <Link href="/contact" className="theme-btn style-one">
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
                                
                                <Link
                                    href="#lipo-de-papada"
                                    onClick={handleScroll}
                                    // Add the new global class here
                                    className="agenko-iconic-box style-one service-button-glow"
                                >
                                    <div className="icon">
                                        <Image src="/assets/images/icons/lipo-papada.svg" alt="Lipo de Papada Icon" width={40} height={40} />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Lipo de Papada</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link
                                    href="#rinomodelacao"
                                    onClick={handleScroll}
                                    className="agenko-iconic-box style-one service-button-glow"
                                >
                                    <div className="icon">
                                        <Image src="/assets/images/icons/rinomodelacao.svg" alt="Rinomodelação Icon" width={40} height={40} />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Rinomodelação</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                
                                <Link
                                    href="#lifting-facial"
                                    onClick={handleScroll}
                                    className="agenko-iconic-box style-one service-button-glow"
                                >
                                    <div className="icon">
                                        <Image src="/assets/images/icons/soft-lift.svg" alt="Lifting Facial Não Cirúrgico Icon" width={40} height={40} />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Lifting Facial Não Cirúrgico</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                                <Link
                                    href="#preenchimento-facial"
                                    onClick={handleScroll}
                                    className="agenko-iconic-box style-one service-button-glow"
                                >
                                    <div className="icon">
                                        <Image src="/assets/images/icons/preenchimento-facial.svg" alt="Prenchimento Facial Icon" width={40} height={40} />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Preenchimento Facial</h4>
                                    </div>
                                </Link>
                            </li>
                            <li>
                               
                               <Link
                                   href="#fios-de-sustentacao"
                                   onClick={handleScroll}
                                   className="agenko-iconic-box style-one service-button-glow"
                               >
                                   <div className="icon">
                                       <Image src="/assets/images/icons/fios-pdo.svg" alt="Fios de Sustentação Icon" width={60} height={60} />
                                   </div>
                                   <div className="content">
                                       <h4 className="title">Fios de Sustentação PDO</h4>
                                   </div>
                               </Link>
                           </li>
                           <li>
                               
                               <Link
                                   href="#platismoplastia"
                                   onClick={handleScroll}
                                   className="agenko-iconic-box style-one service-button-glow"
                               >
                                   <div className="icon">
                                       <Image src="/assets/images/icons/plastimo.svg" alt="Platismoplastia Icon" width={60} height={60} />
                                   </div>
                                   <div className="content">
                                       <h4 className="title">Platismoplastia</h4>
                                   </div>
                               </Link>
                           </li>
                           <li>
                               
                               <Link
                                   href="#slim-lift"
                                   onClick={handleScroll}
                                   className="agenko-iconic-box style-one service-button-glow"
                               >
                                   <div className="icon">
                                       <Image src="/assets/images/icons/slim-fit3.svg" alt="Slim Lift Icon" width={60} height={60} />
                                   </div>
                                   <div className="content">
                                       <h4 className="title">Slim Lift</h4>
                                   </div>
                               </Link>
                           </li>
                           <li>
                               
                               <Link
                                   href="#toxina-botulinica"
                                   onClick={handleScroll}
                                   className="agenko-iconic-box style-one service-button-glow"
                               >
                                   <div className="icon">
                                       <Image src="/assets/images/icons/toxina-botulinica.svg" alt="Slim Lift Icon" width={60} height={60} />
                                   </div>
                                   <div className="content">
                                       <h4 className="title">Toxina Botulínica</h4>
                                   </div>
                               </Link>
                           </li>
                           <li>
                               
                               <Link
                                   href="#bioestimuladores"
                                   onClick={handleScroll}
                                   className="agenko-iconic-box style-one service-button-glow"
                               >
                                   <div className="icon">
                                       <Image src="/assets/images/icons/natura-labs.svg" alt="Slim Lift Icon" width={50} height={50} />
                                   </div>
                                   <div className="content">
                                       <h4 className="title">Bioestimuladores de Colágeno</h4>
                                   </div>
                               </Link>
                           </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        
                        <div className="hero-image style-one pf_fadeup">
                            <Image src="/assets/images/digital-agency/hero/gabi-estrela2.png" alt="Hero Image" width={848} height={1060} priority style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanner2;
