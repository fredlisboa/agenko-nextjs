'use client'
import React from 'react';

const Video = () => {
    const videoId = "deebdac7-b772-4257-a5d1-be929df1306c";
    const videoUrl = `https://iframe.mediadelivery.net/embed/149294/${videoId}?autoplay=true&muted=true&loop=true&controls=false&background=1`;

    return (
        <div className="sd-lab-autoplay-video-container">
            <div className="aspect-ratio-box">
                <iframe
                    src={videoUrl}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                    }}
                ></iframe>
            </div>
            <style jsx>{`
                .sd-lab-autoplay-video-container {
                    max-width: 420px;
                    width: 100%;
                    margin: auto;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 12px 40px rgba(0,0,0,0.3);
                    background: #000;
                }
                .aspect-ratio-box {
                    position: relative;
                    width: 100%;
                    padding-top: 177.78%; /* 9:16 Aspect Ratio */
                }
            `}</style>
        </div>
    );
};

export default Video;
