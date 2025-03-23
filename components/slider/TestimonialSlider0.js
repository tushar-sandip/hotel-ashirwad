'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const blogItems = [
    {
        title: "Chas Kaman Dam",
        location: "Khed, Pune",
        excerpt: "A beautiful natural attraction perfect for a day out.",
        imgSrc: "assets/images/main-slider/dam.jpg"
    },
    {
        title: "Shivneri Fort",
        location: "Junnar, Pune",
        excerpt: "A historic fort with stunning views and rich history.",
        imgSrc: "assets/images/main-slider/shivnerifort.jpg"
    },
    {
        title: "Dimbhe Dam",
        location: "Ghod River near Ambegaon Pune Maha",
        excerpt: "A beautiful natural attraction perfect for a day out.",
        imgSrc: "assets/images/main-slider/dam1.png"
    },
    {
        title: "Bhimashankar Temple",
        location: "Bhimashankar, Pune",
        excerpt: "A revered temple known for its spiritual significance and beautiful architecture.",
        imgSrc: "assets/images/main-slider/shive.jpg"
    },
    {
        title: "Lenyadri Temple",
        location: "Lenyadri, Pune",
        excerpt: "A beautiful temple known for its scenic location and spiritual ambiance.",
        imgSrc: "assets/images/main-slider/lenyadricaves.jpg"
    },
    {
        title: "Ozar Temple",
        location: "Ozar, Pune",
        excerpt: "A significant temple known for its architecture and religious importance.",
        imgSrc: "assets/images/main-slider/ozar.jpg"
    },
];

const swiperOptions = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function TestimonialSlider0() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {blogItems.map((item, index) => (
                    <SwiperSlide key={index} className="slide">
                        <div className="blog-1-block" style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
                            <div className="blog-1-image" style={{ flex: '1' }}>
                                <a href={item.link} aria-label={`Read more about ${item.title}`}>
                                    <img src={item.imgSrc} alt={item.title} className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </a>
                            </div>
                            <div className="blog-1-bottom-content" style={{ flex: '1', padding: '15px' }}>
                                <h4 className="blog-1-title">
                                    <a href={item.link} aria-label={`Read more about ${item.title}`}>{item.title}</a>
                                </h4>
                                <div className="blog-1-location">Location: {item.location}</div>
                                <p className="blog-1-excerpt">{item.excerpt}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
