"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";
import styles from "./booking.module.scss";

export default function BookingFormPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [formError, setFormError] = useState("");
  const [step, setStep] = useState(1);

  const generateWhatsAppLink = () => {
    const message = `*Reservation Details*\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nRooms: ${rooms}\nAdults: ${adults}\nChildren: ${children}`;
    const phoneNumber = "9130375375";
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      setFormError("Please select both check-in and check-out dates.");
      return;
    }
    setFormError("");
    if (typeof window !== "undefined") {
      window.open(generateWhatsAppLink(), '_blank');
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Booking">
      <div className={styles["booking-hero-stack"]}>
        <div className={styles["booking-hero-slider"]}>
          <TestimonialSlider1 />
        </div>
        <div className={styles["booking-hero-form-card"]}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <h2 style={{ margin: 0 }}>Our Rooms & Suites</h2>
            <p style={{ margin: 0, color: '#666' }}>Discover comfort and elegance in every room. Book your stay now!</p>
          </div>
          <div className={styles["stepper"]}>
            <div
              className={styles["stepper-step"] + (step === 1 ? " " + styles["active"] : "")}
              onClick={() => setStep(1)}
            >
              1. Dates
            </div>
            <div
              className={styles["stepper-step"] + (step === 2 ? " " + styles["active"] : "")}
              onClick={() => checkIn && checkOut && setStep(2)}
            >
              2. Guests
            </div>
            <div
              className={styles["stepper-step"] + (step === 3 ? " " + styles["active"] : "")}
              onClick={() => checkIn && checkOut && setStep(3)}
            >
              3. Confirm
            </div>
          </div>
          <form
            className={styles["booking-form"]}
            onSubmit={e => {
              e.preventDefault();
              if (step < 3) nextStep();
              else handleBooking();
            }}
          >
            {step === 1 && (
              <>
                <div className={styles["form-group"]}>
                  <label htmlFor="check-in">Check-in</label>
                  <input
                    id="check-in"
                    type="date"
                    value={checkIn}
                    onChange={e => setCheckIn(e.target.value)}
                    required
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="check-out">Check-out</label>
                  <input
                    id="check-out"
                    type="date"
                    value={checkOut}
                    onChange={e => setCheckOut(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div className={styles["form-group"]}>
                  <label htmlFor="rooms">Rooms</label>
                  <select
                    id="rooms"
                    value={rooms}
                    onChange={e => setRooms(Number(e.target.value))}
                  >
                    {[1,2,3,4,5].map(n => (
                      <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="adults">Adults</label>
                  <select
                    id="adults"
                    value={adults}
                    onChange={e => setAdults(Number(e.target.value))}
                  >
                    {[1,2,3,4,5].map(n => (
                      <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="children">Children</label>
                  <select
                    id="children"
                    value={children}
                    onChange={e => setChildren(Number(e.target.value))}
                  >
                    {[0,1,2,3,4,5].map(n => (
                      <option key={n} value={n}>{n} Child{n !== 1 ? 'ren' : ''}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <div className={styles["form-group"] + " " + styles["price-group"]}>
                  <span className={styles["price-label"]}>Your Price</span>
                  <span className={styles["price-value"]}>6669.0</span>
                </div>
                <div className={styles["form-group"]}>
                  <strong>Check-in:</strong> {checkIn}<br />
                  <strong>Check-out:</strong> {checkOut}<br />
                  <strong>Rooms:</strong> {rooms}<br />
                  <strong>Adults:</strong> {adults}<br />
                  <strong>Children:</strong> {children}
                </div>
              </>
            )}
            {formError && <div className={styles["form-error"]}>{formError}</div>}
            <div className={styles["stepper-btn-row"]}>
              {step > 1 && (
                <button type="button" className={styles["booking-btn"]} onClick={prevStep}>
                  Back
                </button>
              )}
              {step < 3 ? (
                <button type="submit" className={styles["booking-btn"]}>
                  Next
                </button>
              ) : (
                <button type="submit" className={styles["booking-btn"]}>
                  Book Now
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
