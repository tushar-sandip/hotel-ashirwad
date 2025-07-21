"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import styles from "./contact.module.scss";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.form_name.value;
    const email = form.email.value;
    const subject = form.form_subject.value;
    const message = form.form_message.value;
    const waMessage = `Contact Inquiry\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const phoneNumber = "9130375375";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(waLink, '_blank');
  };

  return (
    <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact Us">
      <div className={styles["contact-float-root"]}>
        <div className={styles["contact-map-bg"]}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/place/Hotel+Ashirwad/@19.0362647,73.8454066,17z/data=!4m14!1m7!3m6!1s0x3bdd3800ef4bf4f5:0xe1642ebcd07a4c88!2sHotel+Ashirwad!8m2!3d19.039955!4d73.8440164!16s%2Fg%2F11dxss1cmf!3m5!1s0x3bdd390065b26a65:0x4971f275bb3e108e!8m2!3d19.0368366!4d73.8478228!16s%2Fg%2F11m59q_5wr?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3Dembed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed0!2sBhimashankar%20Road%2C%20Ambegaon%2C%20Maharashtra%20412408!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            loading="lazy"
          ></iframe>
        </div>
        <div className={styles["contact-float-card"]}>
          <div className={styles["contact-header"]}>
            <span className={styles["contact-subtitle"]}>Our Location</span>
            <h2 className={styles["contact-title"]}>Hotel Ashirwad</h2>
          </div>
          <ul className={styles["contact-list"]}>
            <li>
              <i className="icon-27"></i>
              <div>
                <span>Location</span>
                <p>Bhimashankar Road, Ambegaon, Maharashtra 412408</p>
              </div>
            </li>
            <li>
              <i className="icon-28"></i>
              <div>
                <span>Phone No</span>
                <p>
                  <Link href="tel:9130375375">9130375375</Link>
                </p>
              </div>
            </li>
            <li>
              <i className="icon-29"></i>
              <div>
                <span>Email</span>
                <p>
                  <Link href="mailto:hotelashirwadlodging@gmail.com">
                    hotelashirwadlodging@gmail.com
                  </Link>
                </p>
              </div>
            </li>
          </ul>
          <form className={styles["contact-form"]} onSubmit={handleSubmit}>
            <input type="text" name="form_name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="form_subject" placeholder="Subject" required />
            <textarea name="form_message" placeholder="Message" rows={4} />
            <button className={styles["contact-btn"]} type="submit">
              Submit Now <i className="flaticon-right-arrow-1"></i>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}