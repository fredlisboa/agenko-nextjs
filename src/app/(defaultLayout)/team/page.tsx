import BreadCumb from '../../Components/Common/BreadCumb';
import Cta2 from '../../Components/Cta/Cta2';
import Team3 from '../../Components/Team/Team3';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                Title="Team"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>  
            <Team3></Team3>  
            <Cta2></Cta2>    
    </div>
  );
};

export default page;