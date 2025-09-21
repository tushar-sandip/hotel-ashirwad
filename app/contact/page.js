"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import styles from "./contact.module.scss";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('form_name');
    const email = formData.get('email');
    const subject = formData.get('form_subject');
    const message = formData.get('form_message');
    
    const waMessage = `🏨 Hotel Ashirwad - Contact Inquiry\n\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Subject: ${subject}\n💬 Message: ${message}\n\nThank you for contacting us!`;
    const phoneNumber = "919130375375";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(waLink, '_blank');
  };

  return (
    <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact Us">
      <main className={styles.contactPage} role="main">
        <section 
          className={styles.heroSection}
          aria-labelledby="contact-heading"
        >
          <div className={styles.heroContent}>
            <header className={styles.heroHeader}>
              <span className={styles.heroBadge} aria-label="Contact us badge">
                <span className={styles.badgeIcon} aria-hidden="true">📍</span>
                Get In Touch
              </span>
              <h1 id="contact-heading" className={styles.heroTitle}>
                Contact <span className={styles.titleAccent}>Hotel Ashirwad</span>
              </h1>
              <p className={styles.heroSubtitle}>
                We're here to help you plan your perfect stay. Reach out to us anytime!
              </p>
            </header>
          </div>
        </section>

        <section className={styles.contactSection} aria-labelledby="contact-info-heading">
          <div className={styles.contactContainer}>
            <div className={styles.mapSection}>
              <div className={styles.mapWrapper}>
                <iframe
                  title="Hotel Ashirwad Location - Bhimashankar Road, Ambegaon, Maharashtra"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed0!2sBhimashankar%20Road%2C%20Ambegaon%2C%20Maharashtra%20412408!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={styles.mapIframe}
                  aria-label="Interactive map showing Hotel Ashirwad location"
                ></iframe>
                <div className={styles.mapOverlay} aria-hidden="true"></div>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardHeader}>
                <h2 id="contact-info-heading" className={styles.cardTitle}>
                  Hotel Information
                </h2>
                <p className={styles.cardSubtitle}>
                  Visit us at our beautiful location in Maharashtra
                </p>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.infoItem} itemScope itemType="https://schema.org/PostalAddress">
                  <div className={styles.infoIcon} aria-hidden="true">
                    <i className="icon-27"></i>
                  </div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoLabel}>Address</h3>
                    <p className={styles.infoText} itemProp="streetAddress">
                      Bhimashankar Road, Ambegaon
                    </p>
                    <p className={styles.infoText} itemProp="addressLocality">
                      Maharashtra 412408, India
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem} itemScope itemType="https://schema.org/ContactPoint">
                  <div className={styles.infoIcon} aria-hidden="true">
                    <i className="icon-28"></i>
                  </div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoLabel}>Phone</h3>
                    <p className={styles.infoText}>
                      <Link 
                        href="tel:+919130375375" 
                        className={styles.contactLink}
                        itemProp="telephone"
                        aria-label="Call Hotel Ashirwad"
                      >
                        +91 91303 75375
                      </Link>
                    </p>
                    <p className={styles.infoText}>
                      <Link 
                        href="tel:+919738375375" 
                        className={styles.contactLink}
                        itemProp="telephone"
                        aria-label="Call Hotel Ashirwad alternative number"
                      >
                        +91 97383 75375
                      </Link>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem} itemScope itemType="https://schema.org/ContactPoint">
                  <div className={styles.infoIcon} aria-hidden="true">
                    <i className="icon-29"></i>
                  </div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoLabel}>Email</h3>
                    <p className={styles.infoText}>
                      <Link 
                        href="mailto:hotelashirwadlodging@gmail.com"
                        className={styles.contactLink}
                        itemProp="email"
                        aria-label="Email Hotel Ashirwad"
                      >
                        hotelashirwadlodging@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <form 
                className={styles.contactForm} 
                onSubmit={handleSubmit}
                aria-labelledby="contact-form-heading"
                noValidate
              >
                <div className={styles.formHeader}>
                  <h3 id="contact-form-heading" className={styles.formTitle}>
                    Send us a Message
                  </h3>
                  <p className={styles.formSubtitle}>
                    We'll get back to you within 24 hours
                  </p>
                </div>

                <div className={styles.formFields}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="form_name" className={styles.fieldLabel}>
                      Full Name <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="form_name"
                      name="form_name" 
                      placeholder="Enter your full name"
                      className={styles.formInput}
                      required
                      aria-describedby="name-error"
                      autoComplete="name"
                    />
                    <div id="name-error" className={styles.fieldError} role="alert" aria-live="polite"></div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="email" className={styles.fieldLabel}>
                      Email Address <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder="Enter your email address"
                      className={styles.formInput}
                      required
                      aria-describedby="email-error"
                      autoComplete="email"
                    />
                    <div id="email-error" className={styles.fieldError} role="alert" aria-live="polite"></div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="form_subject" className={styles.fieldLabel}>
                      Subject <span className={styles.required} aria-label="required">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="form_subject"
                      name="form_subject" 
                      placeholder="What is this about?"
                      className={styles.formInput}
                      required
                      aria-describedby="subject-error"
                    />
                    <div id="subject-error" className={styles.fieldError} role="alert" aria-live="polite"></div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="form_message" className={styles.fieldLabel}>
                      Message
                    </label>
                    <textarea 
                      id="form_message"
                      name="form_message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={4}
                      className={styles.formTextarea}
                      aria-describedby="message-error"
                    />
                    <div id="message-error" className={styles.fieldError} role="alert" aria-live="polite"></div>
                  </div>
                </div>

                <div className={styles.formActions}>
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    aria-describedby="submit-help"
                  >
                    <span className={styles.buttonText}>Send Message</span>
                    <span className={styles.buttonIcon} aria-hidden="true">
                      <i className="flaticon-right-arrow-1"></i>
                    </span>
                  </button>
                  <p id="submit-help" className={styles.submitHelp}>
                    This will open WhatsApp to send your message
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-heading">
          <div className={styles.ctaContainer}>
            <h2 id="cta-heading" className={styles.ctaTitle}>
              Ready to Book Your Stay?
            </h2>
            <p className={styles.ctaSubtitle}>
              Experience the comfort and hospitality of Hotel Ashirwad
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/booking" className={styles.primaryCta}>
                Book Now
                <span className={styles.ctaIcon} aria-hidden="true">→</span>
              </Link>
              <Link href="/room" className={styles.secondaryCta}>
                View Rooms
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}