"use client";
import Link from "next/link";
import styles from "./room.module.scss";
import React, { useMemo, useState } from 'react';

// Emoji icons for amenities (replace with react-icons if you want)
const amenityIcons = {
  "Air Conditioning": "❄️",
  "High-speed Wi-Fi": "📶",
  "Free Wi-Fi": "📶",
  "Smart TV": "📺",
  "Flat-screen TV": "📺",
  "TV": "📺",
  "Work Desk": "💻",
  "Private Bathroom": "🛁",
  "Balcony": "🌅",
  "Complimentary Breakfast": "🥐",
  "Large Bathroom": "🚿",
  "Two Double Beds": "🛏️",
  "Single Bed": "🛏️",
  "King-size Bed": "🛏️",
  "Sitting Area": "🛋️",
};

export default function RoomCard({ room, index }) {
  const discount =
    room.oldPrice && room.startingPrice
      ? Math.round(100 - (Number(room.startingPrice) / Number(room.oldPrice)) * 100)
      : null;

  const initialSrc = useMemo(() => {
    if (!room?.imageSrc) return "/assets/images/compressed/sideEntrance1.jpg";
    return room.imageSrc.startsWith("/") ? room.imageSrc : `/${room.imageSrc}`;
  }, [room?.imageSrc]);

  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article 
      className={`${styles.cardFadeIn} ${styles.roomCardNew}`}
      itemScope 
      itemType="https://schema.org/HotelRoom"
      aria-labelledby={`room-title-${index}`}
    >
      <div className={styles.imageSection} data-loaded={imageLoaded ? 'true' : 'false'}>
        <img 
          src={imgSrc} 
          alt={`${room.title} - Premium hotel room`} 
          className={styles.roomImageNew}
          loading="lazy"
          itemProp="image"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            if (imgSrc !== "/assets/images/compressed/sideEntrance1.jpg") {
              setImgSrc("/assets/images/compressed/sideEntrance1.jpg");
            }
          }}
        />
        <div className={styles.imageGradientOverlayNew} aria-hidden="true"></div>
        
        <div className={styles.badgeRowNew} role="group" aria-label="Room badges">
          {discount && (
            <span 
              className={`${styles.badgeNew} ${styles.discountBadgeNew}`}
              aria-label={`${discount} percent discount`}
            >
              {discount}% OFF
            </span>
          )}
          {room.isBestSeller && (
            <span 
              className={`${styles.badgeNew} ${styles.bestSellerBadgeNew}`}
              aria-label="Best seller room"
            >
              Best Seller
            </span>
          )}
          {room.isNew && (
            <span 
              className={`${styles.badgeNew} ${styles.newBadgeNew}`}
              aria-label="New room"
            >
              New
            </span>
          )}
        </div>
        
        <div className={styles.priceTagNew} itemProp="offers" itemScope itemType="https://schema.org/Offer">
          {room.oldPrice && (
            <span className={styles.oldPriceNew} aria-label={`Original price ${room.oldPrice} rupees`}>
              ₹{room.oldPrice}
            </span>
          )}
          <span 
            className={styles.currentPriceNew}
            itemProp="price"
            content={room.startingPrice}
          >
            ₹{room.startingPrice}/night
          </span>
          <meta itemProp="priceCurrency" content="INR" />
        </div>
      </div>
      
      <div className={styles.contentSection}>
        <div className={styles.contentBoxNew}>
          <div className={styles.room1RatingNew} role="img" aria-label={`${room.rating} out of 5 stars`}>
            {Array.from({ length: room.rating }, (_, i) => (
              <i 
                key={i} 
                className="icon-6" 
                style={{ color: "#FFD700" }} 
                aria-hidden="true"
              ></i>
            ))}
            {room.rating < 5 &&
              Array.from({ length: 5 - room.rating }, (_, i) => (
                <i 
                  key={i} 
                  className="icon-6" 
                  style={{ color: "#ccc" }} 
                  aria-hidden="true"
                ></i>
              ))}
            <span className={styles.reviewCountNew}>({room.reviews} reviews)</span>
          </div>
          
          <h3 id={`room-title-${index}`} className={styles.roomTitleNew} itemProp="name">
            <Link href={room.detailsLink} className={styles.roomTitleLink}>
              {room.title}
            </Link>
          </h3>
          
          <p className={styles.roomDescNew} itemProp="description">
            {room.description}
          </p>
          
          <div className={styles.amenitiesRowNew} role="list" aria-label="Room amenities">
            {room.amenities &&
              room.amenities.map((amenity, i) => (
                <span 
                  key={i} 
                  className={styles.amenityChipNew}
                  role="listitem"
                  aria-label={amenity}
                >
                  <span className={styles.amenityIconNew} aria-hidden="true">
                    {amenityIcons[amenity] || "•"}
                  </span>
                  {amenity}
                </span>
              ))}
          </div>
          
          <div className={styles.bookBtnRowNew}>
            <Link 
              href={room.detailsLink} 
              className={styles.bookNowBtnNew}
              aria-label={`View details and book ${room.title}`}
            >
              <span className={styles.btnText}>Book Now</span>
              <span className={styles.btnIcon} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
} 