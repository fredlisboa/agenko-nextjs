import React from 'react';
import dynamic from 'next/dynamic';

// Statically import components that are visible on initial load ("above the fold")
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import About1 from '../Components/About/About1';
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre';

// Dynamically import components that are "below the fold"
const Services2 = dynamic(() => import('../Components/Services/Services2'));
const Process2 = dynamic(() => import('../Components/Process/Process2'));
const Testimonial2 = dynamic(() => import('../Components/Testimonial/Testimonial2'));
const CarouselSection = dynamic(() => import('../Components/Carousel/CarouselSection'));
const Faq1 = dynamic(() => import('../Components/Faq/Faq1'));
const Team2 = dynamic(() => import('../Components/Team/Team2'));

// Note: Commented out components are kept as they were
// import Project2 from '../Components/Project/Project2';
// import Brand2 from '../Components/Brand/Brand2';
// import Blog2 from '../Components/Blog/Blog2';

const page = () => {
    return (
        <div>
            {/* These components load first for a fast initial paint */}
            <HeroBanner2></HeroBanner2>
            <About1></About1>
            <WhoWeAre></WhoWeAre>

            {/* These components will be lazy-loaded as the user scrolls */}
            {/* <Project2></Project2> */}
            <Services2></Services2>
            <Process2></Process2>
            <Testimonial2></Testimonial2>
            <CarouselSection />
            {/* <Brand2></Brand2> */}
            <Faq1></Faq1>
            <Team2></Team2>
            {/* <Blog2></Blog2> */}
        </div>
    );
};

export default page;