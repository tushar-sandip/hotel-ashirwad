import Link from "next/link"
import TestimonialSlider3 from '@/components/slider/TestimonialSlider3'


export default function Room() {
    return (
        <>            
            <section className="section-padding">
                <div className="d-flex flex-wrap">
                    <div className="room-2-left-column">
                    <div className="room-2-container">
                        <div className="section_heading mb_25">
                        <span className="section_heading_title_small">Discover</span>
                        <h3 className="section_heading_title_big">Our Rooms & Suites</h3>
                        </div>
                        <p className="mb_30">At Ashirwad Hotel, we offer comfortable and well-appointed rooms to suit every need. Choose from our Standard Room for a cozy stay or indulge in the spacious and luxurious Deluxe Room, both equipped with modern amenities to ensure a relaxing experience.</p>
                        
                    </div>
                    </div>
                    <div className="room-2-right-column">
                    <div className="room-2-container2">
                        <div className="swiper-container two-item-carousel">
                        <div className="swiper-wrapper">
                            {/* Repeat the following block for each room */}
                            <div className="swiper-slide">
                            <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestimonialSlider3 />                        
                    </div>
                            </div>
                            {/* End of room block */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section> 

        </>
    )
}
