'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from './TestimonialSlider1.module.scss';

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
            <Swiper {...swiperOptions} className={styles['slider1-swiper-container']}>
                <SwiperSlide className={styles['slider1-slide']}>
                    <div className={styles['slider1-image']} style={{ backgroundImage: 'url(assets/images/gallery/room4.jpg)' }} />
                </SwiperSlide>
                <SwiperSlide className={styles['slider1-slide']}>
                    <div className={styles['slider1-image']} style={{ backgroundImage: 'url(assets/images/gallery/room9.jpg)' }} />
                </SwiperSlide>
                <SwiperSlide className={styles['slider1-slide']}>
                    <div className={styles['slider1-image']} style={{ backgroundImage: 'url(assets/images/gallery/room3.jpg)' }} />
                </SwiperSlide>
                <SwiperSlide className={styles['slider1-slide']}>
                    <div className={styles['slider1-image']} style={{ backgroundImage: 'url(assets/images/gallery/room5.jpg)' }} />
                </SwiperSlide>
                <SwiperSlide className={styles['slider1-slide']}>
                    <div className={styles['slider1-image']} style={{ backgroundImage: 'url(assets/images/gallery/room6.jpg)' }} />
                </SwiperSlide>
                <SwiperSlide className={styles['slider1-slide']}>
                    <div className={styles['slider1-image']} style={{ backgroundImage: 'url(assets/images/gallery/room7.jpg)' }} />
                </SwiperSlide>
                <SwiperSlide className={styles['slider1-slide']}>
                    <div className={styles['slider1-image']} style={{ backgroundImage: 'url(assets/images/gallery/room8.jpg)' }} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

