"use client";
import Link from "next/link";
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
      // Trigger animations on init
      setTimeout(() => {
        const activeSlide = this.slides[this.activeIndex];
        if (activeSlide) {
          triggerSlideAnimations(activeSlide);
        }
      }, 500);
    },
    slideChange: function() {
      // Trigger animations on slide change
      setTimeout(() => {
        const activeSlide = this.slides[this.activeIndex];
        if (activeSlide) {
          triggerSlideAnimations(activeSlide);
        }
      }, 100);
    }
  }
};

export default function BannerSimple() {
  const swiperRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Global animation functions
  const createParticles = () => {
    const container = document.querySelector('.banner-simple .particle-container');
    if (!container) return;
    
    // Clear existing particles
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
    
    // Reset all animations first
    const content = slide.querySelector('.slide-content');
    const children = slide.querySelectorAll('.slide-child');
    const typingElement = slide.querySelector('.typing-text');
    
    // Reset classes
    if (content) content.classList.remove('animate');
    children.forEach(child => child.classList.remove('animate'));
    
    // Trigger animations with delay
    setTimeout(() => {
      if (content) {
        content.classList.add('animate');
      }
      
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('animate');
        }, (index + 1) * 150);
      });
      
      // Typing effect
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
    // Add CSS styles
    const style = document.createElement('style');
    style.id = 'banner-simple-styles';
    style.textContent = `
      .banner-simple {
        position: relative;
        overflow: hidden;
        height: 100vh;
      }
      
      .banner-simple .slide-content {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      
      .banner-simple .slide-content.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .banner-simple .slide-child {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
      }
      
      .banner-simple .slide-child.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .banner-simple .typing {
        border-right: 2px solid #b30000;
        animation: blink 1s infinite;
      }
      
      @keyframes blink {
        0%, 50% { border-color: #b30000; }
        51%, 100% { border-color: transparent; }
      }
      
      .banner-simple .particle-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }
      
      .banner-simple .particle {
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
      
      .banner-simple .swiper-slide {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #1a1a1a; /* Fallback color */
      }
      
      .banner-simple .swiper-slide::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%);
        z-index: 1;
      }
      
      .banner-simple .content-outer {
        position: relative;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      
      .banner-simple .content-box {
        max-width: 800px;
        padding: 40px 20px;
      }
      
      .banner-simple .btn-1 {
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
      
      .banner-simple .btn-1:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(179, 0, 0, 0.4);
      }
      
      .banner-simple .btn-1::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.6s;
      }
      
      .banner-simple .btn-1:hover::before {
        left: 100%;
      }
      
      /* Swiper Navigation */
      .banner-simple .swiper-button-next,
      .banner-simple .swiper-button-prev {
        color: white;
        background: rgba(0, 0, 0, 0.3);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: all 0.3s ease;
      }
      
      .banner-simple .swiper-button-next:hover,
      .banner-simple .swiper-button-prev:hover {
        background: rgba(179, 0, 0, 0.8);
        transform: scale(1.1);
      }
      
      /* Swiper Pagination */
      .banner-simple .swiper-pagination-bullet {
        background: rgba(255, 255, 255, 0.5);
        opacity: 1;
        width: 12px;
        height: 12px;
        margin: 0 8px;
        transition: all 0.3s ease;
      }
      
      .banner-simple .swiper-pagination-bullet-active {
        background: #b30000;
        transform: scale(1.2);
      }
      
      /* Responsive design */
      @media (max-width: 768px) {
        .banner-simple .slide-content h2 {
          font-size: 2.5rem !important;
        }
        .banner-simple .slide-content .text {
          font-size: 1rem !important;
        }
        .banner-simple .slide-content h4 {
          font-size: 16px !important;
        }
        .banner-simple .btn-1 {
          padding: 12px 30px !important;
          font-size: 14px !important;
        }
        .banner-simple .swiper-button-next,
        .banner-simple .swiper-button-prev {
          width: 40px;
          height: 40px;
        }
      }
      
      @media (max-width: 480px) {
        .banner-simple .slide-content h2 {
          font-size: 2rem !important;
        }
        .banner-simple .slide-content .text {
          font-size: 0.9rem !important;
        }
        .banner-simple .content-box {
          padding: 20px 15px;
        }
      }
    `;
    
    // Only add if not already present
    if (!document.getElementById('banner-simple-styles')) {
      document.head.appendChild(style);
    }

    // Initialize particles
    createParticles();
    setIsInitialized(true);

    return () => {
      // Cleanup
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <section className="banner-section banner-simple p_relative">
      <div className="particle-container"></div>
      
      <Swiper {...swiperOptions} className="banner-carousel" ref={swiperRef}>
        <SwiperSlide className="slide-item p_relative">
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url(/assets/images/main-slider/banner-1.jpg)"
            }}
          >
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
                  }}>Summer Vacations</h4>
                  <h2 className="color_light typing-text" style={{
                    fontSize: '3.5rem',
                    fontWeight: '700',
                    marginBottom: '30px',
                    lineHeight: '1.2',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    color: 'white'
                  }}>
                    Where Every Stay is a Story
                  </h2>
                  <div className="text slide-child" style={{
                    fontSize: '1.2rem',
                    marginBottom: '40px',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.6'
                  }}>
                    Where Nature Meets Luxury: Stay at Hotel Ashirwad
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
        
        <SwiperSlide className="slide-item p_relative">
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url(/assets/images/main-slider/banner-2.jpg)"
            }}
          >
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
                  }}>Summer Vacations</h4>
                  <h2 className="color_light typing-text" style={{
                    fontSize: '3.5rem',
                    fontWeight: '700',
                    marginBottom: '30px',
                    lineHeight: '1.2',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    color: 'white'
                  }}>
                    Experience Tranquility in Splendor
                  </h2>
                  <div className="text slide-child" style={{
                    fontSize: '1.2rem',
                    marginBottom: '40px',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.6'
                  }}>
                    Breathtaking Views and Unmatched Luxury at Hotel Ashirwad
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
        
        <SwiperSlide className="slide-item p_relative">
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url(/assets/images/main-slider/banner-3.jpg)"
            }}
          >
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
                  }}>Summer Vacations</h4>
                  <h2 className="color_light typing-text" style={{
                    fontSize: '3.5rem',
                    fontWeight: '700',
                    marginBottom: '30px',
                    lineHeight: '1.2',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    color: 'white'
                  }}>
                    Indulge in Unmatched Luxury
                  </h2>
                  <div className="text slide-child" style={{
                    fontSize: '1.2rem',
                    marginBottom: '40px',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.6'
                  }}>
                    Escape the Ordinary: Experience Premium Comfort at Hotel Ashirwad
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
        
        <SwiperSlide className="slide-item p_relative">
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url(/assets/images/main-slider/banner-4.jpg)"
            }}
          >
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
                  }}>Summer Vacations</h4>
                  <h2 className="color_light typing-text" style={{
                    fontSize: '3.5rem',
                    fontWeight: '700',
                    marginBottom: '30px',
                    lineHeight: '1.2',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    color: 'white'
                  }}>
                    Stay, Relax, Rejuvenate
                  </h2>
                  <div className="text slide-child" style={{
                    fontSize: '1.2rem',
                    marginBottom: '40px',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.6'
                  }}>
                    Your Perfect Getaway Awaits: Hotel Ashirwad
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
        
        <SwiperSlide className="slide-item p_relative">
          <div
            className="swiper-slide"
            style={{
              backgroundImage: "url(/assets/images/main-slider/banner-5.jpg)"
            }}
          >
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
                  }}>Summer Vacations</h4>
                  <h2 className="color_light typing-text" style={{
                    fontSize: '3.5rem',
                    fontWeight: '700',
                    marginBottom: '30px',
                    lineHeight: '1.2',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    color: 'white'
                  }}>
                    Luxury Hotel For Vacation
                  </h2>
                  <div className="text slide-child" style={{
                    fontSize: '1.2rem',
                    marginBottom: '40px',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.6'
                  }}>
                    Relax in Style: Hotel Ashirwad – Where Luxury Meets Tranquility
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
      </Swiper>
      
      {/* Navigation buttons */}
      <div className="swiper-button-prev h1p"></div>
      <div className="swiper-button-next h1n"></div>
      
      {/* Pagination */}
      <div className="swiper-pagination"></div>
    </section>
  );
}
