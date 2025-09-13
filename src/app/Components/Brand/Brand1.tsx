import React from 'react';

const Brand1 = () => {

    const brandContent = [
        {img:'/assets/images/creative-agency/client/client1.png'},
        {img:'/assets/images/creative-agency/client/client2.png'},
        {img:'/assets/images/creative-agency/client/client3.png'},
        {img:'/assets/images/creative-agency/client/client4.png'},
        {img:'/assets/images/creative-agency/client/client5.png'},
        {img:'/assets/images/creative-agency/client/client6.png'},
      ];

    return (
            <section className="agk-company-ca gray-dark pt-130 pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="agk-content-box text-center text-lg-start mb-50 pf_fadeup">
                                <div className="section-title mb-30">
                                    <span className="sub-title">Company</span>
                                    <h2>Trusted Our Company</h2>
                                </div>
                                <p>We are a <span>Digital Creative agency</span> with 25 years of experience, specializing in delivering cutting-edge </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="client-list mb-50 pf_fadeup">
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

export default Brand1;