import Image from 'next/image';
import React from 'react';

const Process3 = () => {

    const processContent = [
        {img:'/assets/images/pages/gallery/process1.jpg', number:'01', title:'Research', content:'We responsive user-friendly websites tailored to your ensuring seamless functionality, engaging design.'},
        {img:'/assets/images/pages/gallery/process2.jpg', number:'02', title:'Designing', content:'We responsive user-friendly websites tailored to your ensuring seamless functionality, engaging design.'},
        {img:'/assets/images/pages/gallery/process3.jpg', number:'03', title:'Development', content:'We responsive user-friendly websites tailored to your ensuring seamless functionality, engaging design.'},
        {img:'/assets/images/pages/gallery/process4.jpg', number:'04', title:'Deployment', content:'We responsive user-friendly websites tailored to your ensuring seamless functionality, engaging design.'},
      ];

    return (
        <section className="agenko-process pt-130">
            <div className="container">
                <div className="agenko-process-wrapper-two pf_fadeup">
                    <div className="process-line"></div>
                    <div className="row">
                    {processContent.map((item, i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                            <div className="agenko-iconic-box style-eight mb-40">
                                <span className="agenko-dot mb-20"></span>
                                <div className="content">
                                    <span className="number">{item.number}</span>
                                    <h4 className="title">{item.title}</h4>
                                    <p>{item.content}</p>
                                </div>
                                <div className="thumbnail">
                                <Image src={item.img} alt="img" width={300} height={300}   />
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process3;