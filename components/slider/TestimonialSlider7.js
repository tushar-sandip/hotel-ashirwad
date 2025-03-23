'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// All testimonials data with ratings
const testimonials = [
    {
        name: "Abhijeet Nalawade",
        customer: "Customer",
        review: "Delicious and Affordable Lunch at Hotel Ashirwad! My wife and I had lunch at Hotel Ashirwad today and were thoroughly impressed. We ordered Masala Papad, Shev Bhaji, and Butter Roti, and every single dish was absolutely amazing and delicious. The flavors were incredible, and the quality of the food was top-notch. What truly surprised us was the incredibly affordable price point. For the quality and taste, it was an absolute steal. Highly recommend! If you're looking for a delicious and budget-friendly meal, Hotel Ashirwad is a must-try!",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Abhijeet Nalawade",
        rating: 5
    },
    {
        name: "Mitesh Kharpude",
        customer: "Customer",
        review: "You will love the atmosphere more in monsoon, must try their misal it was served piping hot, spicy yet tasty!",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Mitesh Kharpude",
        rating: 4
    },
    {
        name: "Swati B",
        customer: "Customer",
        review: "I recently had misal at Ashirwad, and it was a delightful experience! The spicy curry (kat) had a rich flavor that hit just the right notes. The combination of sprouts, farsan, and fresh garnishes like onions, coriander, and a squeeze of green lemon created a perfect balance of taste and texture. Service is quick and respectful.",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Swati B",
        rating: 5
    },
    {
        name: "Dr. Mohina S Kulkarni",
        customer: "Customer",
        review: "Shraddha the owner along with son harshad welcomed us with a smile. Amol the attendant was superb. Palak paneer was super. Dal Khichdi tickled the taste buds. Humble atmosphere. Rotis service hot and prompt. Onion..lemon tasted fresh. Finger bowls provided..will recommend it to visitors of Bhimashankar temple.",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Dr. Mohina S Kulkarni",
        rating: 5
    },
    {
        name: "Dinesh Kumar Gupta",
        customer: "Customer",
        review: "Nice tasty food with reasonable price, not any other restaurants like this in way to bheemashankar jyotirlinga... Thanks.",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Dinesh Kumar Gupta",
        rating: 4
    },
    {
        name: "Yogeh Kale",
        customer: "Customer",
        review: "It's very good place at Ghodegaon for breakfast, lunch and dinner. They have speciality in Misal pav. You must try this once you visit Ghodegaon. I must tell you will actually love it. It's actually spicy so you will enjoy if you like spicy food. But don't worry if you don't eat spicy because they also serve curd with it. So the people who don't eat spicy can also enjoy this menu.",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Yogeh Kale",
        rating: 4
    },
    {
        name: "Pavan Lilhare",
        customer: "Customer",
        review: "Pure veg. Dear tourist's visit this place for quality food if you want taste is good and price is also low as per my knowledge. This is the last place to eat good food while driving through bhimashankar way. Decision is your's. Happy journey. Har har mahadev.",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Pavan Lilhare",
        rating: 5
    },
    {
        name: "Sachin Talekar",
        customer: "Customer",
        review: "Excellent Service, ample space for parking the vehicle, staff is too polite and supportive, minimal waiting time after order. Food is delicious and tasty. I would refer this hotel to enjoy delicious taste of misal paav.",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Sachin Talekar",
        rating: 5
    },
    {
        name: "Varun Pandey",
        customer: "Customer",
        review: "Very good food and services. The staff is good in Behaviour. The restaurant is cleaned. I have ordered kaju panner masala and dal tadka both very tasty and the best part is very fast service. I will visit again. Good job.",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Varun Pandey",
        rating: 4
    },
    {
        name: "Ganesh Gavhane",
        customer: "Customer",
        review: "You find fantastic dishes for Nashta, Lunch and Dinner... Special Dish in Nashta is Misal Paav, actually it's a great test here...and you find a Veg Dishes for Lunch and Dinner...You surely try here is Paneer Chilli and Veg Biryani...other dishes also fantastic...",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Ganesh Gavhane",
        rating: 5
    },
    {
        name: "Tejas Pingale",
        customer: "Customer",
        review: "Great place to eat for vegetarians with family or friends. You can enjoy tasty 'Misal' here. Must visit when you're passing.",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "Tejas Pingale",
        rating: 4
    },
    {
        name: "KETAN DAREKAR",
        customer: "Customer",
        review: "Greate quality food with affordable price, must visit if u r going to bhimashankar jyotirling temple.",
        imgSrc: "assets/images/icons/avatar.jpg",
        alt: "KETAN DAREKAR",
        rating: 5
    },
];

// Function to render stars based on rating
const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating); // 5 stars total
};

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider7() {
    return (
        <>

            <Swiper {...swiperOptions} className="swiper-container single-item-carousel">
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <div className="testimonial-1-block">
                            <div className="testimonial-1-quote-icon"><i className="icon-18"></i></div>
                            <p className="testimonial-1-review-desc">
                                "{testimonial.review}"
                            </p>
                            <h4 className="testimonial-1-name">{testimonial.name}</h4>
                            <h6 className="testimonial-1-review-desc">{testimonial.customer}</h6>
                            <div className="testimonial-1-rating">{renderStars(testimonial.rating)}</div>
                            <div className="testimonial-1-author-thumb">
                                <img src={testimonial.imgSrc} alt={testimonial.alt} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="owl-nav">
                    <button type="button" className="owl-prev h1p">
                        <span>‹</span>
                    </button>
                    <button type="button" className="owl-next h1n">
                        <span>›</span>
                    </button>
                </div>
            </Swiper>

        </>
    )
}
