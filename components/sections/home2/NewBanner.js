"use client";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/assets/images/compressed/banner-1.jpg",
    title: "Where Every Stay is a Story",
    subtitle: "Ghodegaon, near Manchar • Close to Bhimashankar",
    description: "Where Nature Meets Luxury: Stay at Hotel Ashirwad"
  },
  {
    id: 2,
    image: "/assets/images/compressed/banner-2.jpg",
    title: "Experience Tranquility in Splendor",
    subtitle: "Ghodegaon, Pune – Pure Veg Lodging",
    description: "Breathtaking Views and Unmatched Luxury at Hotel Ashirwad"
  },
  {
    id: 3,
    image: "/assets/images/compressed/banner-3.jpg",
    title: "Indulge in Unmatched Luxury",
    subtitle: "Convenient Base for Bhimashankar",
    description: "Escape the Ordinary: Experience Premium Comfort at Hotel Ashirwad"
  }
];

export default function NewBanner() {
  const swiperRef = useRef(null);

  // No text animation – content is always visible

  // Create particles
  const createParticles = () => {
    const container = document.querySelector('.particle-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 6 : 12;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 18) + 's';
      container.appendChild(particle);
    }
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Add CSS
    const style = document.createElement('style');
    style.id = 'new-banner-styles';
    style.textContent = `
      .new-banner {
        position: relative;
        height: 100vh;
        overflow: hidden;
      }
      
      .new-banner .swiper {
        height: 100%;
      }
      
      .new-banner .swiper-slide {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #1a1a1a;
      }
      
      .new-banner .image-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      
      .new-banner .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 70%);
        z-index: 2;
      }
      
      .new-banner .content {
        position: relative;
        z-index: 3;
        text-align: center;
        max-width: 800px;
        padding: 40px 20px;
        opacity: 1;
        transform: none;
        transition: none;
      }
      
      .new-banner .subtitle {
        color: #ffd700;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
        opacity: 1;
        transform: none;
        transition: none;
      }
      
      .new-banner .title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 30px;
        line-height: 1.2;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        color: white;
        opacity: 1;
        transform: none;
        transition: none;
      }
      
      .new-banner .description {
        font-size: 1.2rem;
        margin-bottom: 40px;
        color: rgba(255,255,255,0.9);
        line-height: 1.6;
        opacity: 1;
        transform: none;
        transition: none;
      }
      
      .new-banner .btn-container {
        opacity: 1;
        transform: none;
        transition: none;
      }
      
      .new-banner .btn-1 {
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
      
      .new-banner .btn-1:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(179, 0, 0, 0.4);
      }
      
      .new-banner .btn-1::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.6s;
      }
      
      .new-banner .btn-1:hover::before {
        left: 100%;
      }
      
      /* typing effect removed */
      
      .new-banner .particle-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }
      
      .new-banner .particle {
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
      
      .new-banner .swiper-button-next,
      .new-banner .swiper-button-prev {
        color: white;
        background: rgba(0, 0, 0, 0.3);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        transition: all 0.3s ease;
        z-index: 10;
      }
      
      .new-banner .swiper-button-next:hover,
      .new-banner .swiper-button-prev:hover {
        background: rgba(179, 0, 0, 0.8);
        transform: scale(1.1);
      }
      
      .new-banner .swiper-pagination-bullet {
        background: rgba(255, 255, 255, 0.5);
        opacity: 1;
        width: 12px;
        height: 12px;
        margin: 0 8px;
        transition: all 0.3s ease;
      }
      
      .new-banner .swiper-pagination-bullet-active {
        background: #b30000;
        transform: scale(1.2);
      }
      
      @media (max-width: 768px) {
        .new-banner .title {
          font-size: 2.5rem;
        }
        .new-banner .description {
          font-size: 1rem;
        }
        .new-banner .subtitle {
          font-size: 16px;
        }
        .new-banner .btn-1 {
          padding: 12px 30px;
          font-size: 14px;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .new-banner .content,
        .new-banner .subtitle,
        .new-banner .title,
        .new-banner .description,
        .new-banner .btn-container {
          transition: none !important;
          transform: none !important;
          opacity: 1 !important;
        }
        .new-banner .particle { display: none !important; }
      }
    `;
    
    if (!document.getElementById('new-banner-styles')) {
      document.head.appendChild(style);
    }

    // Initialize particles
    if (!reduceMotion) createParticles();

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  // Handle slide change
  const handleSlideChange = () => {
    createParticles();
  };

  // Initialize first slide
  useEffect(() => {
    createParticles();
  }, []);

  return (
    <section className="new-banner" role="region" aria-label="Hotel Ashirwad promotional banner">
      <div className="particle-container"></div>
      
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSlideChange={handleSlideChange}
        className="banner-swiper"
        ref={swiperRef}
        aria-roledescription="carousel"
        aria-live="polite"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper-slide">
              <div className="image-container">
                <Image
                  src={slide.image}
                  alt={`${slide.title} – Hotel Ashirwad, Ghodegaon near Manchar and Bhimashankar`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                />
              </div>
              <div className="image-overlay"></div>
              
              <div className={`content`}>
                <h4 className={`subtitle`}>
                  {slide.subtitle}
                </h4>
                <h2 className={`title`}>
                  {slide.title}
                </h2>
                <p className={`description`}>
                  {slide.description}
                </p>
                <div className={`btn-container`}>
                  <Link href="/room" className="btn-1">
                    Book Room
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </section>
  );
}
