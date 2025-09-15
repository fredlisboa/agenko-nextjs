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
    <div className="image-carousel-container">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <Image
            src={images[currentImageIndex]}
            alt="Carousel Image"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
