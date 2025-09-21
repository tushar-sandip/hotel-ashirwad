
import TestimonialSlider7 from '@/components/slider/TestimonialSlider7'

export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section-new">
                {/* Modern Background with Gradient */}
                <div className="testimonial-bg-new">
                    <div className="gradient-overlay"></div>
                    <div className="pattern-overlay"></div>
                    <div className="floating-elements">
                        <div className="floating-shape shape-1"></div>
                        <div className="floating-shape shape-2"></div>
                        <div className="floating-shape shape-3"></div>
                        <div className="floating-shape shape-4"></div>
                    </div>
                </div>

                <div className="container">
                    {/* Modern Header */}
                    <div className="testimonial-header-new">
                        <div className="header-badge-new">
                            <div className="badge-icon-new">
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="badge-text-new">Customer Reviews</span>
                        </div>
                        <h2 className="header-title-new">
                            What Our <span className="title-highlight">Guests</span> Say
                        </h2>
                        <p className="header-subtitle-new">
                            Discover why thousands of guests choose Hotel Ashirwad for their perfect stay
                        </p>
                        <div className="header-stats-new">
                            <div className="stat-item-new">
                                <div className="stat-number-new">4.9</div>
                                <div className="stat-label-new">Average Rating</div>
                            </div>
                            <div className="stat-divider-new"></div>
                            <div className="stat-item-new">
                                <div className="stat-number-new">500+</div>
                                <div className="stat-label-new">Happy Guests</div>
                            </div>
                            <div className="stat-divider-new"></div>
                            <div className="stat-item-new">
                                <div className="stat-number-new">98%</div>
                                <div className="stat-label-new">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Cards Container */}
                    <div className="testimonial-cards-container">
                        <div className="testimonial-slider-wrapper">
                            <TestimonialSlider7 />
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="trust-indicators-new">
                        <div className="trust-item-new">
                            <i className="fas fa-shield-alt"></i>
                            <span>Verified Reviews</span>
                        </div>
                        <div className="trust-item-new">
                            <i className="fas fa-award"></i>
                            <span>Quality Assured</span>
                        </div>
                        <div className="trust-item-new">
                            <i className="fas fa-heart"></i>
                            <span>Guest Favorite</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
