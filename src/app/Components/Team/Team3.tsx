import Image from 'next/image';
import React from 'react';

const Team3 = () => {

    const teamContent = [
        {img:'/assets/images/pages/team/team10.jpg', name:'Charlotte Dawson', content:'Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/pages/team/team11.jpg', name:'Alexander Morgan', content:'Co-Founder',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/pages/team/team12.jpg', name:'Sophia Harper', content:'Marketer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/pages/team/team13.jpg', name:'Nathaniel Blake', content:'Designer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/digital-agency/team/team1.jpg', name:'Mr. David Liam', content:'CEO & Founder',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/digital-agency/team/team2.jpg', name:'Miss Alex Mika', content:'CTA',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/digital-agency/team/team3.jpg', name:'Mr. John Smith', content:'Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/digital-agency/team/team4.jpg', name:'Jessika Joya', content:'Marketer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="agenko-team pt-130 pb-85">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                    <div className="section-title text-center mb-50 pf_fadeup">
                        <span className="sub-title">Our Team</span>
                        <h2>Meet the Minds Behind <br/> the Mission</h2>
                    </div>
                </div>
            </div>
            <div className="row">
            {teamContent.map((item, i) => (
                <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                    <div className="agenko-team-item style-four mb-35 pf_fadeup">
                        <div className="member-image">
                        <Image src={item.img} alt="img" width={305} height={355}   />
                            <div className="hover-content">
                                <div className="social-box">
                                    <a href={item.facebook}><i className="bi bi-facebook"></i></a>
                                    <a href={item.twitter}><i className="bi bi-twitter-x"></i></a>
                                    <a href={item.linkedin}><i className="bi bi-linkedin"></i></a>
                                    <a href={item.instagram}><i className="bi bi-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="member-info text-center">
                            <h4 className="title">{item.name}</h4>
                            <span className="position">{item.content}</span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Team3;