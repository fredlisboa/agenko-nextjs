import React from 'react';

const Brand4 = () => {

    const brandContent = [
        {img:'/assets/images/pages/client/client1.png'},
        {img:'/assets/images/pages/client/client2.png'},
        {img:'/assets/images/pages/client/client3.png'},
        {img:'/assets/images/pages/client/client4.png'},
        {img:'/assets/images/pages/client/client5.png'},
      ];

    return (
        <section className="agenko-company pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="section-title text-center mb-40 pf_zoomIn">
                            <span className="sub-title">Our Client</span>
                            <h2>Trusted Industry Leader</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        
                        <div className="company-list d-flex flex-wrap justify-content-center">
                        {brandContent.map((item, i) => (
                            <div key={i} className="agenko-client-item style-two mb-40 pf_fadeup">
                                <div className="client-image">
                                    <img src={item.img} alt="Client Image" />
                                </div>
                            </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand4;