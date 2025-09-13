import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header1 from '../Components/Header/Header1';

const layout = ({ children } : any ) => {
    return (
        <div className='main-page-area3 bg-color2'>
           <Header1></Header1>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;