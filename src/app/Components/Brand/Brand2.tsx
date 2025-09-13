import React from 'react';

const Brand2 = () => {

    const brandContent = [
        {img:'/assets/images/creative-agency/client/client1.png'},
        {img:'/assets/images/creative-agency/client/client2.png'},
        {img:'/assets/images/creative-agency/client/client3.png'},
        {img:'/assets/images/creative-agency/client/client4.png'},
        {img:'/assets/images/creative-agency/client/client5.png'},
        {img:'/assets/images/creative-agency/client/client6.png'},
        {img:'/assets/images/digital-agency/client/client7.png'},
        {img:'/assets/images/digital-agency/client/client8.png'},
        {img:'/assets/images/digital-agency/client/client9.png'},
        {img:'/assets/images/digital-agency/client/client10.png'},
      ];   

    return (
            <section className="agk-client gray-dark pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="section-title text-center mb-50 pf_zoomIn">
                                <span className="sub-title">Our Client</span>
                                <h2>Our Global Client</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="client-list pf_fadeup">
                                <ul>
                                {brandContent.map((item, i) => (
                                    <li key={i}>
                                        <div className="agenko-client-item style-one">
                                            <div className="client-image">
                                                <img src={item.img} alt="client img" />
                                            </div>
                                        </div>
                                    </li>
                                    ))} 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Brand2;