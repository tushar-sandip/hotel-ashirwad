// Enhanced Animations and Interactive Effects for Hotel Ashirwad
(function() {
    'use strict';
    
    // Check if already initialized
    if (window.enhancedAnimationsInitialized) {
        return;
    }
    window.enhancedAnimationsInitialized = true;

    document.addEventListener('DOMContentLoaded', function() {
        // Initialize all animations
        initScrollAnimations();
        initParallaxEffects();
        initHoverEffects();
        initCounterAnimations();
        initTypingEffect();
        initParticleEffect();
        initSmoothScrolling();
        initLazyLoading();
        initBannerEffects();
        initMobileMenu();
        initFormEnhancements();
    });

    // Scroll-triggered animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Stagger animation for child elements
                    const children = entry.target.querySelectorAll('.animate-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe all elements with scroll-animate class
        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });
    }

    // Parallax scrolling effects
    function initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.parallax || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Enhanced hover effects
    function initHoverEffects() {
        // Card hover effects
        const cards = document.querySelectorAll('.feature-2-block, .room-card, .testimonial-1-block-wrap');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        });

        // Button hover effects
        const buttons = document.querySelectorAll('.btn-1');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Counter animations
    function initCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        counter.textContent = Math.floor(current);
                    }, 16);
                    
                    counterObserver.unobserve(counter);
                }
            });
        });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    // Typing effect for banner text
    function initTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');
        
        typingElements.forEach(element => {
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
            
            // Start typing when element is visible
            const typingObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeWriter();
                        typingObserver.unobserve(entry.target);
                    }
                });
            });
            
            typingObserver.observe(element);
        });
    }

    // Particle effect for background
    function initParticleEffect() {
        const particleContainer = document.querySelector('.particle-container');
        if (!particleContainer) return;
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            createParticle(particleContainer);
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 10}s;
        `;
        
        container.appendChild(particle);
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Lazy loading for images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // Enhanced banner slider effects
    function initBannerEffects() {
        const bannerSlides = document.querySelectorAll('.banner-section .swiper-slide');
        
        bannerSlides.forEach((slide, index) => {
            slide.style.animationDelay = `${index * 0.5}s`;
        });
    }

    // Mobile menu enhancements
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                this.classList.toggle('active');
            });
        }
    }

    // Form validation enhancements
    function initFormEnhancements() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', function() {
                    if (this.value === '') {
                        this.parentElement.classList.remove('focused');
                    }
                });
            });
        });
    }

    // Add CSS for animations (check if already exists)
    let animationStyle = document.getElementById('enhanced-animations-style');
    if (!animationStyle) {
        animationStyle = document.createElement('style');
        animationStyle.id = 'enhanced-animations-style';
        animationStyle.textContent = `
            .particle {
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
            
            .lazy {
                opacity: 0;
                transition: opacity 0.3s;
            }
            
            .loaded {
                opacity: 1;
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
            
            .mobile-menu {
                transform: translateX(100%);
                transition: transform 0.3s ease-in-out;
            }
            
            .mobile-menu.active {
                transform: translateX(0);
            }
            
            .form-group.focused label {
                transform: translateY(-20px) scale(0.8);
                color: #b30000;
            }
        `;
        document.head.appendChild(animationStyle);
    }
})();
