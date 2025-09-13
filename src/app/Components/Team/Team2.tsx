import Image from 'next/image';
import React from 'react';

const Team2 = () => {

    const teamContent = [
        {img:'/assets/images/digital-agency/team/team1.jpg', name:'Mr. David Liam', content:'CEO & Founder',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/digital-agency/team/team2.jpg', name:'Miss Alex Mika', content:'CTA',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/digital-agency/team/team3.jpg', name:'Mr. John Smith', content:'Developer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/digital-agency/team/team4.jpg', name:'Jessika Joya', content:'Marketer',instagram:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="agk-team">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center mb-50 pf_zoomIn">
                        <span className="sub-title">Our Team</span>
                        <h2>Success Stories From Around the Globe</h2>
                    </div>
                </div>
            </div>
            <div className="row">
            {teamContent.map((item, i) => (
                <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                    <div className="agenko-team-item style-two mb-40 pf_fadeup">
                        <div className="member-image">
                        <Image src={item.img} alt="img" width={426} height={499}   />
                            <div className="hover-content">
                                <ul className="social-link">
                                    <li><a href={item.facebook}><i className="bi bi-facebook"></i></a></li>
                                    <li><a href={item.twitter}><i className="bi bi-twitter-x"></i></a></li>
                                    <li><a href={item.linkedin}><i className="bi bi-linkedin"></i></a></li>
                                    <li><a href={item.instagram}><i className="bi bi-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="member-info">
                            <h4 className="title">{item.name}</h4>
                            <p className="position">{item.content}</p>
                        </div>
                    </div>
                </div>
                ))}

            </div>
        </div>
    </section>
    );
};

export default Team2;