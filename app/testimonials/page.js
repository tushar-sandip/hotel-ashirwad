import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Testimonials">
        <section className="section-padding testimonial-page">
          <div className="auto-container">
            <div className="section_heading text-center mb_50">
              <span className="section_heading_title_small">Testimonials</span>
              <h2 className="section_heading_title_big">
                What They're Say <br /> About Us?
              </h2>
            </div>
            <div className="row ">
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
    </>
  );
}
