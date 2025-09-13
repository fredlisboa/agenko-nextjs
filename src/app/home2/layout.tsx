import React from 'react';
import Header1 from '../Components/Header/Header1';
import Footer from '../Components/Footer/Footer';

const layout = ({ children } : any ) => {
    return (
        <div className='main-page-area2 bg-color2'>
            <Header1></Header1>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;