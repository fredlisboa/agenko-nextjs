'use client'
import React from 'react';

const Video = () => {
    const videoId = "25853f14-6a54-41a3-b376-fda329bc5bb9";
    const videoUrl = `https://iframe.mediadelivery.net/embed/149294/${videoId}?autoplay=true&muted=true&loop=true&controls=false&background=1`;

    return (
        <div className="sd-lab-autoplay-video-container">
            <iframe
                src={videoUrl}
                loading="lazy"
                style={{ border: 'none', position: 'absolute', top: 0, height: '100%', width: '100%' }}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
            ></iframe>
            <style jsx>{`
                .sd-lab-autoplay-video-container {
                    position: relative;
                    max-width: 420px;
                    width: 100%;
                    margin: auto;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 12px 40px rgba(0,0,0,0.3);
                    aspect-ratio: 9 / 16;
                    background: #000;
                }
            `}</style>
        </div>
    );
};

export default Video;
