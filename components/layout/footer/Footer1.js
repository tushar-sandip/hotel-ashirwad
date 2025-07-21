import Link from "next/link"


export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="footer-1-middle">
                    <div className="auto-container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-3 col-md-3 col-full text-center">
                                <div className="logo">
                                    <Link href="/">
                                        <img src="assets/images/ashootelFinalLogo.png" width={130} height={50} alt="Logo" />
                                    </Link>
                                    <ul className="contact-widget-1-list">
                                        <li className="fs_30 m_10  fw_bold">Hotel Ashirwad</li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-full">
                                <div className="contact-widget-1">
                                    <div className="footer-widget-title"><h4>Contact Us</h4></div>
                                    <ul className="contact-widget-1-list">
                                        <li><span>Add:</span> Bhimashankar Road, Ambegaon, Maharashtra 412408</li>
                                        <li><span>Email:</span><Link href="mailto:hotelashirwadlodging@gmail.com">hotelashirwadlodging@gmail.com</Link></li>
                                        <li><span>Phone:</span><Link href="tel:9130375375">9130375375</Link></li>
                                    </ul>
                                    <div className="footer-social-icon d-flex align-items-center">
                                        <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></Link>
                                        <Link href="https://bd.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                                        <Link href="https://www.instagram.com/hotelashirwad75/"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-full">
                                <div className="link-widget-1">
                                    <div className="footer-widget-title"><h4>Links</h4></div>
                                    <ul className="link-widget-1-list">
                                        <li><Link href="/about-us">About Us</Link></li>
                                        {/* <li><Link href="/event-details">Services</Link></li>
                                        <li><Link href="/faq">Case</Link></li> */}
                                        <li><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-full">
                            <div className="footer-widget-title"><h4>Maps</h4></div>
                                <div className="footer-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed0!2sBhimashankar%20Road%2C%20Ambegaon%2C%20Maharashtra%20412408!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="footer-bottom-row">
                            <div className="footer-bottom-text text-center">Copyright 2025 by <Link href="/">Tushar Sudam Phalke</Link>&nbsp;All Right Reserved.</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
