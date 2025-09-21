"use client";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  speed: 1000,
  effect: 'slide',
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  on: {
    init: function() {
      setTimeout(() => {
        const activeSlide = this.slides[this.activeIndex];
        if (activeSlide) {
          triggerSlideAnimations(activeSlide);
        }
      }, 500);
    },
    slideChange: function() {
      setTimeout(() => {
        const activeSlide = this.slides[this.activeIndex];
        if (activeSlide) {
          triggerSlideAnimations(activeSlide);
        }
      }, 100);
    }
  }
};

const slides = [
  {
    id: 1,
    image: "/assets/images/main-slider/banner-1.jpg",
    title: "Where Every Stay is a Story",
    subtitle: "Summer Vacations",
    description: "Where Nature Meets Luxury: Stay at Hotel Ashirwad"
  },
  {
    id: 2,
    image: "/assets/images/main-slider/banner-2.jpg",
    title: "Experience Tranquility in Splendor",
    subtitle: "Summer Vacations",
    description: "Breathtaking Views and Unmatched Luxury at Hotel Ashirwad"
  },
  {
    id: 3,
    image: "/assets/images/main-slider/banner-3.jpg",
    title: "Indulge in Unmatched Luxury",
    subtitle: "Summer Vacations",
    description: "Escape the Ordinary: Experience Premium Comfort at Hotel Ashirwad"
  },
  {
    id: 4,
    image: "/assets/images/main-slider/banner-4.jpg",
    title: "Stay, Relax, Rejuvenate",
    subtitle: "Summer Vacations",
    description: "Your Perfect Getaway Awaits: Hotel Ashirwad"
  },
  {
    id: 5,
    image: "/assets/images/main-slider/banner-5.jpg",
    title: "Luxury Hotel For Vacation",
    subtitle: "Summer Vacations",
    description: "Relax in Style: Hotel Ashirwad – Where Luxury Meets Tranquility"
  }
];

export default function BannerWithNextImage() {
  const swiperRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Global animation functions
  const createParticles = () => {
    const container = document.querySelector('.banner-next .particle-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < 25; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      container.appendChild(particle);
    }
  };

  const triggerSlideAnimations = (slide) => {
    if (!slide) return;
    
    const content = slide.querySelector('.slide-content');
    const children = slide.querySelectorAll('.slide-child');
    const typingElement = slide.querySelector('.typing-text');
    
    if (content) content.classList.remove('animate');
    children.forEach(child => child.classList.remove('animate'));
    
    setTimeout(() => {
      if (content) {
        content.classList.add('animate');
      }
      
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('animate');
        }, (index + 1) * 150);
      });
      
      if (typingElement && !typingElement.dataset.typed) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        typingElement.classList.add('typing');
        
        let i = 0;
        const type = () => {
          if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 80);
          } else {
            typingElement.classList.remove('typing');
            typingElement.dataset.typed = 'true';
          }
        };
        
        setTimeout(type, 300);
      }
    }, 100);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'banner-next-styles';
    style.textContent = `
      .banner-next {
        position: relative;
        overflow: hidden;
        height: 100vh;
      }
      
      .banner-next .slide-content {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      
      .banner-next .slide-content.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .banner-next .slide-child {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
      }
      
      .banner-next .slide-child.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .banner-next .typing {
        border-right: 2px solid #b30000;
        animation: blink 1s infinite;
      }
      
      @keyframes blink {
        0%, 50% { border-color: #b30000; }
        51%, 100% { border-color: transparent; }
      }
      
      .banner-next .particle-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }
      
      .banner-next .particle {
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        animation: float 20s linear infinite;
      }
      
      @keyframes float {
        0% {
          transform: translateY(100vh) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
      
      .banner-next .swiper-slide {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1a1a1a;
      }
      
      .banner-next .image-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      }
      
      .banner-next .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%);
        z-index: 1;
      }
      
      .banner-next .content-outer {
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      
      .banner-next .content-box {
        max-width: 800px;
        padding: 40px 20px;
      }
      
      .banner-next .btn-1 {
        display: inline-block;
        padding: 15px 40px;
        background: linear-gradient(135deg, #b30000 0%, #ff6b35 100%);
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(179, 0, 0, 0.3);
        position: relative;
        overflow: hidden;
      }
      
      .banner-next .btn-1:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(179, 0, 0, 0.4);
      }
      
      .banner-next .swiper-button-next,
      .banner-next .swiper-button-prev {
        color: white;
        background: rgba(0, 0, 0, 0.3);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: all 0.3s ease;
        z-index: 10;
      }
      
      .banner-next .swiper-button-next:hover,
      .banner-next .swiper-button-prev:hover {
        background: rgba(179, 0, 0, 0.8);
        transform: scale(1.1);
      }
      
      .banner-next .swiper-pagination-bullet {
        background: rgba(255, 255, 255, 0.5);
        opacity: 1;
        width: 12px;
        height: 12px;
        margin: 0 8px;
        transition: all 0.3s ease;
      }
      
      .banner-next .swiper-pagination-bullet-active {
        background: #b30000;
        transform: scale(1.2);
      }
    `;
    
    if (!document.getElementById('banner-next-styles')) {
      document.head.appendChild(style);
    }

    createParticles();
    setIsInitialized(true);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <section className="banner-section banner-next p_relative">
      <div className="particle-container"></div>
      
      <Swiper {...swiperOptions} className="banner-carousel" ref={swiperRef}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="slide-item p_relative">
            <div className="swiper-slide">
              <div className="image-container">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={slide.id === 1}
                  quality={90}
                />
              </div>
              <div className="image-overlay"></div>
              
              <div className="content-outer">
                <div className="content-box">
                  <div className="slide-content">
                    <h4 className="slide-child" style={{
                      color: '#ffd700',
                      fontSize: '18px',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '2px'
                    }}>{slide.subtitle}</h4>
                    <h2 className="color_light typing-text" style={{
                      fontSize: '3.5rem',
                      fontWeight: '700',
                      marginBottom: '30px',
                      lineHeight: '1.2',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      color: 'white'
                    }}>
                      {slide.title}
                    </h2>
                    <div className="text slide-child" style={{
                      fontSize: '1.2rem',
                      marginBottom: '40px',
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: '1.6'
                    }}>
                      {slide.description}
                    </div>
                    <div className="link-box slide-child">
                      <Link href="/room" className="btn-1">
                        Book Room
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="swiper-button-prev h1p"></div>
      <div className="swiper-button-next h1n"></div>
      <div className="swiper-pagination"></div>
    </section>
  );
}
