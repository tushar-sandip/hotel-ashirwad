'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect } from 'react';
const amenities = [
  {
    icon: <span className="amenity-svg-icon">🛏️</span>,
    title: 'Spacious & Elegant Rooms',
    desc: 'Our well-appointed rooms are designed with modern furnishings, offering a tranquil environment to relax after a busy day. Each room is equipped with premium amenities like air-conditioning, high-speed Wi-Fi, and a minibar to ensure your comfort.',
    tip: 'Tip: Ask for a pillow menu for your perfect sleep!'
  },
  {
    icon: <span className="amenity-svg-icon">🍽️</span>,
    title: 'Exquisite Dining',
    desc: 'Indulge in a culinary journey at our in-house restaurant, offering a blend of local and international delicacies. Enjoy breakfast, lunch, and dinner with top-tier service and flavorful dishes.',
    tip: 'Tip: Don’t miss our chef’s special every evening!'
  },
  {
    icon: <span className="amenity-svg-icon">💪</span>,
    title: 'Wellness & Fitness',
    desc: 'Rejuvenate your body and mind with our wellness services, including a state-of-the-art fitness center and soothing spa treatments.',
    tip: 'Tip: Early morning yoga classes are complimentary.'
  },
  {
    icon: <span className="amenity-svg-icon">🎉</span>,
    title: 'Banquet & Conference Facilities',
    desc: 'Whether you\'re hosting a corporate event, wedding, or family gathering, our spacious banquet hall and conference rooms are designed to meet your specific needs with cutting-edge facilities.',
    tip: 'Tip: Ask about our event planning services for a stress-free experience.'
  },
  {
    icon: <span className="amenity-svg-icon">🤝</span>,
    title: 'Personalized Services',
    desc: 'At Hotel Ashirwad, we believe in attention to detail. Our dedicated staff is available round the clock to offer concierge services, room service, and any special requests you may have.',
    tip: 'Tip: Our concierge can help you plan local sightseeing tours.'
  },
  {
    icon: <span className="amenity-svg-icon">📍</span>,
    title: 'Prime Location',
    desc: 'Situated in the heart of Ambegaon, our hotel provides easy access to local attractions, transport hubs, and business centers.',
    tip: 'Tip: Ask the front desk for a custom city map!'
  },
];
export default function Home() {
  useEffect(() => {
    // Touch: tap to toggle tip
    const handleTap = (card) => (e) => {
      if (window.innerWidth <= 991) {
        card.classList.toggle('tip-revealed');
      }
    };
    const items = document.querySelectorAll('.amenity-card-modern');
    items.forEach(card => {
      card.addEventListener('click', handleTap(card));
    });
    return () => {
      items.forEach(card => {
        card.removeEventListener('click', handleTap(card));
      });
    };
  }, []);
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Amenities">
        <div>
          <section className="section-padding pb-5" style={{ background: 'linear-gradient(120deg, #f5f7fa 0%, #e0f7ef 100%)' }}>
            <div className="auto-container">
              <div className="section_heading text-center amenities-section-heading">
                <span className="section_heading_title_small">Amenities</span>
                <h2 className="section_heading_title_big mb_20">
                  Enjoy Generous Amenities <br /> at The Hotel
                </h2>
                <div className="amenities-divider-svg" aria-hidden="true">
                  <svg width="120" height="16" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="6" width="120" height="4" rx="2" fill="url(#amenity-bar)"/>
                    <defs>
                      <linearGradient id="amenity-bar" x1="0" y1="8" x2="120" y2="8" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#25D366"/>
                        <stop offset="1" stopColor="#128C7E"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="amenities-grid-modern">
                  {amenities.map((a, i) => (
                    <div className="amenity-card-modern" key={a.title} style={{ animationDelay: `${0.12 + i * 0.09}s` }}>
                      <div className="amenity-icon-modern">{a.icon}</div>
                      <div className="amenity-card-content">
                        <div className="amenity-title-modern">{a.title}</div>
                        <div className="amenity-desc-modern">{a.desc}</div>
                        <div className="amenity-tip-modern">{a.tip}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12  center">
                  <div className="amenities-img-modern">
                    <img src="assets/images/shape/amenites.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
      <style jsx global>{`
        .amenities-section-heading {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInHeading 0.8s 0.2s forwards;
        }
        @keyframes fadeInHeading {
          to { opacity: 1; transform: none; }
        }
        .amenities-divider-svg {
          margin: 0.7rem auto 2.2rem auto;
          display: flex;
          justify-content: center;
        }
        .amenities-grid-modern {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.2rem 2rem;
          max-width: 900px;
          margin: 0 auto 2.5rem auto;
        }
        @media (max-width: 900px) {
          .amenities-grid-modern {
            grid-template-columns: 1fr;
            gap: 1.3rem 0;
          }
        }
        .amenity-card-modern {
          background: rgba(255,255,255,0.25);
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
          border: 1.5px solid rgba(37,211,102,0.18);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 2.1rem 1.3rem 1.5rem 1.3rem;
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          animation: fadeInAmenityCard 0.7s cubic-bezier(.6,.2,.3,1) forwards;
        }
        @keyframes fadeInAmenityCard {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .amenity-card-modern:hover, .amenity-card-modern.tip-revealed {
          box-shadow: 0 0 0 4px #25D36644, 0 16px 48px 0 #25D36633, 0 2px 8px rgba(37,211,102,0.16);
          border: 1.5px solid #25D366;
          transform: translateY(-8px) scale(1.035);
        }
        .amenity-icon-modern {
          width: 56px;
          height: 56px;
          min-width: 56px;
          min-height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #fff;
          box-shadow: 0 2px 8px #25D36622;
          margin-top: 0.2rem;
          transition: transform 0.3s, box-shadow 0.2s;
        }
        .amenity-card-modern:hover .amenity-icon-modern, .amenity-card-modern.tip-revealed .amenity-icon-modern {
          animation: pulseIcon 0.5s;
          box-shadow: 0 4px 16px #25D36633;
          transform: scale(1.13) rotate(-8deg);
        }
        @keyframes pulseIcon {
          0% { transform: scale(1) rotate(0); }
          30% { transform: scale(1.13) rotate(-8deg); }
          60% { transform: scale(0.95) rotate(2deg); }
          100% { transform: scale(1) rotate(0); }
        }
        .amenity-card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .amenity-title-modern {
          font-weight: 700;
          font-size: 1.18rem;
          color: #128C7E;
          margin-bottom: 0.1rem;
        }
        .amenity-desc-modern {
          color: #222;
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
        }
        .amenity-tip-modern {
          background: linear-gradient(90deg, #e0f7ef 0%, #f5f7fa 100%);
          color: #128C7E;
          font-size: 1.01rem;
          font-style: italic;
          border-radius: 0.8rem;
          box-shadow: 0 2px 8px 0 #25D36611;
          padding: 0.7rem 1rem 0.7rem 1.2rem;
          margin: 0.7rem 0 0.2rem 0;
          text-align: left;
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: opacity 0.35s, transform 0.35s;
          z-index: 4;
          position: relative;
        }
        .amenity-card-modern:hover .amenity-tip-modern, .amenity-card-modern.tip-revealed .amenity-tip-modern {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .amenities-img-modern {
          margin: 2.5rem auto 0 auto;
          max-width: 520px;
          border-radius: 1.2rem;
          overflow: hidden;
          box-shadow: 0 8px 32px 0 #25D36622, 0 2px 8px rgba(37,211,102,0.10);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .amenities-img-modern img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 1.2rem;
          transition: transform 0.3s;
        }
        .amenities-img-modern:hover {
          box-shadow: 0 16px 48px 0 #25D36633, 0 2px 8px rgba(37,211,102,0.16);
          transform: scale(1.03);
        }
        .amenities-img-modern:hover img {
          transform: scale(1.06);
        }
        @media (max-width: 991px) {
          .amenities-glass-card {
            padding: 1.7rem 1rem;
          }
          .amenities-img-modern {
            max-width: 100%;
          }
        }
        @media (max-width: 900px) {
          .amenities-grid-modern {
            grid-template-columns: 1fr;
            gap: 1.3rem 0;
          }
        }
        @media (max-width: 600px) {
          .amenities-glass-card {
            padding: 1.1rem 0.3rem;
          }
          .amenity-card-modern {
            padding: 1.1rem 0.5rem 1rem 0.5rem;
          }
          .amenities-img-modern {
            margin: 1.2rem auto 0 auto;
          }
        }
      `}</style>
    </>
  );
}
