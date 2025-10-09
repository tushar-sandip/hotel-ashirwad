'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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
            slidesPerView: 2,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(/assets/Rooms/room11.jpeg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details-luxury">Luxury Double Bed Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">₹3700.0</span>/night</p>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div>
                                <h4 className="room-2-title mb_4"><Link href="/room-details-luxury">Luxury Double Bed Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">₹3700.0</span>/night</p>
                                <p className="room-2-text mb_30">Experience elevated comfort in our Luxury Double Bed Room, thoughtfully designed for relaxation and style. Featuring a spacious double bed, elegant décor, and premium amenities, the room includes air conditioning, high-speed Wi-Fi, a smart TV, a work desk, and a modern ensuite bathroom. Perfect for couples or two guests seeking a luxurious and restful stay.</p>
                                <div className="link-btn"><Link href="/room-details-luxury" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(/assets/Rooms/room12.jpeg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details-VIP">VIP Single Bed Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">₹3700.0</span>/night</p>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div>
                                <h4 className="room-2-title mb_4"><Link href="/room-details-VIP">VIP Single Bed Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">₹3700.0</span>/night</p>
                                <p className="room-2-text mb_30">Enjoy a blend of comfort and style in our VIP Single Bed Room, ideal for solo travelers. The room features a cozy single bed, air conditioning, free Wi-Fi, a smart TV, a work desk, and a private bathroom with premium toiletries — perfect for a relaxed and refined stay.</p>
                                <div className="link-btn"><Link href="/room-details-VIP" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(/assets/Rooms/room9.jpeg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details-delux">Delux Single Bed Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">₹3200.0</span>/night</p>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div>
                                <h4 className="room-2-title mb_4"><Link href="/room-details-delux">Delux Single Bed Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">₹3200.0</span>/night</p>
                                <p className="room-2-text mb_30">Designed for comfort and convenience, our Deluxe Single Bed Room offers a spacious layout with a comfortable single bed, modern furnishings, and calming interiors. Enjoy amenities like air conditioning, high-speed Wi-Fi, a flat-screen TV, a work desk, and a private bathroom — ideal for solo travelers seeking a relaxed and pleasant stay.</p>
                                <div className="link-btn"><Link href="/room-details-delux" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(/assets/Rooms/room10.jpeg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details-single">Single Bed Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">₹2700.0</span>/night</p>
                                </div>
                                <div className="room-2-content2">
                                <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div>
                                <h4 className="room-2-title mb_4"><Link href="/room-details-single">Single Bed Room</Link></h4>
                                <p className="room-2-meta-info">Start from <span className="theme-color">₹2700.0</span>/night</p>
                                <p className="room-2-text mb_30">Perfect for solo travelers, our Single Bed Room offers a clean, comfortable space with all the essentials. It features a cozy single bed, air conditioning, Wi-Fi, a TV, and a private bathroom — ideal for a budget-friendly and restful stay.</p>
                                <div className="link-btn"><Link href="/room-details-single" className="btn-1 btn-alt">Book Now <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
            </Swiper>

            <div className="owl-nav">
                <button type="button" className="owl-prev h1p">
                    <span>‹</span>
                </button>
                <button type="button" className="owl-next h1n">
                    <span>›</span>
                </button>
            </div>
        </>
    )
}
