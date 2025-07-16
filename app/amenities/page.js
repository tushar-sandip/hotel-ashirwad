import Layout from "@/components/layout/Layout";
import Link from "next/link";
import styles from "./AmenitiesSection.module.scss";
export default function Home() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Amenities">
        <div>
          <section className="section-padding pb-5">
            <div className="auto-container">
              <div className="section_heading text-center">
                <span className="section_heading_title_small">Amenities</span>
                <h2 className="section_heading_title_big mb_20">
                  Enjoy Generous Amenities <br /> at The Hotel
                </h2>
                <section className={styles.amenitiesListSection} aria-label="Amenities List">
          <ol className={styles.amenitiesList}>
            <li>
              <strong>Spacious & Elegant Rooms:</strong> Our well-appointed rooms are designed with modern furnishings, offering a tranquil environment to relax after a busy day. Each room is equipped with premium amenities like air-conditioning, high-speed Wi-Fi, and a minibar to ensure your comfort.
            </li>
            <li>
              <strong>Exquisite Dining:</strong> Indulge in a culinary journey at our in-house restaurant, offering a blend of local and international delicacies. Enjoy breakfast, lunch, and dinner with top-tier service and flavorful dishes.
            </li>
            <li>
              <strong>Wellness & Fitness:</strong> Rejuvenate your body and mind with our wellness services, including a state-of-the-art fitness center and soothing spa treatments.
            </li>
            <li>
              <strong>Banquet & Conference Facilities:</strong> Whether you're hosting a corporate event, wedding, or family gathering, our spacious banquet hall and conference rooms are designed to meet your specific needs with cutting-edge facilities.
            </li>
            <li>
              <strong>Personalized Services:</strong> At Hotel Ashirwad, we believe in attention to detail. Our dedicated staff is available round the clock to offer concierge services, room service, and any special requests you may have.
            </li>
            <li>
              <strong>Prime Location:</strong> Situated in the heart of Ambegaon, our hotel provides easy access to local attractions, transport hubs, and business centers.
            </li>
          </ol>
        </section>
              </div>
              <div className="row">
                <div className="col-lg-12  center">
                  <div className="">
                    <div className=" hvr-img-zoom-1" >
                      <img src="assets/images/shape/amenites.jpeg" alt="" />
                    </div>
                    {/* <div className="amenities-1-content">
                      <p className="fw_medium theme-color mb_5">BREAKFAST</p>
                      <h4 className="mb_10">Continental Breakfast</h4>
                      <p>
                        Sodales posuere facilisi metus element ipsum egestas
                        amet amet mattis amet commodo tempor.
                      </p>
                    </div> */}
                  </div>
                </div>
                {/* <div className="col-lg-6">
                                <div className="amenities-1-block">
                                <div className="amenities-1-image hvr-img-zoom-1"><img src="assets/images/shape/amenites.jpeg" alt="" /></div>
                                <div className="amenities-1-content">
                                    <p className="fw_medium theme-color mb_5">WATER FUN</p>
                                    <h4 className="mb_10">Swimming Pool</h4>
                                    <p>Sodales posuere facilisi metus element ipsum egestas amet amet mattis amet commodo tempor.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="amenities-1-block">
                                <div className="amenities-1-image hvr-img-zoom-1"><img src="assets/images/resource/amenities-3.jpg" alt="" /></div>
                                <div className="amenities-1-content">
                                    <p className="fw_medium theme-color mb_5">HILLSIDE RIDE</p>
                                    <h4 className="mb_10">Cycling Experience</h4>
                                    <p>Sodales posuere facilisi metus element ipsum egestas amet amet mattis amet commodo tempor.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="amenities-1-block">
                                <div className="amenities-1-image hvr-img-zoom-1"><img src="assets/images/resource/amenities-4.jpg" alt="" /></div>
                                <div className="amenities-1-content">
                                    <p className="fw_medium theme-color mb_5">FITNESS</p>
                                    <h4 className="mb_10">Yoga & Fitness</h4>
                                    <p>Sodales posuere facilisi metus element ipsum egestas amet amet mattis amet commodo tempor.</p>
                                </div>
                                </div>
                            </div> */}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
