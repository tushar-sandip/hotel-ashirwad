"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);

  const generateWhatsAppLink = () => {
    const message = `*Reservation Details*\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nRooms: ${rooms}\nAdults: ${adults}\nChildren: ${children}`;
    const phoneNumber = "9130375375";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  // Sample images for gallery
  const images = [
    {
      original: "/assets/images/gallery/room4.jpg",
      thumbnail: "/assets/images/gallery/room4.jpg",
    },
    {
      original: "/assets/images/gallery/room2.jpg",
      thumbnail: "/assets/images/gallery/room2.jpg",
    },
    {
      original: "/assets/images/gallery/room3.jpg",
      thumbnail: "/assets/images/gallery/room3.jpg",
    },
    {
      original: "/assets/images/gallery/room11.jpg",
      thumbnail: "/assets/images/gallery/room11.jpg",
    },
  ];

  // Dynamically import PhotoSphereViewer for 360 view (client-side only)
  const [show360, setShow360] = useState(false);
  const PSV = dynamic(() => import("./PhotoSphereViewer"), { ssr: false });

  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="VIP Single Bed Room">
        <div>
          <section className="section-padding">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 pe-lg-35">
                  <div className="single-post">
                    <span className="section_heading_title_small modern-price">
                      FROM 3700.00
                    </span>
                    <h2 className="mb_40 modern-title">VIP Single Bed Room</h2>
                    <div className="modern-gallery-tabs mb_40">
                      <button
                        className={`modern-tab-btn${!show360 ? " active" : ""}`}
                        onClick={() => setShow360(false)}
                      >
                        Gallery
                      </button>
                      <button
                        className={`modern-tab-btn${show360 ? " active" : ""}`}
                        onClick={() => setShow360(true)}
                      >
                        360° View
                      </button>
                    </div>
                    <div className="modern-gallery mb_60">
                      {!show360 ? (
                        <ImageGallery items={images} showPlayButton={false} showFullscreenButton={true} />
                      ) : (
                        <div style={{ height: 400, borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}>
                          <PSV src="/assets/images/gallery/room360-vip.jpg" />
                        </div>
                      )}
                    </div>
                    <p className="mb_20">
                     Enjoy a blend of comfort and style in our VIP Single Bed Room, ideal for solo travelers.
                    </p>
                    <p className="mb_40">
                      Located on Bhimashankar Road, Hotel Ashirwad's Deluxe Room
                      offers the perfect blend of luxury and nature. Relax in
                      the spacious room, enjoy exceptional service, and take in
                      the breathtaking mountain views for a truly memorable
                      stay.
                    </p>
                    <h3 className="fs_40 mb_30">Amenities</h3>
                    <p className="mb_50">
                      At Ashirwad Hotel, we offer a range of top-tier amenities
                      designed for your comfort and convenience. From spacious
                      rooms to exceptional service, we ensure a relaxing stay.
                      Our facilities include well-maintained surroundings, a
                      peaceful ambiance, and modern comforts. Whether you're
                      here for leisure or business, we provide everything you
                      need for a memorable experience. Enjoy seamless
                      hospitality and a serene environment, making your stay
                      with us truly special.
                    </p>

                    <div className="row mb_30">
                      <div className="col-md-4 col-sm-6 mb_45">
                        <div className="d-flex align-items-center">
                          <i className="icon-8 theme-color fs_40 w_55 mr_25"></i>
                          <p className="fw_medium mb_0">Fast wifi</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 mb_45">
                        <div className="d-flex align-items-center">
                          <i className="icon-9 theme-color fs_40 w_55 mr_25"></i>
                          <p className="fw_medium mb_0">Coffee</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 mb_45">
                        <div className="d-flex align-items-center">
                          <i className="icon-10 theme-color fs_40 w_55 mr_25"></i>
                          <p className="fw_medium mb_0">Bath</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 mb_45">
                        <div className="d-flex align-items-center">
                          <i className="icon-11 theme-color fs_40 w_55 mr_25"></i>
                          <p className="fw_medium mb_0">Parking Space​</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 mb_45">
                        <div className="d-flex align-items-center">
                          <i className="icon-12 theme-color fs_40 w_55 mr_25"></i>
                          <p className="fw_medium mb_0">Swimming Pool</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 mb_45">
                        <div className="d-flex align-items-center">
                          <i className="icon-14 theme-color fs_40 w_55 mr_25"></i>
                          <p className="fw_medium mb_0">Breakfast</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 mb_45">
                        <div className="d-flex align-items-center">
                          <i className="icon-15 theme-color fs_40 w_55 mr_25"></i>
                          <p className="fw_medium mb_0">Spa & Wellness</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 mb_45">
                        <div className="d-flex align-items-center">
                          <i className="icon-16 theme-color fs_40 w_55 mr_25"></i>
                          <p className="fw_medium mb_0">Meeting Room</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 mb_45">
                        <div className="d-flex align-items-center">
                          <i className="icon-17 theme-color fs_40 w_55 mr_25"></i>
                          <p className="fw_medium mb_0">Drink</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="fs_40 mb_30">Hotel Rules</h3>
                    <p className="mb_30">
                    Experience comfort and tranquility at Hotel Ashirwad. Enjoy spacious rooms with stunning mountain views and exceptional service.
                    </p>
                    <ul className="list-2 mb_70">
                      <li>
                        <i className="icon-23"></i>Check-in: 3:00 PM - 9:00 PM
                      </li>
                      <li>
                        <i className="icon-23"></i>Check-out: 10:30 AM
                      </li>
                      <li>
                        <i className="icon-23"></i>No Pets
                      </li>
                      <li>
                        <i className="icon-23"></i>No Smoking
                      </li>
                    </ul>
                    <h3 className="fs_40 mb_30">Cancellation</h3>
                    <p className="mb_70">
                      <ul>
                        <li> <i className="icon-20"></i>The amount is Non–Refundable.</li>
                        <li>
                        <i className="icon-20"></i> The amount can be adjusted fully in the next booking
                          within 1 Month if informed 10 days prior to your
                          booking dates.
                        </li>
                        <li>
                        <i className="icon-20"></i>Cancellations on the same day as well as 2 days prior
                          will not be accepted and full retention on the booking
                          amount will be applicable.
                        </li>
                        <li>
                        <i className="icon-20"></i>Amount will not be refunded in case of a no-show.
                        </li>
                      </ul>
                    </p>
                    <h3 className="fs_40 mb_30">Location</h3>
                    <p className="mb_30">
                      Bhimashankar Road is located in the Ambegaon taluka of
                      Pune district in the state of Maharashtra, India. The
                      region lies to the north-west of Pune city and is known
                      for its scenic beauty and its proximity to the
                      Bhimashankar Temple, which is one of the 12 Jyotirlingas
                      dedicated to Lord Shiva.
                    </p>
                    <div className="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed0!2sBhimashankar%20Road%2C%20Ambegaon%2C%20Maharashtra%20412408!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0, width: "100%" }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="widget mb_40 gray-bg p_40">
                    <h4 className="mb_20">Your Reservation</h4>
                    <div className="booking-form-3">
                      <form className="hotel-booking-form-1-form d-block">
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">
                            Check - in:
                          </p>
                          <input
                            placeholder="17 Sep, 2022"
                            type="text"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">
                            Check - Out:
                          </p>
                          <input
                            placeholder="21 Sep, 2022"
                            type="text"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">Rooms:</p>
                          <select
                            value={rooms}
                            onChange={(e) => setRooms(e.target.value)}
                          >
                            <option value={1}>1 Room</option>
                            <option value={2}>2 Rooms</option>
                            <option value={3}>3 Rooms</option>
                            <option value={4}>4 Rooms</option>
                            <option value={5}>5 Rooms</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">Adults:</p>
                          <select
                            value={adults}
                            onChange={(e) => setAdults(e.target.value)}
                          >
                            <option value={1}>1 Adult</option>
                            <option value={2}>2 Adults</option>
                            <option value={3}>3 Adults</option>
                            <option value={4}>4 Adults</option>
                            <option value={5}>5 Adults</option>
                          </select>
                        </div>
                        <div className="form-group mb_50">
                          <p className="hotel-booking-form-1-label">Child:</p>
                          <select
                            value={children}
                            onChange={(e) => setChildren(e.target.value)}
                          >
                            <option value={1}>1 Child</option>
                            <option value={0}>0 Children</option>
                            <option value={2}>2 Children</option>
                            <option value={3}>3 Children</option>
                            <option value={4}>4 Children</option>
                            <option value={5}>5 Children</option>
                          </select>
                        </div>

                        {/* Extra Services (same as in your form) */}

                        <div className="form-group mt-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <h4 className="mb_20">Your Price</h4>
                            <p>3700.0</p>
                          </div>
                        </div>

                        <div className="form-group mb-0">
                          <button
                            type="button"
                            className="btn-1"
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                    window.open(generateWhatsAppLink(), '_blank');
                              }
                            }}
                          >
                            Book Now<span></span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-padding pt-0">
            <div className="auto-container">
              <div className="section_heading mb_55">
                <h2 className="section_heading_title_big">Related Rooms</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="room-1-block wow fadeInUp"
                    data-wow-delay=".2s"
                    data-wow-duration=".8s"
                  >
                    <div className="room-1-image hvr-img-zoom-1">
                      <img src="assets/images/gallery/room2.jpg" alt="" />
                    </div>
                    <div className="room-1-content">
                      <p className="room-1-meta-info">
                        Start from <span className="theme-color">3700.0</span>
                        /night
                      </p>
                      <div className="room-1-rating">
                        <i className="icon-6"></i>
                        <i className="icon-6"></i>
                        <i className="icon-6"></i>
                        <i className="icon-6"></i>
                        <i className="icon-7"></i>
                      </div>
                      <h4 className="room-1-title mb_20">
                        <Link href="/room-details-luxury">Luxury Double Bed Room</Link>
                      </h4>
                      <p className="room-1-text mb_30">
                        Mattis cras magna morb punar aenean aliquet in. Risus a
                        arcu eget.
                      </p>
                      <div className="link-btn">
                        <Link href="/room-details-luxury" className="btn-1 btn-alt">
                          Book Now <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="room-1-block wow fadeInUp"
                    data-wow-delay=".2s"
                    data-wow-duration="1.2s"
                  >
                    <div className="room-1-image hvr-img-zoom-1">
                      <img src="assets/images/gallery/room3.jpg" alt="" />
                    </div>
                    <div className="room-1-content">
                      <p className="room-1-meta-info">
                        Start from <span className="theme-color">3700.0</span>
                        /night
                      </p>
                      <div className="room-1-rating">
                        <i className="icon-6"></i>
                        <i className="icon-6"></i>
                        <i className="icon-6"></i>
                        <i className="icon-6"></i>
                        <i className="icon-7"></i>
                      </div>
                      <h4 className="room-1-title mb_20">
                        <Link href="/room-details-VIP">VIP Single Bed Room</Link>
                      </h4>
                      <p className="room-1-text mb_30">
                        Mattis cras magna morb punar aenean aliquet in. Risus a
                        arcu eget.
                      </p>
                      <div className="link-btn">
                        <Link href="/room-details-VIP" className="btn-1 btn-alt">
                          Book Now <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="room-1-block wow fadeInUp"
                    data-wow-delay=".2s"
                    data-wow-duration="1.5s"
                  >
                    <div className="room-1-image hvr-img-zoom-1">
                      <img src="assets/images/gallery/room4.jpg" alt="" />
                    </div>
                    <div className="room-1-content">
                      <p className="room-1-meta-info">
                        Start from <span className="theme-color">3200.0</span>
                        /night
                      </p>
                      <div className="room-1-rating">
                        <i className="icon-6"></i>
                        <i className="icon-6"></i>
                        <i className="icon-6"></i>
                        <i className="icon-6"></i>
                        <i className="icon-7"></i>
                      </div>
                      <h4 className="room-1-title mb_20">
                        <Link href="/room-details-delux">Delux Single Bed Room</Link>
                      </h4>
                      <p className="room-1-text mb_30">
                        Mattis cras magna morb punar aenean aliquet in. Risus a
                        arcu eget.
                      </p>
                      <div className="link-btn">
                        <Link href="/room-details-delux" className="btn-1 btn-alt">
                          Book Now <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
      <style jsx global>{`
        .modern-gallery-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }
        .modern-tab-btn {
          background: #f5f5f5;
          border: none;
          padding: 10px 24px;
          border-radius: 24px;
          font-weight: 600;
          color: #333;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .modern-tab-btn.active {
          background: #1e90ff;
          color: #fff;
        }
        .modern-gallery {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          background: #fff;
        }
        .modern-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #222;
        }
        .modern-price {
          font-size: 1.1rem;
          color: #1e90ff;
          font-weight: 600;
          letter-spacing: 1px;
        }
        @media (max-width: 768px) {
          .modern-title {
            font-size: 1.5rem;
          }
          .modern-gallery {
            border-radius: 8px;
          }
        }
      `}</style>
    </>
  );
}
