'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper-container single-item-carousel">
                <SwiperSlide className="swiper-slide">
                    <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/gallery/room4.jpg)' }}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/gallery/room9.jpg)' }}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/gallery/room3.jpg)' }}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                            <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/gallery/room5.jpg)' }}>
                            </div>
                </SwiperSlide> 
                <SwiperSlide className="swiper-slide">
                            <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/gallery/room6.jpg)' }}>
                            </div>
                </SwiperSlide> 
                <SwiperSlide className="swiper-slide">
                            <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/gallery/room7.jpg)' }}>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                            <div className="project-1-image" style={{ backgroundImage: 'url(assets/images/gallery/room8.jpg)' }}>
                            </div>
                </SwiperSlide>                        
            </Swiper>
        </>
    )
}

