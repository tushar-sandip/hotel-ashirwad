"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
};

export default function Banner() {
  useEffect(() => {
    // Add animation styles
    const style = document.createElement('style');
    style.id = 'banner-animations';
    style.textContent = `
      .banner-section .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
      }
      .banner-section .scroll-animate.animate {
        opacity: 1;
        transform: translateY(0);
      }
      .banner-section .animate-child {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
      }
      .banner-section .animate-child.animate {
        opacity: 1;
        transform: translateY(0);
      }
      .banner-section .typing-effect {
        border-right: 2px solid #b30000;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { border-color: #b30000; }
        51%, 100% { border-color: transparent; }
      }
    `;
    
    // Only add if not already present
    if (!document.getElementById('banner-animations')) {
      document.head.appendChild(style);
    }

    // Function to trigger animations
    const triggerAnimations = (slide) => {
      if (!slide) return;
      
      // Reset all animations first
      const allElements = slide.querySelectorAll('.scroll-animate, .animate-child');
      allElements.forEach(el => {
        el.classList.remove('animate');
      });
      
      // Trigger animations with delay
      setTimeout(() => {
        const scrollAnimate = slide.querySelector('.scroll-animate');
        if (scrollAnimate) {
          scrollAnimate.classList.add('animate');
        }
        
        const childElements = slide.querySelectorAll('.animate-child');
        childElements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('animate');
          }, (index + 1) * 200);
        });
      }, 100);
    };

    // Function to handle typing effect
    const initTypingEffect = (slide) => {
      const typingElement = slide.querySelector('.typing-effect');
      if (!typingElement || typingElement.dataset.typingProcessed) return;
      
      typingElement.dataset.typingProcessed = 'true';
      const text = typingElement.textContent;
      typingElement.textContent = '';
      typingElement.style.borderRight = '2px solid #b30000';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        } else {
          typingElement.style.borderRight = 'none';
        }
      };
      
      setTimeout(typeWriter, 500);
    };

    // Initialize first slide
    const initFirstSlide = () => {
      const activeSlide = document.querySelector('.swiper-slide-active');
      if (activeSlide) {
        triggerAnimations(activeSlide);
        initTypingEffect(activeSlide);
      }
    };

    // Watch for slide changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.classList.contains('swiper-slide-active')) {
            triggerAnimations(target);
            initTypingEffect(target);
          }
        }
      });
    });

    // Start observing after Swiper is initialized
    const startObserving = () => {
      const slides = document.querySelectorAll('.swiper-slide');
      slides.forEach(slide => {
        observer.observe(slide, { attributes: true });
      });
    };

    // Initialize after a delay
    setTimeout(() => {
      initFirstSlide();
      startObserving();
    }, 1000);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="banner-section p_relative">
        <div className="particle-container"></div>
        <Swiper {...swiperOptions} className="banner-carousel">
          <SwiperSlide className="slide-item p_relative">
            <div
              className="swiper-slide"
              style={{
                backgroundImage: "url(assets/images/main-slider/banner-1.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner scroll-animate">
                    <h4 className="animate-child">Summer Vacations</h4>
                    <h2 className="color_light typing-effect">
                    Where Every Stay is  <br />a Story
                     
                    </h2>
                    <div className="text animate-child">
                    Where Nature Meets Luxury: Stay {" "}
                      <br />at Hotel Ashirwad
                    </div>
                    <div className="link-box animate-child">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
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
                backgroundImage: "url(assets/images/main-slider/banner-2.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner scroll-animate">
                    <h4 className="animate-child">Summer Vacations</h4>
                    <h2 className="color_light typing-effect">
                    Experience Tranquility in<br />Splendor
                    </h2>
                    <div className="text animate-child">
                    Breathtaking Views and Unmatched Luxury at Hotel Ashirwad{" "}
                      <br /> at Hotel Ashirwad
                    </div>
                    <div className="link-box animate-child">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
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
                backgroundImage: "url(assets/images/main-slider/banner-3.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner scroll-animate">
                    <h4 className="animate-child">Summer Vacations</h4>
                    <h2 className="color_light typing-effect">
                    Indulge in Unmatched<br /> Luxury
                     
                    </h2>
                    <div className="text animate-child">
                    Escape the Ordinary: Experience Premium Comfort{" "}
                      <br /> at Hotel Ashirwad
                    </div>
                    <div className="link-box animate-child">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
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
                backgroundImage: "url(assets/images/main-slider/banner-4.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner scroll-animate">
                    <h4 className="animate-child">Summer Vacations</h4>
                    <h2 className="color_light typing-effect">
                    Stay, Relax, <br /> Rejuvenate.
                    </h2>
                    <div className="text animate-child">
                    Your Perfect Getaway Awaits: Hotel Ashirwad{" "}
                     
                    </div>
                    <div className="link-box animate-child">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
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
                backgroundImage: "url(assets/images/main-slider/banner-5.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner scroll-animate">
                    <h4 className="animate-child">Summer Vacations</h4>
                    <h2 className="color_light typing-effect">
                    Luxury Hotel For <br /> Vacation.
                    </h2>
                    <div className="text animate-child">
                    Relax in Style: Hotel Ashirwad – Where Luxury{" "}
                      <br /> Meets Tranquility
                    </div>
                    <div className="link-box animate-child">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
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
                backgroundImage: "url(assets/images/main-slider/banner-6.jpg)",
              }}
            >
              <div className="content-outer">
                <div className="content-box justify-content-center text-center">
                  <div className="inner scroll-animate">
                    <h4 className="animate-child">Summer Vacations</h4>
                    <h2 className="color_light typing-effect">
                      Your Home For <br /> Vacation.
                    </h2>
                    <div className="text animate-child">
                    A Serene Escape: Experience Ultimate Luxury {" "}
                      <br /> at Hotel Ashirwad
                    </div>
                    <div className="link-box animate-child">
                      <Link href="/room" className="btn-1">
                        Book Room <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
