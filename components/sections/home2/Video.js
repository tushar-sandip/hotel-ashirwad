import VideoPopup from "@/components/elements/VideoPopup"

export default function Video() {
    return (
        <>
            <section className="video-section-modern">
                {/* Enhanced Background with Multiple Layers */}
                <div className="video-bg-modern">
                    <div 
                        className="video-bg-image" 
                        style={{ 
                            backgroundImage: 'url(assets/images/background/abouthotel.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }} 
                        data-parallax='{"y": 50}'
                    ></div>
                    
                    {/* Gradient Overlays */}
                    <div className="video-gradient-overlay-1"></div>
                    <div className="video-gradient-overlay-2"></div>
                    
                    {/* Animated Elements */}
                    <div className="video-animated-elements">
                        <div className="floating-circle circle-1"></div>
                        <div className="floating-circle circle-2"></div>
                        <div className="floating-circle circle-3"></div>
                        <div className="floating-square square-1"></div>
                        <div className="floating-square square-2"></div>
                    </div>
                    
                    {/* Particle Effect */}
                    <div className="video-particles">
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="video-content-modern">
                        {/* Modern Header */}
                        <div className="video-header-modern">
                            <div className="video-badge">
                                <i className="fas fa-play"></i>
                                <span>Experience Video</span>
                            </div>
                            <h2 className="video-title-modern">
                                Watch The Experience <br />
                                <span className="title-accent">Before You Feel It</span>
                            </h2>
                            <p className="video-subtitle-modern">
                                Discover the luxury and comfort that awaits you at Hotel Ashirwad. Watch our exclusive video to see what makes us special.
                            </p>
                        </div>
                        
                        {/* Enhanced Video Button Container */}
                        <div className="video-button-container-modern">
                            <div className="video-button-wrapper">
                                <VideoPopup style={3} />
                                
                                {/* Decorative Rings */}
                                <div className="video-rings">
                                    <div className="ring ring-1"></div>
                                    <div className="ring ring-2"></div>
                                    <div className="ring ring-3"></div>
                                </div>
                                
                                {/* Pulse Effect */}
                                <div className="video-pulse"></div>
                            </div>
                            
                            {/* Video Stats */}
                            <div className="video-stats">
                                <div className="stat-item">
                                    <div className="stat-number">2:30</div>
                                    <div className="stat-label">Duration</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">4K</div>
                                    <div className="stat-label">Quality</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">HD</div>
                                    <div className="stat-label">Audio</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Call to Action */}
                        <div className="video-cta-modern">
                            <p className="cta-text">
                                Ready to experience the magic? Watch our exclusive video showcasing Hotel Ashirwad and book your stay today!
                            </p>
                            <div className="cta-buttons">
                                <a href="/booking" className="btn-primary-modern">
                                    <i className="fas fa-calendar-alt"></i>
                                    Book Now
                                </a>
                                <a href="/gallery" className="btn-secondary-modern">
                                    <i className="fas fa-images"></i>
                                    View Gallery
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
