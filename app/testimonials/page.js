'use client'
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleMove = (card) => (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width/2;
      const centerY = rect.height/2;
      const rotateX = (y-centerY)/10;
      const rotateY = (centerX-x)/10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
      card.style.zIndex = 2;
    };
    const handleLeave = (card) => () => {
      card.style.transform = '';
      card.style.zIndex = '';
    };
    const cards = document.querySelectorAll('.testimonial-1-block');
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMove(card));
      card.addEventListener('mouseleave', handleLeave(card));
    });
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMove(card));
        card.removeEventListener('mouseleave', handleLeave(card));
      });
    };
  }, []);
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Testimonials">
        <section className="section-padding testimonial-page" style={{ background: 'linear-gradient(120deg, #f5f7fa 0%, #e0f7ef 100%)' }}>
          <div className="auto-container">
            <div className="section_heading text-center mb_50">
              <span className="section_heading_title_small">Testimonials</span>
              <h2 className="section_heading_title_big">
                What They're Say <br /> About Us?
              </h2>
            </div>
            <div className="d-flex justify-content-center mb-4">
              <button className="btn-ashirwad write-review-btn">Write a Review</button>
            </div>
            <div className="testimonial-masonry">
              {/* First Testimonial */}
              <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "Delicious and Affordable Lunch at Hotel Ashirwad!" My wife
                  and I had lunch at Hotel Ashirwad today and were thoroughly
                  impressed. We ordered Masala Papad, Shev Bhaji, and Butter
                  Roti, and every single dish was absolutely amazing and
                  delicious. The flavors were incredible, and the quality of
                  the food was top-notch. What truly surprised us was the
                  incredibly affordable price point. For the quality and
                  taste, it was an absolute steal. Highly recommend! If you're
                  looking for a delicious and budget-friendly meal, Hotel
                  Ashirwad is a must-try!”
                </p>
                <h4 className="testimonial-1-name">Abhijeet Nalawade</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Abhijeet Nalawade"
                  />
                </div>
              </article>

              {/* Second Testimonial */}
              <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "You will love the atmosphere more in monsoon, must try
                  their misal it was served piping hot, spicy yet tasty!”
                </p>
                <h4 className="testimonial-1-name">Mitesh Kharpude</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Mitesh Kharpude"
                  />
                </div>
              </article>

              {/* Third Testimonial */}
              <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "I recently had misal at Ashirwad, and it was a delightful
                  experience! The spicy curry (kat) had a rich flavor that
                  hit just the right notes. The combination of sprouts,
                  farsan, and fresh garnishes like onions, coriander, and a
                  squeeze of green lemon created a perfect balance of taste
                  and texture. Service is quick and respectful.”
                </p>
                <h4 className="testimonial-1-name">Swati B</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Swati B"
                  />
                </div>
              </article>

              {/* Repeat the structure for the rest of the testimonials */}
              {/* First Testimonial */}
              <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "Shraddha the owner along with son harshad welcomed us with
                  a smile. Amol the attendant was superb. Palak paneer was
                  super. Dal Khichdi tickled the taste buds. Humble
                  atmosphere. Rotis service hot and prompt. Onion..lemon
                  tasted fresh. Finger bowls provided..will recommend it to
                  visitors of Bhimashankar temple"
                </p>
                <h4 className="testimonial-1-name">Dr.Mohina S Kulkarni</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Dr.Mohina S Kulkarni"
                  />
                </div>
              </article>

              {/* Second Testimonial */}
              <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "Nice tasty food with reasonable price, not any other restaurants like this in way to bheemashankar jyotirlinga... Thanks"
                </p>
                <h4 className="testimonial-1-name">Dinesh Kumar Gupta</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Dinesh Kumar Gupta"
                  />
                </div>
              </article>

              {/* Third Testimonial */}
              <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "It's very good place at Ghodegaon for breakfast,  lunch and dinner. They have speciality in Misal pav. You must try this once you visit Ghodegaon. I must tell you will actually love it. It's actually spicy so you will enjoy if you like spicy food. But don't worry if you don't eat spicy because they also serve curd with it. So the people who don't eat spicy can also enjoy this menu."
                </p>
                <h4 className="testimonial-1-name">Yogeh Kale</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Yogeh Kale"
                  />
                </div>
              </article>

               {/* Third Testimonial */}
               <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "Pure veg. Dear tourist's visit this place for quality food if you want taste is good and price is also low as per my knowledge. This is the last place to eat good food while driving through bhimashankar way. Decision is your's. Happy journey. Har har mahadev."
                </p>
                <h4 className="testimonial-1-name">Pavan lilhare</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Pavan lilhare"
                  />
                </div>
              </article>


               {/* Third Testimonial */}
               <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "Great food at a reasonable price. No artificial flavors, the food was digestible. No excessive oils. Did not experience any acidity or post dinner burning even after travelling 170kms further."
                </p>
                <h4 className="testimonial-1-name">Sanika Mohite</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Sanika Mohite"
                  />
                </div>
              </article>

               {/* Third Testimonial */}
               <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "We had a very wonderful start of the day here. The breakfast was awesome. Also the service was very prompt and humble. But the most fascinating part of my experience is about the thought- provoking and catchy lines written on the walls. It is a unique concept to serve not only good and tasty food but also to provide good and mind nourishing thoughts as well. Though I can't understand Marathi language, with my wife's help (she knows Marathi!😊), I enjoyed the most of the slogans. Thanks a lot for the food of mind !!"
                </p>
                <h4 className="testimonial-1-name">Tattvamasi Swetketu</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Tattvamasi Swetketu"
                  />
                </div>
              </article>


               {/* Third Testimonial */}
               <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "Excellent Service, ample space for parking the vehicle, staff is too polite and supportive, minimal waiting time after order. Food is delicious and tasty. I would refer this hotel to enjoy delicious taste of misal paav."
                </p>
                <h4 className="testimonial-1-name">Sachin Talekar</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Sachin Talekar"
                  />
                </div>
              </article>


               {/* Third Testimonial */}
               <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "Very good food and services. The staff is good in Behaviour. The restaurant is cleaned.
