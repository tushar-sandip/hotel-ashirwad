import Link from "next/link"


export default function Features() {
    return (
        <>
           
           <section className="section-padding gray-bg pattern-bg" style={{ minHeight: '400px', backgroundColor: '#f8f9fa' }}>
                <div className="p_absolute l_0 b_0 r_0 t_0" style={{ background: "url(assets/images/shape/pattern-2.png) no-repeat left bottom" }}></div>
                <div className="auto-container">
                    <div className="section_heading text-center mb_60 scroll-animate" style={{ opacity: 1, transform: 'none' }}>
                    <span className="section_heading_title_small animate-child" style={{ opacity: 1, transform: 'none' }}>Exclusive Offers</span>
                    <h3 className="section_heading_title_big animate-child" style={{ opacity: 1, transform: 'none' }}>Featured Special <br /> Offers</h3>
                    </div>
                    
                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-2-block scroll-animate card-hover" data-wow-delay=".2s" data-wow-duration=".8s" style={{ opacity: 1, transform: 'none' }}>
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image.jpg" alt="" /></div>
                        <div className="feature-2-lower-content">
                            <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <h4 className="feature-2-title mb_20">Kick off Summer  <br />  Hotel Ashirwad</h4>
                            <p className="feature-2-text">Celebrate the season with a refreshing summer stay at Hotel Ashirwad. Relax in luxury, explore the natural beauty of Ambegaon, and enjoy the perfect escape from the everyday hustle.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-2-block scroll-animate card-hover animate-delay-2" data-wow-delay=".2s" data-wow-duration=".8s" style={{ opacity: 1, transform: 'none' }}>
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-2.jpg" alt="" /></div>
                        <div className="feature-2-lower-content">
                            <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <h4 className="feature-2-title mb_20">Free Breakfast <br /> Packages</h4>
                            <p className="feature-2-text">Start your day right with our Free Breakfast Packages! Enjoy a delicious, complimentary breakfast each morning during your stay at Hotel Ashirwad, making your experience even more enjoyable.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="feature-2-block scroll-animate card-hover animate-delay-4" data-wow-delay=".2s" data-wow-duration=".8s" style={{ opacity: 1, transform: 'none' }}>
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-3.jpg" alt="" /></div>
                        <div className="feature-2-lower-content">
                            <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <h4 className="feature-2-title mb_20">The Signature <br /> Collection</h4>
                            <p className="feature-2-text">Indulge in our Signature Collection at Hotel Ashirwad. Experience the epitome of luxury with exclusive rooms, premium amenities, and personalized service that elevate your stay to new heights.</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                </section>

        </>
    )
}
