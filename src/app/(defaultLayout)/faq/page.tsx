import BreadCumb from '../../Components/Common/BreadCumb';
import Faq2 from '../../Components/Faq/Faq2';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                Title="FAQ"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>  
            <Faq2></Faq2>       
    </div>
  );
};

export default page;