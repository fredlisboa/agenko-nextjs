import React from 'react';
import HeroBanner3 from '../Components/HeroBanner/HeroBanner3';
import Brand3 from '../Components/Brand/Brand3';
import About1 from '../Components/About/About1';
import Counter1 from '../Components/Counter/Counter1';
import Services3 from '../Components/Services/Services3';
import Project3 from '../Components/Project/Project3';
import WhoWeAre2 from '../Components/WhoWeAre/WhoWeAre2';
import Testimonial3 from '../Components/Testimonial/Testimonial3';
import Cta1 from '../Components/Cta/Cta1';
import Blog3 from '../Components/Blog/Blog3';

const page = () => {
    return (
        <div>
            <HeroBanner3></HeroBanner3>
            <Brand3></Brand3>
            <About1></About1>
            <Counter1></Counter1>
            <Services3></Services3>
            <Project3></Project3>
            <WhoWeAre2></WhoWeAre2>
            <Testimonial3></Testimonial3>
            <Cta1></Cta1>
            <Blog3
                paddingTop="agenko-blog pt-130 pb-80"
            ></Blog3>            
        </div>
    );
};

export default page;