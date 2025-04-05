"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";
export default function BookingFormPage() {
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
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Booking">
        <div>
          <section className="section-padding">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8">
                  <section className="section-padding">
                    <div className="d-flex flex-wrap">
                      <div className="room-2-left-column">
                        <div className="room-2-container">
                          <div className="section_heading mb_25">
                            <span className="section_heading_title_small">
                              Discover
                            </span>
                            <h3 className="section_heading_title_big">
                              Our Rooms & Suites
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="room-2-right-column">
                        <div className="room-2-container2">
                          <div className="swiper-container two-item-carousel">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="content-box">
                                  <TestimonialSlider1 />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
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
                        <div className="form-group mt-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <h4 className="mb_20">Your Price</h4>
                            <p>6669.0</p>
                          </div>
                        </div>

                        <div className="form-group mb-0">
                          <button
                            type="button"
                            className="btn-1"
                            onClick={() =>
                              (window.location.href = generateWhatsAppLink())
                            }
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
        </div>
      </Layout>
    </>
  );
}
