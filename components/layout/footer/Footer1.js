import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
      <div className="footer-1-middle">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="contact-widget-1 mb_30">
                <div className="footer-widget-title"><h4>Contact Us</h4></div>
                <ul className="contact-widget-1-list">
                  <li><span>Add:</span> Bhimashankar Road, Ambegaon, Maharashtra 412408</li>
                  <li><span>Email:</span><Link href="mailto:dhananjayphalke7058@gmail.com">dhananjayphalke7058@gmail.com</Link></li>
                  <li><span>Phone:</span><Link href="tel:9130375375">9130375375</Link></li>
                </ul>
                <ul className="footer-social-icon d-flex align-items-center">
                  <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="https://bd.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link></li>
                  <li><Link href="https://www.instagram.com/hotel_ashirwad_ghodegaon/"><i className="fab fa-instagram"></i></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="link-widget-1 mb_30">
                <div className="footer-widget-title"><h4>Links</h4></div>
                <ul className="link-widget-1-list">
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/event-details">Services</Link></li>
                  <li><Link href="/faq">Case</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="link-widget-1 mb_30">
                <div className="footer-widget-title"><h4>Hours</h4></div>
                <p className="mb_25">Tincidunt neque pretium lectus <br /> donec risus.</p>
                <p>Mon - Fri: 8:00AM - 11:00PM <br /> Sat - Sun: 8:00AM - 11:00PM</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-widget-1 mb_30">
                <div className="footer-widget-title"><h4>Newsletter</h4></div>
                <div className="about-widget-1-text">
                  <p className="mb_30">Tincidunt neque pretium lectus <br /> donec risus.</p>
                  <div className="footer-newsletter">
                    <form>
                      <input type="email" placeholder="Email address" />
                      <button className="btn-1">Subscribe <span></span></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="footer-bottom-row">
            <div className="footer-bottom-text">Copyright 2024 by <Link href="/">Tushar Sudam Phalke</Link>&nbsp;All Right Reserved.</div>
          </div>
        </div>
      </div>
    </footer>

        </>
    )
}
