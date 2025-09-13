import Brand4 from '../../Components/Brand/Brand4';
import BreadCumb from '../../Components/Common/BreadCumb';
import Pricing2 from '../../Components/Pricing/Pricing2';
import Testimonial4 from '../../Components/Testimonial/Testimonial4';
import React from 'react';

const page = () => {
    return (
        <div>
             <BreadCumb
                Title="Pricing"
                content="Agenko empowers businesses with innovative strategies & creative agency solutions"
            ></BreadCumb> 
            <Pricing2></Pricing2> 
            <Testimonial4></Testimonial4>   
            <Brand4></Brand4>                         
        </div>
    );
};

export default page;