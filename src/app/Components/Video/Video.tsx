'use client'
import React, { useEffect } from 'react';

const Video = () => {

    useEffect(() => {
        const initImmediateLoadVideo = (containerId: string) => {
            const videoContainer = document.getElementById(containerId);
            if (!videoContainer) {
                console.error('Autoplay video container not found:', containerId);
                return;
            }

            const target = videoContainer.querySelector('.video-player-target') as HTMLElement;
            const videoId = target.dataset.videoId;

            if (!videoId) {
                console.error('Video ID not found for target:', target);
                return;
            }

            const iframe = document.createElement('iframe');
            iframe.src = `https://iframe.mediadelivery.net/embed/149294/${videoId}?autoplay=true&muted=true&loop=true&controls=false&background=1`;
            iframe.allow = "autoplay; encrypted-media; picture-in-picture";
            iframe.allowFullscreen = true;
            target.appendChild(iframe);

            iframe.onload = () => {
                iframe.classList.add('loaded');
            };
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => initImmediateLoadVideo('autoplay-video-1'));
        } else {
            initImmediateLoadVideo('autoplay-video-1');
        }
    }, []);

    return (
        <div className="sd-lab-autoplay-video-container" id="autoplay-video-1">
            <div className="video-player-target" data-video-id="25853f14-6a54-41a3-b376-fda329bc5bb9">
                <img 
                    src="https://laboratorio.studiodental.dental/wp-content/uploads/2025/09/0901.webp"
                    alt="Fluxo Digital SD-Lab" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', position: 'absolute', top: 0, left: 0 }}
                />
            </div>
            <style jsx>{`
                .sd-lab-autoplay-video-container {
                    max-width: 420px;
                    width: 100%;
                    height: 100%;
                    margin: auto;
                    position: relative;
                    background: #000;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
                }
                .sd-lab-autoplay-video-container .video-player-target {
                    position: relative;
                    width: 100%;
                    padding-top: 177.78%; /* 9:16 Aspect Ratio */
                }
                .sd-lab-autoplay-video-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                    border-radius: inherit;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                }
                .sd-lab-autoplay-video-container iframe.loaded {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};

export default Video;