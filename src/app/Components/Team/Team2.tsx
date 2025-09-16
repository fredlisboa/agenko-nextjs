import Image from 'next/image';
import React from 'react';

const Team2 = () => {

    const teamContent = [
        {
            img: '/assets/images/digital-agency/team/vela1.webp', 
            name: 'Dra. Gabriella Lisboa', // APROVEITEI PARA CORRIGIR E MELHORAR
            content: 'Especialista em Harmonização Orofacial', // APROVEITEI PARA CORRIGIR E MELHORAR
            instagram: 'https://www.instagram.com/dragabriellalisboa/',
            google: 'https://share.google/dCytuoKdMwue0sY04', // ALTERAÇÃO: Adicionada a URL do Google
            facebook: '#',
            twitter: '#',
            linkedin: '#'
        },
        // {img:'/assets/images/digital-agency/team/team2.jpg', name:'Miss Alex Mika', content:'CTA',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        // {img:'/assets/images/digital-agency/team/team3.jpg', name:'Mr. John Smith', content:'Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        // {img:'/assets/images/digital-agency/team/team4.jpg', name:'Jessika Joya', content:'Marketer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section id="redes-sociais" className="agk-team gray-dark pt-80">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-50 pf_zoomIn">
                            <span className="sub-title">Instagram & Google</span>
                            <h2>Nossa História, Nossos Resultados e Sua Confiança.</h2>
                            <h3>⭐️ 5 Estrelas no Google & Instagram</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {teamContent.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
                            <div className="agenko-team-item style-two mb-40 pf_fadeup">
                                <div className="member-image" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                                    <Image src={item.img} alt={item.name} width={426} height={499} style={{ height: 'auto' }} />
                                    <div className="hover-content">
                                        <ul className="social-link">
                                            {/* <li><a href={item.facebook}><i className="bi bi-facebook"></i></a></li>
                                            <li><a href={item.twitter}><i className="bi bi-twitter-x"></i></a></li>
                                            <li><a href={item.linkedin}><i className="bi bi-linkedin"></i></a></li> */}

                                            {/* ALTERAÇÃO: Adicionado o link para as avaliações do Google */}

                                            <li>
                                                <a href={item.google} target="_blank" rel="noopener noreferrer" aria-label="Avaliações no Google">
                                                    <i className="bi bi-google"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href={item.instagram} target="_blank" rel="noopener noreferrer" aria-label="Perfil no Instagram">
                                                    <i className="bi bi-instagram"></i>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="member-info text-center">
                                    <h4 className="title">{item.name}</h4>
                                    <p className="position">{item.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team2;