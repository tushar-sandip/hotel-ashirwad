import Link from "next/link"
import VideoPopup from "@/components/elements/VideoPopup"
export default function About() {
    return (
        <> 

            <section className="section-padding">
                <div className="auto-container">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section_heading mb_20">
                        <span className="section_heading_title_small">About Hotel Ashirwad</span>
                        <h3 className="section_heading_title_big">Experience Luxury at Hotel Ashirwad, Ambegaon</h3>
                        </div>
                        <p className="aboout-1-desc mb_30">Located on Bhimashankar Road, Hotel Ashirwad offers a perfect mix of luxury and nature. Enjoy spacious rooms, exceptional service, and breathtaking mountain views for a truly memorable stay.</p>
                        <div className="about-1-btn mb_30">
                        <Link href="/about-us" className="btn-1 btn-modern">Discover More<span></span></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="about-2-image-wrap mb_30 p_relative">
                        <div className="about-2-shape-1"><img src="/assets/images/shape/pattern-1.png" alt="" /></div>
                        <div className="about-2-image-1" data-parallax='{"y": -20}'><img src="/assets/Dining/partyhall.jpeg" width={380} height={150} alt="Party Hall at Hotel Ashirwad" loading="lazy" /></div>
                        <div className="about-2-image-2" data-parallax='{"y": 20}'><img src="/assets/Dining/dining5.jpeg" width={190} height={250} alt="Dining area at Hotel Ashirwad" loading="lazy" /></div>
                        <div className="about-2-video-area">
                            <div className="about-2-video-btn">
                                <div className="video-btn">
                                        <VideoPopup />
                                </div>
                            </div>
                            <p className="about-2-video-title">
                                <VideoPopup>Watch Exclusive Video</VideoPopup>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </>
    )
}


