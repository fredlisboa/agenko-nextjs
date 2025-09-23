'use client'
import React, { useEffect, useRef, useState } from 'react';

const Faq1 = () => {

    const faqContent = [
        {title:'O resultado da harmonização orofacial vai ficar artificial?', content:'De forma alguma. Nossa filosofia é <b>realçar</b> a beleza que já <b>existe</b>, não transformar. Cada planejamento é 100% individualizado para respeitar seus traços e proporções. Buscamos resultados elegantes e naturais, que aumentam sua autoestima sem que ninguém precise saber que você fez um procedimento.'},
        {title:'Os procedimentos doem? Como é a recuperação?', content:'Priorizamos o seu conforto. Utilizamos anestésicos tópicos e locais de alta eficácia para garantir que o procedimento seja o mais tranquilo possível. A recuperação varia para cada tratamento, mas a maioria permite o retorno às atividades normais quase que <b>imediatamente</b>, com orientações simples para o pós-procedimento.'},
        {title:'Qual a durabilidade dos resultados?', content:'A durabilidade varia conforme o tratamento. Preenchimentos com ácido hialurônico duram em média de 12 a 24 meses. Técnicas combinadas, como o Soft Lift, promovem um <b>efecto lifting de longa duração</b>, pois além de preencher, estimulam o colágeno natural do seu corpo. Durante sua avaliação gratuita, detalhamos a expectativa de durabilidade para cada etapa do seu plano personalizado.'},
        {title:'Quanto custa a Harmonização Orofacial em Goiânia?', content:'O investimento é totalmente <b>personalizado</b>, pois depende dos procedimentos ideais para você. Por isso, a avaliação inicial é fundamental e gratuita. Nela, criamos seu plano de tratamento e apresentamos um orçamento detalhado, com diversas opções de pagamento e parcelamento acessíveis para viabilizar seu sonho.'},
        {title:'Quais produtos vocês utilizam? São seguros?', content:'Sim, sua segurança é inegociável. Trabalhamos exclusivamente com as marcas líderes do mercado, como Galderma (fabricante do Restylane® e Sculptra®) e I-THREAD® para fios de PDO. Todos os nossos produtos são aprovados pela ANVISA, garantindo a máxima quality, segurança e resultados eficazes para o seu tratamento.'},
        {title:'Em quanto tempo eu vejo os resultados?', content:'Alguns procedimentos, como o preenchimento, oferecem <b>resultados imediatos</b>. Outros, como os bioestimuladores de colágeno e a lipo de papada, apresentam resultados progressivos, com a melhora contínua da pele e do contorno nas semanas e meses seguintes. Explicamos todo o cronograma durante a sua avaliação.'},
        {title:'Qual o diferencial da Dra. Gabriella em relação a outros profissionais?', content:',Nosso principal diferencial é a busca pelo equilíbrio e naturalidade. Em vez de seguir padrões, a Dra. Gabriella realiza uma análise facial detalhada para criar um plano que respeita sua identidade e realça seus pontos fortes. Combinamos um olhar artístico apurado com <b>mais de 15 anos de experiência técnica</b> para entregar resultados que geram elogios, não perguntas.'},
        {title:'Preciso me afastar do trabalho ou de minhas atividades após os procedimentos?', content:'A grande maioria dos nossos procedimentos de harmonização orofacial permite um retorno imediato às suas atividades diárias. Pode ocorrer um leve inchaço ou vermelhidão no local, que geralmente desaparece rapidamente e pode ser disfarçado com maquiagem. Todas as orientações detalhadas são fornecidas para garantir que sua recuperação seja o mais tranquila e <b>discreta</b> possível.'},
        {title:'Harmonização Orofacial é a mesma coisa que aplicação da toxina botulínica?', content:'Não, são coisas diferentes, mas que se complementam maravilhosamente! A toxina botulínica trata rugas de expressão ao relaxar a musculatura. Já a <b>Harmonização Orofacial</b> é um conjunto de procedimentos (como preenchimentos e bioestimuladores) que visa <b>restaurar volumes</b>, definir contornos e <b>melhorar a qualidade da pele</b>. Na sua avaliação, podemos definir qual a melhor combinação para você.'},
        {title:'Sou de outra cidade. Como funciona o atendimento?', content:'Atendemos pacientes de todo o Brasil (<b>e mundo</b>)! Podemos iniciar com uma pré-avaliação online para entender seus objetivos e alinhar as expectativas. A partir daí, planejamos seu tratamento para ser realizado de forma otimizada em sua vinda a Goiânia, concentrando os procedimentos e retornos para se adequar à sua agenda. Entre em <b><a href="/contact">contato</a></b> e saiba mais sobre nosso protocolo para pacientes de fora.'}
      ]; 

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);

    return (
<section id="faq" className="agk-faq pt-80 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    
                                    <div className="section-title mb-50 pf_fadeup">
                                        <span className="sub-title">Perguntas & Respostas</span>
                                        <h2>Dúvidas Frequentes? Nós Esclarecemos.</h2>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                   
                                    <div className="faq-big-text">Faq’s</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="agk-content-box pt-5 mb-30">
                                       
                                        <div className="agk-accordion" id="accordionOne">
                                        {faqContent.map((item, index) => (
                                            <div key={index} className={`agenko-accordion-item mb-20 pf_fadeup ${index === openItemIndex ? "active" : "" }`} >
                                                <div onClick={() => handleItemClick(index)} className="accordion-header d-flex justify-content-between align-items-center" role="button" tabIndex={0} onKeyDown={() => handleItemClick(index)} aria-expanded={index === openItemIndex}>
                                                    <h6  className="accordion-title">{item.title}</h6>
                                                    <i className={index === openItemIndex ? "bi bi-chevron-up" : "bi bi-chevron-down"}></i>
                                                </div>
                                                <div ref={accordionContentRef}  id={`collapse-${index}`} className={`accordion-collapse accordion-content ${index === openItemIndex ? 'show' : ''}`} data-bs-parent="#accordionOne">
                                                    <div className="accordion-content">
                                                        <p style={{textAlign: 'justify', hyphens: 'auto'}} dangerouslySetInnerHTML={{ __html: item.content }}></p>
                                                    </div>
                                                </div>
                                            </div>
                                            ))}
           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    );
};

export default Faq1;