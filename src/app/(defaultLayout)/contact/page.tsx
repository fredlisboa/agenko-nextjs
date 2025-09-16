import BreadCumb from '../../Components/Common/BreadCumb';
import Contact from '../../Components/Contact/Contact';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                Title="Contato"
                content="Agende sua avaliação personalizada e gratuita para a <b>Harmonização Orofacial</b> e receba um diagnóstico completo de nossas especialistas. Este é o primeiro passo para sua jornada de transformação, onde criaremos um plano <b>exclusivo</b> para você, totalmente <b>sem compromisso</b>."
            ></BreadCumb>   
            <Contact></Contact>       
    </div>
  );
};

export default page;