"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = () => {
    const images = [
        "/assets/images/digital-agency/carrossel/HOF-CASO01-01.webp",
        "/assets/images/digital-agency/carrossel/HOF-CASO02-01.webp",
        "/assets/images/digital-agency/carrossel/HOF-CASO03-01.webp",
        "/assets/images/digital-agency/carrossel/HOF-CASO04-01.webp",
        "/assets/images/digital-agency/carrossel/HOF-CASO05-01.webp",
        "/assets/images/digital-agency/carrossel/HOF-CASO06-01.webp",
        "/assets/images/digital-agency/carrossel/HOF-CASO07-01.webp",
        "/assets/images/digital-agency/carrossel/HOF-CASO08-01.webp",
        "/assets/images/digital-agency/carrossel/HOF-CASO08-02.webp"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div 
            className="image-carousel-container" 
            style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '555px', 
                margin: '30px auto 0',
                // This reserves the space for the carousel, preventing layout shift (CLS)
                aspectRatio: '1 / 1' //  <--  This assumes your images are square. Adjust if needed (e.g., '16 / 9').
            }}
        >
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '10px', overflow: 'hidden' }}>
                <AnimatePresence>
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    >
                        <Image
                            src={images[currentImageIndex]}
                            alt="Carousel Image"
                            fill
                            sizes="(max-width: 555px) 100vw, 555px"
                            style={{ objectFit: "contain" }}
                            // Prioritize the first image to improve Largest Contentful Paint (LCP)
                            priority={currentImageIndex === 0}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ImageCarousel;