I have ordered kaju panner masala and dal tadka both very tasty and the best part is very fast service.
I will visit again. Good job"
                </p>
                <h4 className="testimonial-1-name">Varun Pandey</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Varun Pandey"
                  />
                </div>
              </article>


               {/* Third Testimonial */}
               <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "You find fantastic dishes for Nashta, Lunch and Dinner... Special Dish in Nashta is Misal Paav, actually it's a great test here...and you find a Veg Dishes for Lunch and Dinner...You surely try here is Paneer Chilli and Veg Biryani...other dishes also fantastic..."
                </p>
                <h4 className="testimonial-1-name">Ganesh Gavhane</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Ganesh Gavhane"
                  />
                </div>
              </article>

               {/* Third Testimonial */}
               <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "Great place to eat for vegetarians with family or friends. You can enjoy tasty 'Misal' here. Must visit when you're passing.🤘🤘🤘 …"
                </p>
                <h4 className="testimonial-1-name">Tejas Pingale</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="Tejas Pingale"
                  />
                </div>
              </article>

               {/* Third Testimonial */}
               <article className="col-lg-4 col-md-6 testimonial-1-block">
                <div className="testimonial-1-quote-icon">
                  <i className="icon-18"></i>
                </div>
                <p className="testimonial-1-review-desc">
                  "Greate quality  food with affordable price, must visit if u r going to bhimashankar jyotirling temple"
                </p>
                <h4 className="testimonial-1-name">KETAN DAREKAR</h4>
                <div className="testimonial-1-subtitle">Customer</div>
                <div className="testimonial-1-rating">★★★★★</div>
                <div className="testimonial-1-author-thumb">
                  <img
                    src="assets/images/icons/avatar.jpg"
                    alt="KETAN DAREKAR"
                  />
                </div>
              </article>
            </div>
            </div>
        </section>
      </Layout>
      <style jsx global>{`
        .btn-ashirwad.write-review-btn {
          font-size: 1.1rem;
          padding: 0.7rem 2.2rem;
          border-radius: 2rem;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(37,211,102,0.10);
          margin-bottom: 1.5rem;
        }
        .btn-ashirwad.write-review-btn:hover {
          background: linear-gradient(90deg, #128C7E 0%, #25D366 100%);
          color: #fff;
          transform: translateY(-2px) scale(1.04);
        }
        .testimonial-masonry {
          column-count: 3;
          column-gap: 2.5rem;
        }
        @media (max-width: 1200px) {
          .testimonial-masonry { column-count: 2; }
        }
        @media (max-width: 767px) {
          .testimonial-masonry { column-count: 1; }
        }
        .testimonial-1-block {
          display: inline-block;
          width: 100%;
          margin-bottom: 2.5rem;
          position: relative;
        }
        .testimonial-1-block::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          pointer-events: none;
          background: linear-gradient(120deg,rgba(37,211,102,0.04) 0%,rgba(18,140,126,0.03) 100%);
          z-index: 1;
        }
        .testimonial-1-rating {
          font-size: 1.3rem;
          color: #25D366;
          margin-bottom: 1rem;
          letter-spacing: 2px;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInStars 0.7s 0.5s forwards;
        }
        @keyframes fadeInStars {
          to { opacity: 1; transform: none; }
        }
        .testimonial-1-subtitle {
          color: #888;
          font-size: 0.98rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .testimonial-page .row {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem 2rem;
          justify-content: center;
        }
        .testimonial-1-block {
          background: #fff;
          border-radius: 1.5rem;
          box-shadow: 0 4px 24px rgba(37,211,102,0.08);
          border-left: 6px solid #25D366;
          padding: 2.5rem 2rem 2rem 2.5rem;
          position: relative;
          transition: box-shadow 0.2s, transform 0.2s;
          min-height: 340px;
          margin: 0 0 0.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.7s ease forwards;
        }
        .testimonial-1-block:nth-child(1) { animation-delay: 0.05s; }
        .testimonial-1-block:nth-child(2) { animation-delay: 0.12s; }
        .testimonial-1-block:nth-child(3) { animation-delay: 0.19s; }
        .testimonial-1-block:nth-child(4) { animation-delay: 0.26s; }
        .testimonial-1-block:nth-child(5) { animation-delay: 0.33s; }
        .testimonial-1-block:nth-child(6) { animation-delay: 0.40s; }
        .testimonial-1-block:nth-child(7) { animation-delay: 0.47s; }
        .testimonial-1-block:nth-child(8) { animation-delay: 0.54s; }
        .testimonial-1-block:nth-child(9) { animation-delay: 0.61s; }
        .testimonial-1-block:nth-child(10) { animation-delay: 0.68s; }
        .testimonial-1-block:nth-child(11) { animation-delay: 0.75s; }
        .testimonial-1-block:nth-child(12) { animation-delay: 0.82s; }
        .testimonial-1-block:hover {
          box-shadow: 0 12px 36px 0 #25D36633, 0 2px 8px rgba(37,211,102,0.16);
          transform: translateY(-8px) scale(1.04);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .testimonial-1-quote-icon {
          position: absolute;
          top: 1.2rem;
          left: 1.2rem;
          font-size: 2.5rem;
          color: #25D36633;
          z-index: 1;
        }
        .testimonial-1-block::before {
          content: "“";
          position: absolute;
          top: 18px;
          right: 24px;
          font-size: 4rem;
          color: #25D36622;
          font-family: serif;
          z-index: 0;
          pointer-events: none;
        }
        .testimonial-1-review-desc {
          font-size: 1.18rem;
          font-style: italic;
          color: #222;
          margin-bottom: 1.5rem;
          line-height: 1.7;
          position: relative;
          z-index: 2;
          text-align: center;
        }
        .testimonial-1-author-thumb {
          margin: 0 auto 0.5rem auto;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #25D366;
          box-shadow: 0 2px 8px rgba(37,211,102,0.10);
          animation: floatPhoto 3s ease-in-out infinite alternate;
        }
        @keyframes floatPhoto {
          to { transform: translateY(-8px) scale(1.05);}
        }
        .testimonial-1-author-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        .testimonial-1-name {
          font-weight: 700;
          font-size: 1.1rem;
          color: #128C7E;
          margin-bottom: 0.2rem;
          text-align: center;
        }
        /* Add star rating below each name */
        .testimonial-1-name + .testimonial-1-rating {
          margin-top: 0.2rem;
        }
        /* Fade-in animation for section heading */
        .section_heading {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInHeading 0.8s 0.2s forwards;
        }
        @keyframes fadeInHeading {
          to { opacity: 1; transform: none; }
        }
        /* Responsive adjustments */
        @media (max-width: 991px) {
          .testimonial-1-block {
            min-height: 320px;
            padding: 2rem 1rem 1.5rem 1.5rem;
          }
        }
        @media (max-width: 767px) {
          .testimonial-page .row {
            gap: 1.2rem 0.3rem;
          }
          .testimonial-1-block {
            min-height: 240px;
            padding: 1.2rem 0.5rem 1rem 1rem;
            width: 100%;
            min-width: 0;
          }
        }
        @media (max-width: 600px) {
          .testimonial-1-block {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </>
  );
}
