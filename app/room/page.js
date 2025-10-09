"use client";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import styles from "./room.module.scss";
import RoomCard from "./RoomCard";
import React from "react";
import Head from "next/head";
const roomData = [
  {
    imageSrc: "/assets/Rooms/room4.jpeg",
    startingPrice: "3700.0",
    rating: 5,
    title: "Luxury Double Bed Room",
    description: "Experience elevated comfort in our Luxury Double Bed Room, thoughtfully designed for relaxation and style.",
    amenities: ["Air Conditioning", "High-speed Wi-Fi", "Smart TV"],
    detailsLink: "/room-details-luxury",
    animationDuration: ".8s",
    isBestSeller: true,
    isNew: false,
    oldPrice: "4000.0",
    reviews: 32,
  },
  {
    imageSrc: "/assets/Rooms/room5.jpeg",
    startingPrice: "3700.0",
    rating: 5,
    title: "VIP Single Bed Room",
    description: "Enjoy a blend of comfort and style in our VIP Single Bed Room, ideal for solo travelers.",
    amenities: ["Free Wi-Fi", "Smart TV", "Work Desk"],
    detailsLink: "/room-details-VIP",
    animationDuration: "1.2s",
    isBestSeller: false,
    isNew: true,
    oldPrice: "3800.0",
    reviews: 15,
  },
  {
    imageSrc: "/assets/Rooms/room7.jpeg",
    startingPrice: "3200.0",
    rating: 5,
    title: "Delux Single Bed Room",
    description: "Designed for comfort and convenience, our Deluxe Single Bed Room offers a spacious layout.",
    amenities: ["Flat-screen TV", "Work Desk", "Private Bathroom"],
    detailsLink: "/room-details-delux",
    animationDuration: "1.5s",
    isBestSeller: true,
    isNew: false,
    oldPrice: "3500.0",
    reviews: 28,
  },
  {
    imageSrc: "/assets/Rooms/room6.jpeg",
    startingPrice: "2700.0",
    rating: 5,
    title: "Single Bed Room",
    description: "Perfect for solo travelers, our Single Bed Room offers a clean, comfortable space.",
    amenities: ["Wi-Fi", "TV", "Private Bathroom"],
    detailsLink: "/room-details-single",
    animationDuration: ".8s",
    isBestSeller: false,
    isNew: false,
    oldPrice: "2800.0",
    reviews: 10,
  }
];

function getDiscountPercent(oldPrice, newPrice) {
  if (!oldPrice || !newPrice) return null;
  const oldP = Number(oldPrice), newP = Number(newPrice);
  if (oldP > newP) return Math.round(100 - (newP / oldP) * 100);
  return null;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Rooms in Ghodegaon Pune | Near Manchar & Bhimashankar</title>
        <meta name="description" content="Premium rooms at Ashirwad Hotel in Ghodegaon, Pune. Convenient stay near Manchar and close to Bhimashankar Temple. Pure Veg, family-friendly amenities." />
        <meta name="keywords" content="Rooms in Ghodegaon, hotel near Manchar, stay near Bhimashankar, Ghodegaon Pune hotel, lodging Ghodegaon" />
        <link rel="canonical" href="https://hotelashirwadlodging.com/room" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Ashirwad Hotel",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bhimashankar Road, Ambegaon",
                addressLocality: "Ghodegaon",
                addressRegion: "Maharashtra",
                postalCode: "412408",
                addressCountry: "IN"
              },
              url: "https://hotelashirwadlodging.com/room",
              description: "Rooms in Ghodegaon, Pune – near Manchar and Bhimashankar.",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Free Wi‑Fi", value: true },
                { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
                { "@type": "LocationFeatureSpecification", name: "Room Service", value: true }
              ],
              areaServed: ["Ghodegaon", "Manchar", "Bhimashankar"],
            })
          }}
        />
      </Head>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Room Style">
        <main role="main" className={styles.pageContainer}>
          <section 
            className={`section-padding ${styles.roomsSection}`} 
            aria-labelledby="rooms-heading"
            style={{ background: "linear-gradient(135deg, #f8fafc 60%, #fff 100%)" }}
          >
            <div className="auto-container">
              <header className={styles.sectionHeader}>
                <h1 id="rooms-heading" className={styles.sectionTitle}>
                  Our <span className={styles.titleAccent}>Premium</span> Rooms
                </h1>
                <div className={styles.sectionDivider} aria-hidden="true"></div>
                <p className={styles.sectionSubtitle}>
                  Premium hotel rooms in <strong>Ghodegaon, Pune</strong>, ideally located on the Pune–Nashik highway,
                  <strong> near Manchar</strong> and a convenient base for visitors to <strong>Bhimashankar</strong>.
                </p>
                <div className={styles.statsContainer}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>4</span>
                    <span className={styles.statLabel}>Room Types</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>5★</span>
                    <span className={styles.statLabel}>Average Rating</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>85+</span>
                    <span className={styles.statLabel}>Happy Guests</span>
                  </div>
                </div>
                <address style={{
                  margin: '12px auto 0',
                  maxWidth: 720,
                  background: '#ffffff',
                  border: '1px solid rgba(15,23,42,0.06)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  color: '#334155',
                  lineHeight: 1.5
                }}>
                  <strong>Hotel Ashirwad</strong>, Ghodegaon, near Manchar, near Bhimashankar<br/>
                  Bhimashankar Road, Ambegaon, Maharashtra 412408
                </address>
              </header>
              
              <div className={styles.roomGridModern} role="grid" aria-label="Available rooms">
                {roomData.map((room, index) => (
                  <article 
                    key={room.title} 
                    className={styles.roomCardWrapper}
                    role="gridcell"
                    aria-labelledby={`room-title-${index}`}
                  >
                    <RoomCard room={room} index={index} />
                    {index < roomData.length - 1 && (
                      <hr className={styles.roomDividerNew} aria-hidden="true" />
                    )}
                  </article>
                ))}
              </div>
              
              <footer className={styles.sectionFooter}>
                <p className={styles.footerText}>
                  All rooms include complimentary Wi-Fi, air conditioning, and 24/7 room service.
                </p>
                <div className={styles.ctaContainer}>
                  <Link href="/booking" className={styles.primaryCta}>
                    Book Your Stay Now
                    <span className={styles.ctaIcon} aria-hidden="true">→</span>
                  </Link>
                  <Link href="/contact" className={styles.secondaryCta}>
                    Contact Us
                  </Link>
                </div>
              </footer>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}