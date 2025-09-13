import About1 from '../../Components/About/About1';
import Brand4 from '../../Components/Brand/Brand4';
import BreadCumb from '../../Components/Common/BreadCumb';
import Team1 from '../../Components/Team/Team1';
import Testimonial4 from '../../Components/Testimonial/Testimonial4';
import WhoWeAre2 from '../../Components/WhoWeAre/WhoWeAre2';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                Title="About Us"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb>  
            <About1></About1>
            <WhoWeAre2></WhoWeAre2>    
            <Team1></Team1>
            <Testimonial4></Testimonial4>
            <Brand4></Brand4>
    </div>
  );
};

export default page;