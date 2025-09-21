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
              <li><a href="mailto:hotelashirwadlodging@gmail.com">hotelashirwadlodging@gmail.com</a></li>
              <li><a href="tel:+91-213-666-0027">+91-9130375375</a></li>
              <li><a href="tel:+91-213-666-0027">+91-9738375375</a></li>
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
            <li><Link target="_blank"href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link target="_blank" href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link target="_blank" href="https://bd.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link></li>
                  <li><Link target="_blank" href="https://www.instagram.com/hotelashirwad75/"><i className="fab fa-instagram"></i></Link></li>
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
                            <div className="header-link-btn">
                            <Link href="/booking" className="btn-1 btn-modern btn-header" style={{
                                background: 'linear-gradient(135deg, #b30000 0%, #ff6b35 100%)',
                                color: 'white',
                                padding: '14px 28px',
                                borderRadius: '30px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: '160px',
                                height: '48px',
                                fontWeight: '700',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.8px',
                                boxShadow: '0 6px 20px rgba(179, 0, 0, 0.35)',
                                transition: 'all 0.4s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-3px) scale(1.02)';
                                e.target.style.boxShadow = '0 12px 35px rgba(179, 0, 0, 0.5)';
                                e.target.style.background = 'linear-gradient(135deg, #ff6b35 0%, #b30000 100%)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0) scale(1)';
                                e.target.style.boxShadow = '0 6px 20px rgba(179, 0, 0, 0.35)';
                                e.target.style.background = 'linear-gradient(135deg, #b30000 0%, #ff6b35 100%)';
                            }}>
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
                                <Link href="/booking" className="btn-1 btn-modern btn-header" style={{
                                    background: 'linear-gradient(135deg, #b30000 0%, #ff6b35 100%)',
                                    color: 'white',
                                    padding: '14px 28px',
                                    borderRadius: '30px',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: '160px',
                                    height: '48px',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.8px',
                                    boxShadow: '0 6px 20px rgba(179, 0, 0, 0.35)',
                                    transition: 'all 0.4s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px) scale(1.02)';
                                    e.target.style.boxShadow = '0 12px 35px rgba(179, 0, 0, 0.5)';
                                    e.target.style.background = 'linear-gradient(135deg, #ff6b35 0%, #b30000 100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0) scale(1)';
                                    e.target.style.boxShadow = '0 6px 20px rgba(179, 0, 0, 0.35)';
                                    e.target.style.background = 'linear-gradient(135deg, #b30000 0%, #ff6b35 100%)';
                                }}>
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

