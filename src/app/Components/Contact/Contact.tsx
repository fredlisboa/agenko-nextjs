"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const Contact = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null); // Ref for the container div
    const overlayRef = useRef<HTMLDivElement>(null); // Ref for the overlay div

    useEffect(() => {
        const container = mapContainerRef.current;
        const overlay = overlayRef.current;

        const handleFirstTouch = () => {
            if (container && overlay) {
                // Find the iframe inside the container and add the .is-active class to it
                const iframe = container.querySelector('.bw-map');
                if (iframe) {
                    iframe.classList.add('is-active');
                }

                // Hide the overlay so the user can now interact with the map
                overlay.classList.add('is-hidden');
                
                // Remove the listener since it's only needed once
                overlay.removeEventListener('touchstart', handleFirstTouch);
            }
        };

        if (overlay) {
            overlay.addEventListener('touchstart', handleFirstTouch, { passive: true });
        }

        return () => {
            if (overlay) {
                overlay.removeEventListener('touchstart', handleFirstTouch);
            }
        };
    }, []);

    return (
        <div>
            <section className="agenko-contact pt-130 pb-80">
                {/* ... your existing contact info and form code ... */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            {/* Your contact-info-wrapper */}
                        </div>
                        <div className="col-lg-7">
                            {/* Your agenko-content-box and form */}
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="agenko-map">
                {/* 1. We wrap the iframe in a container div and attach a ref */}
                <div 
                    ref={mapContainerRef} 
                    className="map-container map-box" 
                    data-aos="fade-up" 
                    data-aos-duration="1300"
                >
                    {/* 2. This is the new invisible overlay */}
                    <div ref={overlayRef} className="map-overlay"></div>

                    <iframe 
                        className="bw-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.899805988117!2d-49.26127262417757!3d-16.68172744040439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef19313a51669%3A0x2f32b8a73543864d!2sStudio%20Dental%20Odontologia!5e0!3m2!1sen!2sbr!4v1726510769351!5m2!1sen!2sbr"
                        width="100%"
                        height="450" 
                        style={{ border: 0, position: 'relative', zIndex: 0 }} // Added position and z-index
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>        
        </div>
    );
};

export default Contact;