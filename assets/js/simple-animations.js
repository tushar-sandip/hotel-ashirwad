// Simple and Reliable Animations for Hotel Ashirwad
(function() {
    'use strict';
    
    // Check if already initialized
    if (window.simpleAnimationsInitialized) {
        return;
    }
    window.simpleAnimationsInitialized = true;

    // Wait for DOM to be ready
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function() {
        initAnimations();
    });

    function initAnimations() {
        // Add CSS for animations
        addAnimationStyles();
        
        // Initialize scroll animations
        initScrollAnimations();
        
        // Initialize hover effects
        initHoverEffects();
        
        // Initialize particle effect
        initParticleEffect();
        
        // Initialize typing effect
        initTypingEffect();
        
        // Watch for Swiper changes
        watchSwiperChanges();
    }

    function addAnimationStyles() {
        // Check if styles already exist
        if (document.getElementById('simple-animations-styles')) {
            return;
        }

        const style = document.createElement('style');
        style.id = 'simple-animations-styles';
        style.textContent = `
            /* Scroll animations */
            .scroll-animate {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s ease-out;
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
            
            /* Typing effect */
            .typing-effect {
                border-right: 2px solid #b30000;
                animation: blink 1s infinite;
            }
            
            @keyframes blink {
                0%, 50% { border-color: #b30000; }
                51%, 100% { border-color: transparent; }
            }
            
            /* Particle effect */
            .particle {
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
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
            
            /* Enhanced button hover */
            .btn-1 {
                transition: all 0.3s ease;
            }
            
            .btn-1:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            }
            
            /* Card hover effects */
            .card-hover {
                transition: all 0.3s ease;
            }
            
            .card-hover:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            }
            
            /* Swiper specific animations */
            .swiper-slide .scroll-animate {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s ease-out;
            }
            
            .swiper-slide-active .scroll-animate,
            .swiper-slide .scroll-animate.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            .swiper-slide .animate-child {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease-out;
            }
            
            .swiper-slide-active .animate-child,
            .swiper-slide .animate-child.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Ensure typing effect works in Swiper */
            .swiper-slide .typing-effect {
                border-right: 2px solid #b30000;
                animation: blink 1s infinite;
            }
        `;
        
        document.head.appendChild(style);
    }

    function initScrollAnimations() {
        // Create intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Animate child elements with delay
                    const children = entry.target.querySelectorAll('.animate-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate');
                        }, index * 200);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all scroll-animate elements
        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    }

    function initHoverEffects() {
        // Button hover effects
        document.querySelectorAll('.btn-1').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Card hover effects
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    function initParticleEffect() {
        const particleContainer = document.querySelector('.particle-container');
        if (!particleContainer) return;
        
        // Create particles
        for (let i = 0; i < 30; i++) {
            createParticle(particleContainer);
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and animation
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 10 + 10;
        
        particle.style.cssText = `
            left: ${left}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;
        
        container.appendChild(particle);
    }

    function initTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');
        
        typingElements.forEach(element => {
            // Skip if already processed
            if (element.dataset.typingProcessed) return;
            element.dataset.typingProcessed = 'true';
            
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid #b30000';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    element.style.borderRight = 'none';
                }
            };
            
            // Start typing when element is visible or after delay
            if (element.closest('.swiper-slide-active') || element.closest('.swiper-slide')) {
                setTimeout(typeWriter, 800);
            } else {
                setTimeout(typeWriter, 500);
            }
        });
    }

    // Re-initialize typing effect for Swiper slides
    function reinitTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');
        typingElements.forEach(element => {
            if (!element.dataset.typingProcessed) {
                const text = element.textContent;
                element.textContent = '';
                element.style.borderRight = '2px solid #b30000';
                
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    } else {
                        element.style.borderRight = 'none';
                    }
                };
                
                setTimeout(typeWriter, 200);
                element.dataset.typingProcessed = 'true';
            }
        });
    }

    // Watch for Swiper slide changes
    function watchSwiperChanges() {
        const swiperContainer = document.querySelector('.banner-carousel');
        if (swiperContainer) {
            // Use MutationObserver to watch for class changes
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        const target = mutation.target;
                        if (target.classList.contains('swiper-slide-active')) {
                            // Re-trigger animations for active slide
                            setTimeout(() => {
                                const animateElements = target.querySelectorAll('.scroll-animate, .animate-child');
                                animateElements.forEach(el => {
                                    el.classList.add('animate');
                                });
                                reinitTypingEffect();
                            }, 100);
                        }
                    }
                });
            });
            
            // Observe all slides
            const slides = swiperContainer.querySelectorAll('.swiper-slide');
            slides.forEach(slide => {
                observer.observe(slide, { attributes: true });
            });
        }
    }
})();
