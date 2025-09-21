"use client";
import { useEffect } from 'react';

export default function EnhancedScripts() {
  useEffect(() => {
    // Add CSS for enhanced animations (check if already exists)
    let enhancedStyle = document.getElementById('enhanced-scripts-style');
    if (!enhancedStyle) {
      enhancedStyle = document.createElement('style');
      enhancedStyle.id = 'enhanced-scripts-style';
      enhancedStyle.textContent = `
      /* Enhanced scroll animations */
      .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      
      .scroll-animate.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .animate-child {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
      }
      
      .animate-child.animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Enhanced button animations */
      .btn-1 {
        position: relative;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      
      .btn-1::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.6s;
      }
      
      .btn-1:hover::before {
        left: 100%;
      }
      
      /* Enhanced card hover effects */
      .card-hover {
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      
      .card-hover:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
      }
      
      /* Enhanced gradient backgrounds */
      .bg-gradient {
        background: linear-gradient(135deg, #b30000 0%, #ff6b35 100%);
      }
      
      /* Enhanced pattern backgrounds */
      .pattern-bg::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23b30000" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ff6b35" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%234ecdc4" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="%23ffd700" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        opacity: 0.3;
        animation: float 20s ease-in-out infinite;
        pointer-events: none;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      /* Enhanced particle effects */
      .particle-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }
      
      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: float 20s linear infinite;
      }
      
      /* Enhanced typing effect */
      .typing-effect {
        border-right: 2px solid #b30000;
        animation: blink 1s infinite;
      }
      
      @keyframes blink {
        0%, 50% { border-color: #b30000; }
        51%, 100% { border-color: transparent; }
      }
      
      /* Enhanced responsive design */
      @media (max-width: 768px) {
        .scroll-animate {
          transform: translateY(20px);
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
        }
      }
    `;
      document.head.appendChild(enhancedStyle);
    }

    // Initialize scroll animations for non-Swiper elements
    const initScrollAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate child elements with delay
            const children = entry.target.querySelectorAll('.animate-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate');
              }, (index + 1) * 200);
            });
          }
        });
      });

      // Observe all scroll-animate elements that are not in Swiper
      const elements = document.querySelectorAll('.scroll-animate:not(.swiper-slide .scroll-animate)');
      elements.forEach(el => observer.observe(el));
    };

    // Initialize after a delay
    setTimeout(initScrollAnimations, 1000);

    return () => {
      // Cleanup
      if (enhancedStyle.parentNode) {
        enhancedStyle.parentNode.removeChild(enhancedStyle);
      }
    };
  }, []);

  return null;
}
