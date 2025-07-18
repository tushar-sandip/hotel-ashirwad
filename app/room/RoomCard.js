import Link from "next/link";
import styles from "./room.module.scss";
import React from 'react';

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

export default function RoomCard({ room }) {
  const discount =
    room.oldPrice && room.startingPrice
      ? Math.round(100 - (Number(room.startingPrice) / Number(room.oldPrice)) * 100)
      : null;

  return (
    <div className={styles.cardFadeIn}>
      <div className={styles.roomCardNew}>
        <div className={styles.imageSection}>
          <img src={room.imageSrc} alt={room.title} className={styles.roomImageNew} />
          <div className={styles.imageGradientOverlayNew}></div>
          <div className={styles.badgeRowNew}>
            {discount && (
              <span className={`${styles.badgeNew} ${styles.discountBadgeNew}`}>{discount}% OFF</span>
            )}
            {room.isBestSeller && (
              <span className={`${styles.badgeNew} ${styles.bestSellerBadgeNew}`}>Best Seller</span>
            )}
            {room.isNew && (
              <span className={`${styles.badgeNew} ${styles.newBadgeNew}`}>New</span>
            )}
          </div>
          <div className={styles.priceTagNew}>
            {room.oldPrice && <span className={styles.oldPriceNew}>₹{room.oldPrice}</span>}
            <span className={styles.currentPriceNew}>₹{room.startingPrice}/night</span>
          </div>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.contentBoxNew}>
            <div className={styles.room1RatingNew}>
              {Array.from({ length: room.rating }, (_, i) => (
                <i key={i} className="icon-6" style={{ color: "#FFD700" }} aria-label="star"></i>
              ))}
              {room.rating < 5 &&
                Array.from({ length: 5 - room.rating }, (_, i) => (
                  <i key={i} className="icon-6" style={{ color: "#ccc" }} aria-label="star"></i>
                ))}
              <span className={styles.reviewCountNew}>({room.reviews} reviews)</span>
            </div>
            <h4 className={styles.roomTitleNew}>
              <Link href={room.detailsLink}>{room.title}</Link>
            </h4>
            <p className={styles.roomDescNew}>{room.description}</p>
            <div className={styles.amenitiesRowNew}>
              {room.amenities &&
                room.amenities.map((amenity, i) => (
                  <span key={i} className={styles.amenityChipNew}>
                    <span className={styles.amenityIconNew}>{amenityIcons[amenity] || "•"}</span>
                    {amenity}
                  </span>
                ))}
            </div>
            <div className={styles.bookBtnRowNew}>
              <Link href={room.detailsLink} className={styles.bookNowBtnNew} aria-label={`Book now for ${room.title}`}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 