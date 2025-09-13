import BreadCumb from '../../Components/Common/BreadCumb';
import Contact from '../../Components/Contact/Contact';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                Title="Contact"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>   
            <Contact></Contact>       
    </div>
  );
};

export default page;