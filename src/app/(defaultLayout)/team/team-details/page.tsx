import BreadCumb from '../../../Components/Common/BreadCumb';
import TeamDetails from '../../../Components/TeamDetails/TeamDetails';
import WhyChoose2 from '../../../Components/WhyChoose/WhyChoose2';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                Title="Team Details"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <TeamDetails></TeamDetails>  
            <WhyChoose2></WhyChoose2>                    
    </div>
  );
};

export default page;