'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useRef } from 'react'
import TestimonialSlider7 from '@/components/slider/TestimonialSlider7'


export default function Home() {
    const [isOpen, setOpen] = useState(false)
    // Reservation form refs
    const checkinRef = useRef()
    const checkoutRef = useRef()
    const roomsRef = useRef()
    const adultsRef = useRef()
    const childrenRef = useRef()

    // WhatsApp number (replace with real one)
    const whatsappNumber = '+919130375375'

    // Handle reservation form submit
    const handleReservation = (e) => {
        e.preventDefault()
        const checkin = checkinRef.current.value
        const checkout = checkoutRef.current.value
        const rooms = roomsRef.current.value
        const adults = adultsRef.current.value
        const children = childrenRef.current.value
        const message = `Hello, I would like to make a reservation at Hotel Ashirwad.\n\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nRooms: ${rooms}\nAdults: ${adults}\nChildren: ${children}`
        const url = `https://wa.me/${whatsappNumber.replace('+','')}/?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="About Us">
                {/* Hero Section */}
                <section className="hero-section position-relative d-flex align-items-center justify-content-center text-center" style={{ minHeight: '60vh', background: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(/assets/images/background/abouthotel.jpg) center/cover no-repeat' }}>
                    <div className="hero-overlay position-absolute w-100 h-100" style={{ top: 0, left: 0, background: 'rgba(0,0,0,0.4)' }}></div>
                    <div className="container position-relative z-2">
                        <h1 className="display-3 fw-bold mb-3 text-light">Welcome to Hotel Ashirwad</h1>
                        <p className="lead text-light mb-4">A Journey Through Spiritual Bliss & Natural Beauty</p>
                        <Link href="/booking" className="btn-1 btn-large btn-light">Book Your Stay</Link>
                    </div>
                </section>

                {/* About Section */}
                <section className="section-padding about-section bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0 animate-fade-in">
                                <div className="section_heading mb_20">
                                    <span className="section_heading_title_small">About Hotel Ashirwad</span>
                                    <h2 className="section_heading_title_big">A Journey Through <br /> Spiritual Bliss<br /> Natural Beauty.</h2>
                                </div>
                                <p className="about-1-desc mb_30">Nestled along the scenic Manchar-Bhimashankar Road, Hotel Ashirwad & Lodging offers a tranquil retreat in the heart of Bhimashankar. Whether you're visiting for spiritual reflection, relaxation, or business, our hotel provides a comfortable and budget-friendly stay for all travelers. Conveniently located just a short distance from the revered Bhimashankar Temple, our hotel is the ideal choice for both devotees and tourists alike.</p>
                                <Link href="/about" className="btn-1">Discover More<span></span></Link>
                            </div>
                            <div className="col-lg-6 animate-slide-in-right">
                                <div className="about-image-wrap position-relative rounded overflow-hidden shadow-lg">
                                    <img src="/assets/Dining/partyhall.jpeg" alt="Hotel Ashirwad Party Hall" className="img-fluid rounded" loading="lazy" />
                                    <div className="about-video-btn position-absolute top-50 start-50 translate-middle">
                                        <button className="video-btn" onClick={() => setOpen(true)}><i className="fas fa-play"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Amenities Section */}
                <section className="section-padding amenities-section gray-bg">
                    <div className="container">
                        <div className="section_heading text-center mb_50">
                            <span className="section_heading_title_small">Discover</span>
                            <h3 className="section_heading_title_big mb_20 color_light">Our Premium Amenities at Ashirwad Hotel</h3>
                            <p>At Ashirwad Hotel, we offer a range of top-tier amenities designed for your comfort and convenience. From spacious rooms to exceptional service, we ensure a relaxing stay. Our facilities include well-maintained surroundings, a peaceful ambiance, and modern comforts. Whether you're here for leisure or business, we provide everything you need for a memorable experience. Enjoy seamless hospitality and a serene environment, making your stay with us truly special.</p>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {[
                                { icon: "icon-8", label: "Fast wifi" },
                                { icon: "icon-9", label: "Coffee" },
                                { icon: "icon-10", label: "Bath" },
                                { icon: "icon-11", label: "Parking Space" },
                                { icon: "icon-12", label: "Play Ground" },
                                { icon: "icon-13", label: "Laundry service" },
                                { icon: "icon-14", label: "Breakfast" },
                                { icon: "icon-17", label: "Welcome Drink" },
                            ].map((amenity, idx) => (
                                <div className="col-6 col-md-4 col-lg-3" key={idx}>
                                    <div className="amenity-card text-center p-4 rounded shadow-sm h-100 bg-white animate-fade-in">
                                        <div className="amenity-icon mb-3"><i className={amenity.icon}></i></div>
                                        <p className="fw_500 mb-0">{amenity.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="section-padding testimonials-section position-relative">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="section_heading mb_20">
                                    <span className="section_heading_title_small">Testimonials</span>
                                    <h2 className="section_heading_title_big">What <br /> They’re Saying <br /> About Us?</h2>
                                </div>
                                <p className="testimonial-1-desc">Amet dui scelerisque vel habitant eget <br /> tincidunt facilisis pretium. Porttitor mi <br /> nisi, non vitae tempus.</p>
                            </div>
                            <div className="col-lg-8">
                                <div className="testimonial-slider-wrap bg-white rounded shadow-lg p-4 animate-fade-in">
                                    <TestimonialSlider7 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Booking Form Section */}
                <section className="section-padding booking-section d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(90deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '400px' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="booking-form-card bg-white rounded-4 shadow-lg p-5 animate-fade-in">
                                    <h2 className="color_dark mb_40 text-center fw-bold display-6">Make Reservation</h2>
                                    <form className="hotel-booking-form-1-form row g-4 align-items-end justify-content-center" onSubmit={handleReservation}>
                                        <div className="col-12 col-md-2">
                                            <label className="hotel-booking-form-1-label mb-2 fw-semibold">Check - in:</label>
                                            <input ref={checkinRef} className="form-control form-control-lg rounded-3 shadow-sm" type="date" name="checkin" required />
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <label className="hotel-booking-form-1-label mb-2 fw-semibold">Check - Out:</label>
                                            <input ref={checkoutRef} className="form-control form-control-lg rounded-3 shadow-sm" type="date" name="checkout" required />
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <label className="hotel-booking-form-1-label mb-2 fw-semibold">Rooms:</label>
                                            <select ref={roomsRef} className="form-select form-select-lg rounded-3 shadow-sm" required>
                                                {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Room{n>1?'s':''}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <label className="hotel-booking-form-1-label mb-2 fw-semibold">Adults:</label>
                                            <select ref={adultsRef} className="form-select form-select-lg rounded-3 shadow-sm" required>
                                                {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Adult{n>1?'s':''}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-2">
                                            <label className="hotel-booking-form-1-label mb-2 fw-semibold">Children:</label>
                                            <select ref={childrenRef} className="form-select form-select-lg rounded-3 shadow-sm" required>
                                                {[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n} Child{n!==1?'ren':''}</option>)}
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-2 d-flex justify-content-center align-items-end mt-3 mt-md-0">
                                            <button type="submit" className="btn-ashirwad w-100 py-3 fw-bold fs-5">Check Availability<span></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="section-padding team-section bg-white">
                    <div className="container">
                        <div className="section_heading text-center mb_70">
                            <span className="section_heading_title_small">Dedicated Team</span>
                            <h2 className="section_heading_title_big fw-bold">We Have A Professional <br /> Hotel Staff</h2>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {[
                                { name: "Dhananjay Phalke", role: "Main Chef", img: "/assets/images/team/chef2.jpeg" },
                                { name: "Guy Hawkins", role: "Sr. Chef", img: "/assets/images/team/chef2.jpeg" },
                                { name: "Bessie Cooper", role: "Jr. Chef", img: "/assets/images/team/chef2.jpeg" },
                            ].map((member, idx) => (
                                <div className="col-md-6 col-lg-4" key={idx}>
                                    <div className="team-card text-center p-4 rounded-4 shadow-sm h-100 animate-fade-in team-card-hover">
                                        <div className="team-image-wrap mx-auto mb-3 position-relative">
                                            <img src={member.img} alt={member.name} className="team-img rounded-circle border border-3 border-light shadow" style={{ width: 120, height: 120, objectFit: 'cover' }} />
                                            <div className="team-social position-absolute top-50 start-50 translate-middle d-flex gap-2 justify-content-center align-items-center opacity-0 team-social-hover">
                                                <Link href="/" className="text-dark"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="/" className="text-dark"><i className="fab fa-twitter"></i></Link>
                                                <Link href="/" className="text-dark"><i className="fab fa-instagram"></i></Link>
                                            </div>
                                        </div>
                                        <h4 className="team-1-title mb-1 fw-semibold">{member.name}</h4>
                                        <p className="team-1-designaiton mb-0 text-secondary">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Special Offers Section */}
                <section className="section-padding special-offers-section gray-bg">
                    <div className="container">
                        <div className="section_heading text-center mb_60">
                            <span className="section_heading_title_small">Exclusive Offers</span>
                            <h3 className="section_heading_title_big">Featured Special <br /> Offers</h3>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {[
                                {
                                    img: "/assets/Dining/dining1.jpeg",
                                    title: "Kick off Summer  Hotel Ashirwad",
                                    desc: "Celebrate the season with a refreshing summer stay at Hotel Ashirwad. Relax in luxury, explore the natural beauty of Ambegaon, and enjoy the perfect escape from the everyday hustle.",
                                },
                                {
                                    img: "/assets/Dining/dining4.jpeg",
                                    title: "Free Breakfast Packages",
                                    desc: "Start your day right with our Free Breakfast Packages! Enjoy a delicious, complimentary breakfast each morning during your stay at Hotel Ashirwad, making your experience even more enjoyable.",
                                },
                                {
                                    img: "/assets/Dining/dining3.jpeg",
                                    title: "The Signature Collection",
                                    desc: "Indulge in our Signature Collection at Hotel Ashirwad. Experience the epitome of luxury with exclusive rooms, premium amenities, and personalized service that elevate your stay to new heights.",
                                },
                            ].map((offer, idx) => (
                                <div className="col-md-6 col-lg-4" key={idx}>
                                    <div className="offer-card bg-white rounded shadow-lg h-100 overflow-hidden animate-fade-in">
                                        <div className="offer-img-wrap position-relative">
                                            <img src={offer.img} alt={offer.title} className="img-fluid w-100" style={{ height: 220, objectFit: 'cover' }} />
                                            <div className="offer-badge position-absolute top-0 end-0 m-3 bg-primary text-light px-3 py-1 rounded-pill fw-bold">15% OFF</div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="offer-title mb-2">{offer.title}</h4>
                                            <p className="offer-desc mb-0">{offer.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Local MP4 Video Modal */}
                {isOpen && (
                    <div className="video-modal-overlay" onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1050 }}>
                        <div className="video-modal-container" onClick={(e) => e.stopPropagation()} style={{ width: '90%', maxWidth: 960, aspectRatio: '16 / 9', background: '#000', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
                            <video src="/assets/Rooms/as2.mp4" controls autoPlay playsInline style={{ width: '100%', height: '100%', display: 'block' }} />
                        </div>
                    </div>
                )}
            </Layout>
           
            <style jsx global>{`
                .btn-ashirwad {
                    background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
                    color: #fff;
                    border: none;
                    border-radius: 2rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
                }
                .btn-ashirwad:hover, .btn-ashirwad:focus {
                    background: linear-gradient(90deg, #128C7E 0%, #25D366 100%);
                    color: #fff;
                    transform: translateY(-2px) scale(1.03);
                    box-shadow: 0 4px 16px rgba(18,140,126,0.15);
                }
                .booking-form-card input, .booking-form-card select {
                    border: 1px solid #e0e0e0;
                    background: #f9f9f9;
                    font-size: 1.1rem;
                }
                .booking-form-card input:focus, .booking-form-card select:focus {
                    border-color: #25D366;
                    box-shadow: 0 0 0 2px #25D36633;
                }
                .section_heading_title_big {
                    font-size: 2.5rem;
                    font-weight: 700;
                    letter-spacing: -1px;
                }
                .section_heading_title_small {
                    color: #25D366;
                    font-weight: 600;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                .amenity-card {
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .amenity-card:hover {
                    transform: translateY(-6px) scale(1.04);
                    box-shadow: 0 6px 24px rgba(37,211,102,0.10);
                }
                .offer-card {
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .offer-card:hover {
                    transform: translateY(-6px) scale(1.03);
                    box-shadow: 0 6px 24px rgba(18,140,126,0.10);
                }
                .team-card {
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .team-card-hover:hover {
                    transform: translateY(-6px) scale(1.03);
                    box-shadow: 0 6px 24px rgba(37,211,102,0.10);
                }
                .team-img {
                    border: 4px solid #25D366;
                }
                .team-card .team-social {
                    transition: opacity 0.2s;
                }
                .team-card-hover:hover .team-social {
                    opacity: 1 !important;
                }
                .whatsapp-float:hover {
                    box-shadow: 0 6px 24px rgba(37,211,102,0.25);
                }
                /* --- Testimonial Section Enhancements --- */
                .testimonial-1-block {
                    background: #fff;
                    border-radius: 1.5rem;
                    box-shadow: 0 4px 24px rgba(37,211,102,0.08);
                    border-left: 6px solid #25D366;
                    padding: 2.5rem 2rem 2rem 2.5rem;
                    position: relative;
                    transition: box-shadow 0.2s, transform 0.2s;
                    min-height: 340px;
                    margin: 1rem 0;
                }
                .testimonial-1-block:hover {
                    box-shadow: 0 8px 32px rgba(37,211,102,0.16);
                    transform: translateY(-4px) scale(1.02);
                }
                .testimonial-1-quote-icon {
                    position: absolute;
                    top: 1.2rem;
                    left: 1.2rem;
                    font-size: 2.5rem;
                    color: #25D36633;
                    z-index: 1;
                }
                .testimonial-1-review-desc {
                    font-size: 1.18rem;
                    font-style: italic;
                    color: #222;
                    margin-bottom: 1.5rem;
                    line-height: 1.7;
                    position: relative;
                    z-index: 2;
                }
                .testimonial-1-rating {
                    font-size: 1.3rem;
                    color: #25D366;
                    margin-bottom: 1rem;
                    letter-spacing: 2px;
                }
                .testimonial-1-author-thumb {
                    margin: 0 auto;
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 3px solid #25D366;
                    box-shadow: 0 2px 8px rgba(37,211,102,0.10);
                    margin-bottom: 0.5rem;
                }
                .testimonial-1-author-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .testimonial-1-name {
                    font-weight: 700;
                    font-size: 1.1rem;
                    color: #128C7E;
                    margin-bottom: 0.2rem;
                }
                .testimonial-1-block h6, .testimonial-1-block .testimonial-1-review-desc:last-of-type {
                    color: #888;
                    font-size: 0.98rem;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                }
                @media (max-width: 767px) {
                    .section_heading_title_big {
                        font-size: 2rem;
                    }
                    .booking-form-card {
                        padding: 2rem 1rem;
                    }
                    .testimonial-1-block {
                        padding: 1.5rem 1rem 1rem 1.5rem;
                        min-height: 260px;
                    }
                }
            `}</style>
        </>
    )
}


