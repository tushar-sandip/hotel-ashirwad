import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <div className="header-top-1">
      <div className="auto-container">
        <div className="header-top-1-row d-flex align-items-center justify-content-between">
          <div className="header-top-1-left-column">
            <ul className="header-top-1-contact-info d-flex align-items-center">
              <li><a href="mailto:dhananjayphalke7058@gmail.com">dhananjayphalke7058@gmail.com</a></li>
              <li><a href="tel:+91-213-666-0027">+91-9130373375</a></li>
            </ul>
          </div>
          <div className="header-top-1-right-column d-flex align-items-center">
            <div className="language-switcher">
              <select>
                <option data-display="EN">English</option>
                <option value={1}>Hindi</option>
                <option value={2}>Marathi</option>
                
              </select>
            </div>
            <ul className="header-top-1-social-icon d-flex align-items-center">
            <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="https://bd.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link></li>
                  <li><Link href="https://www.instagram.com/hotel_ashirwad_ghodegaon/"><i className="fab fa-instagram"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                        <div>
                            <div className="logo">
                            <Link href="/">
                            <img src="assets/images/ashootel.jpeg" width={70} height={50}  alt="" />
                            </Link>
                            <span className="hotel-name fs_25 m_6  mx_15 color_name_black fw_exbold">Hotel Ashirwad</span>
                            </div>
                        </div>
                        <div className="middle-column">
                            <div className="nav-outer">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <img src="assets/images/icons/icon-bar-2.png" alt="" />
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu />
                            </div>
                            </nav>
                            </div>
                        </div>
                        <div className="right-column d-flex align-items-center">
                            <button type="button" className="theme-btn search-toggler">
                            <li className="search-box-outer search-toggler" onClick={handlePopup}><i className="icon-1"></i></li>
                            </button>
                            <div className="header-link-btn">
                            <Link href="/booking" className="btn-1 btn-small btn-alt">
                                Book Your Stay <span></span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                
                {/* End Header Upper*/}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="header-upper">
                        <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="">
                            <div className="logo">
                                <Link href="/">
                                <img src="assets/images/ashootel.jpeg" width={70} height={50}  alt="" />
                                </Link>
                            <span className="hotel-name fs_25 m_6  mx_15 color_name_black fw_exbold">Hotel Ashirwad</span>

                            </div>
                            </div>
                            <div className="middle-column">
                            {/* Nav Box */}
                            <div className="nav-outer">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler">
                                <img src="assets/images/icons/icon-bar-2.png" alt="" />
                                </div>

                                {/* Main Menu */}
                                <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                                </nav>
                            </div>
                            </div>
                            <div className="right-column d-flex align-items-center">
                            <div className="header-link-btn">
                                <Link href="/booking" className="btn-1 btn-small btn-alt">
                                Book Your Stay <span></span>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
