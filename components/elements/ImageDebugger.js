"use client";
import { useEffect } from 'react';

export default function ImageDebugger() {
  useEffect(() => {
    // Check if images are loading
    const imageUrls = [
      '/assets/images/main-slider/banner-1.jpg',
      '/assets/images/main-slider/banner-2.jpg',
      '/assets/images/main-slider/banner-3.jpg',
      '/assets/images/main-slider/banner-4.jpg',
      '/assets/images/main-slider/banner-5.jpg'
    ];

    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`✅ Image ${index + 1} loaded successfully:`, url);
      };
      img.onerror = () => {
        console.error(`❌ Image ${index + 1} failed to load:`, url);
      };
      img.src = url;
    });

    // Check if Swiper is working
    setTimeout(() => {
      const swiper = document.querySelector('.banner-carousel');
      if (swiper) {
        console.log('✅ Swiper container found');
        const slides = swiper.querySelectorAll('.swiper-slide');
        console.log(`✅ Found ${slides.length} slides`);
      } else {
        console.error('❌ Swiper container not found');
      }
    }, 2000);
  }, []);

  return null;
}
