"use client";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

export default function NewBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const swiperRef = useRef(null);

  // Animation function
  const animateSlide = (slideIndex) => {
    setIsAnimating(true);
    setCurrentSlide(slideIndex);
    
    // Reset animation after a short delay
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // Typing effect
  const typeText = (element, text, speed = 100) => {
    if (!element) return;
    
    element.textContent = '';
    element.classList.add('typing');
    
    let i = 0;
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.remove('typing');
      }
    };
    
    setTimeout(type, 500);
  };

  // Create particles
  const createParticles = () => {
    const container = document.querySelector('.particle-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      container.appendChild(particle);
    }
  };

  useEffect(() => {
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
        background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%);
        z-index: 2;
      }
      
      .new-banner .content {
        position: relative;
        z-index: 3;
        text-align: center;
        max-width: 800px;
        padding: 40px 20px;
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease-out;
      }
      
      .new-banner .content.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .new-banner .subtitle {
        color: #ffd700;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
      }
      
      .new-banner .subtitle.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .new-banner .title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 30px;
        line-height: 1.2;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        color: white;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
      }
      
      .new-banner .title.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .new-banner .description {
        font-size: 1.2rem;
        margin-bottom: 40px;
        color: rgba(255,255,255,0.9);
        line-height: 1.6;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
      }
      
      .new-banner .description.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .new-banner .btn-container {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
      }
      
      .new-banner .btn-container.animate {
        opacity: 1;
        transform: translateY(0);
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
      
      .new-banner .typing {
        border-right: 2px solid #b30000;
        animation: blink 1s infinite;
      }
      
      @keyframes blink {
        0%, 50% { border-color: #b30000; }
        51%, 100% { border-color: transparent; }
      }
      
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
    `;
    
    if (!document.getElementById('new-banner-styles')) {
      document.head.appendChild(style);
    }

    // Initialize particles
    createParticles();

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  // Handle slide change
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    animateSlide(activeIndex);
    createParticles();
    
    // Trigger typing effect for title
    setTimeout(() => {
      const titleElement = document.querySelector('.new-banner .title.animate');
      if (titleElement) {
        typeText(titleElement, slides[activeIndex].title);
      }
    }, 500);
  };

  // Initialize first slide
  useEffect(() => {
    const timer = setTimeout(() => {
      animateSlide(0);
      createParticles();
      
      // Trigger typing effect for first slide
      setTimeout(() => {
        const titleElement = document.querySelector('.new-banner .title.animate');
        if (titleElement) {
          typeText(titleElement, slides[0].title);
        }
      }, 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="new-banner">
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
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper-slide">
              <div className="image-container">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                  quality={90}
                />
              </div>
              <div className="image-overlay"></div>
              
              <div className={`content ${isAnimating ? 'animate' : ''}`}>
                <h4 className={`subtitle ${isAnimating ? 'animate' : ''}`}>
                  {slide.subtitle}
                </h4>
                <h2 className={`title ${isAnimating ? 'animate' : ''}`}>
                  {slide.title}
                </h2>
                <p className={`description ${isAnimating ? 'animate' : ''}`}>
                  {slide.description}
                </p>
                <div className={`btn-container ${isAnimating ? 'animate' : ''}`}>
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
