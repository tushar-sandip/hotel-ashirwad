"use client";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import styles from "./food.module.scss";

export default function FoodDetails() {

  const [openCategory, setOpenCategory] = useState(0); // Track which category is open

  const menuCategories = [
    {
      category: "Paneer Dishes",
      items: [
        {
          name: "Paneer Masala (पनीर मसाला)",
          price: 110,
          description: "Paneer cooked in a rich and spicy gravy.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Mutter Paneer (मटर पनीर)",
          price: 110,
          description: "Paneer and peas in a mildly spiced curry.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Paneer Butter Masala (पनीर बटर मसाला)",
          price: 120,
          description: "Paneer in a creamy butter-based gravy.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Palak Paneer (पालक पनीर)",
          price: 110,
          description: "Paneer cooked with fresh spinach leaves.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Paneer Kadai (पनीर कढाई)",
          price: 170,
          description: "Paneer cooked in a traditional wok with spices.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Paneer Tikka Masala (पनीर टिक्का मसाला)",
          price: 130,
          description: "Grilled paneer in a spiced tomato gravy.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Shahi Paneer (शाही पनीर)",
          price: 130,
          description: "Royal paneer cooked with rich ingredients.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Paneer Methi Mutter Malai (पनीर मेथी मटर मलाई)",
          price: 120,
          description: "Paneer, fenugreek, and peas in a creamy sauce.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Malai Kofta (मलाई कोप्ता)",
          price: 170,
          description: "Fried dumplings of paneer in a creamy gravy.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Paneer Malavani (पनीर मालवणी)",
          price: 200,
          description: "Paneer cooked with Malvani spices.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Paneer Chilli (पनीर चिल्ली)",
          price: 140,
          description: "Paneer stir-fried with Chinese spices.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Paneer Bhurji (पनीर भुर्जी)",
          price: 120,
          description:
            "Scrambled paneer cooked with onions, tomatoes, and spices.",
          image: "ashootelFinalLogo.png",
        },
      ],
    },
    {
      category: "South Indian Dishes",
      items: [
        {
          name: "Sp. Kolhapuri Dahi Misal (स्पे. कोल्हापुरी दही मिसळ)",
          price: 50,
          description: "Special Kolhapuri Misal with curd.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Pohe (पोहे)",
          price: 35,
          description: "Spicy Pohe with peas.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Pav Jodi (पाव जोडी)",
          price: 8,
          description: "Pav served with spicy chutney.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Butter Pav Jodi (बटर पाव जोडी)",
          price: 15,
          description: "Butter Pav served with spicy chutney.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Dahi Vati (दही वाटी)",
          price: 25,
          description: "Dahi Vati served with chutney.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Khichadi (खिचडी)",
          price: 40,
          description: "Savory rice dish made with lentils.",
          image: "ashootelFinalLogo.png",
        },
      ],
    },
    {
      category: "Punjabi Dishes",
      items: [
        {
          name: "Ashirwad Spl. Veg. (आशिर्वाद स्पेशल व्हेज)",
          price: 250,
          description: "Special mixed Punjabi vegetable dish.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Veg. Kolhapuri (व्हेज कोल्हापुरी)",
          price: 105,
          description: "Spicy mixed vegetable curry.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Mix Veg. (मिक्स वेज)",
          price: 100,
          description: "Mixed vegetables curry.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Veg. Makhani (Sweet) (व्हेज मखनी (स्वीट))",
          price: 120,
          description: "Sweet Punjabi curry made with vegetables.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Veg. Koram (व्हेज कोरम)",
          price: 120,
          description: "Punjabi vegetable stew.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Veg. Kadai (व्हेज कढाई)",
          price: 160,
          description: "Spicy vegetables cooked in a kadai.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Veg. Bharata (व्हेज भरता)",
          price: 140,
          description: "Mashed spiced vegetables.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Veg. Maharaja (व्हेज महाराजा)",
          price: 140,
          description: "Royal mixed vegetables.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Veg. Hydrabadi (व्हेज हैद्राबादी)",
          price: 130,
          description: "Hyderabadi style mixed vegetables.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Veg. Bhuna (व्हेज भुना)",
          price: 160,
          description: "Vegetables cooked in a thick gravy.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Dam Alu Kashmiri (दम आलु काश्मिरी)",
          price: 160,
          description: "Kashmiri style spicy potatoes.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Dam Alu Punjabi (दम आलु पंजाबी)",
          price: 140,
          description: "Punjabi style spicy potatoes.",
          image: "ashootelFinalLogo.png",
        },
        {
          name: "Alu Methi Mutter (आलु मेथी मटर)",
          price: 140,
          description: "Potatoes with fenugreek and peas.",
          image: "ashootelFinalLogo.png",
        },
      ],
    },
  ];

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index); // Toggle category open/close
  };

  useEffect(() => {
    // Touch: tap to toggle tip
    const handleTap = (card) => (e) => {
      if (window.innerWidth <= 991) {
        card.classList.toggle('tip-revealed');
      }
    };
    const items = document.querySelectorAll('.menu-item-block-modern');
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
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Our Menu">
        <section className={styles.menuSection + " food-menu-section-modern"}>
          <div className="auto-container">
            <div className={styles.sectionHeading + " section_heading text-center food-section-heading-animate"}>
              <span className={styles.sectionHeadingTitleSmall + " section_heading_title_small food-section-subtitle-animate"}>
                Weekly Specials
              </span>
              <h2 className={styles.sectionHeadingTitleBig + " section_heading_title_big mb_60 food-section-title-animate"}>
                Menu Of The Day
              </h2>
              <div className="food-section-divider-animate">
                <svg width="120" height="16" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="6" width="120" height="4" rx="2" fill="url(#food-bar)"/>
                  <defs>
                    <linearGradient id="food-bar" x1="0" y1="8" x2="120" y2="8" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#25D366"/>
                      <stop offset="1" stopColor="#128C7E"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="row">
              {/* Sidebar */}
              <aside className={styles.menuSidebar + " col-lg-3 menu-sidebar-modern"}>
                <nav className={styles.sidebarMenu + " sidebar-menu"} aria-label="Menu Categories">
                  <h3 className={styles.categoryTitle + " category-title"}>Filter by Category</h3>
                  <ul className={styles.menuCategoryList}>
                    {menuCategories.map((category, index) => (
                      <li
                        key={index}
                        className={`${styles.menuCategoryItem} menu-category-item ${openCategory === index ? styles.active + " active" : ""}`}
                        tabIndex={0}
                        aria-current={openCategory === index}
                        onClick={() => toggleCategory(index)}
                        onKeyPress={e => { if (e.key === 'Enter') toggleCategory(index); }}
                      >
                        <span className="sidebar-category-indicator" aria-hidden="true"></span>
                        {category.category}
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
              {/* Category Items */}
              <div className={styles.menuContent + " col-lg-9 menu-content-modern"}>
                {menuCategories.map((category, index) => (
                  <Collapse key={index} isOpened={openCategory === index}>
                    <section className={styles.categorySection + " category-section mb_60"}>
                      <h3 className={styles.categoryTitle + " category-title text-center"}>{category.category}</h3>
                      <div className="row">
                        {category.items.map((item, itemIndex) => (
                          <article key={itemIndex} className={styles.menuItem + " col-lg-6 menu-item-modern"}>
                            <div className={styles.menuItemBlock + " price-menu-1-block menu-item-block-modern"}>
                              <div className={styles.menuItemContent + " p_relative menu-item-content-modern"}>
                                <h4 className={styles.menuItemName + " menu-item-name-modern"}>{item.name}</h4>
                                <div className={styles.menuItemDivider + " price-menu-1-divider mt_10 mb_10 menu-item-divider-modern"}></div>
                                <p className={styles.menuItemDesc + " mb_0 menu-item-desc-modern"}>{item.description}</p>
                                <div className="menu-item-tip">Chef's Tip: Enjoy with garlic naan for best taste!</div>
                              </div>
                              <div className={styles.menuItemImage + " price-menu-1-image menu-item-image-modern"} style={{position: 'relative'}}>
                                {itemIndex === 0 && (
                                  <span className="menu-item-badge-new menu-item-badge-new-above">New</span>
                                )}
                                <img
                                  src={`/assets/images/${item.image}`}
                                  alt={item.name}
                                  width={60}
                                  height={60}
                                  className={styles.menuItemImg + " border-radius menu-item-img-modern"}
                                />
                                <p className={styles.menuItemPrice + " theme-color fs_22 menu-item-price-modern"}>₹{item.price}</p>
                              </div>
                              <div className="menu-item-card-bg"></div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  </Collapse>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Popular Dishes Section */}
        <section className={styles.popularSection + " section-padding gray-bg"}>
          <div className="feature-3-shape-1 p_absolute r_30 b_0 food-popular-bg-svg">
            <svg width="220" height="80" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="110" cy="40" rx="110" ry="40" fill="url(#food-popular-bg)" fillOpacity="0.13"/>
              <defs>
                <linearGradient id="food-popular-bg" x1="0" y1="40" x2="220" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#25D366"/>
                  <stop offset="1" stopColor="#128C7E"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="auto-container">
            <div className={styles.sectionHeading + " section_heading text-center"}>
              <span className={styles.sectionHeadingTitleSmall + " section_heading_title_small"}>
                Popular Picks
              </span>
              <h2 className={styles.sectionHeadingTitleBig + " section_heading_title_big mb_10"}>
                Our Most Loved Dishes
              </h2>
              <p className={styles.popularSubtitle + " mb_60"}>
                Handpicked favorites, loved by our guests! Try these bestsellers and experience the taste everyone is talking about.
              </p>
            </div>
            <div className="row p_relative">
              <div className="feature-3-shape-2"></div>
              {/* Use first 3 items from each category for variety */}
              {menuCategories.flatMap((cat) => cat.items.slice(0, 3)).map((item, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 mb-4">
                  <div className={styles.popularDishCard + " popular-dish-card-modern"} style={{ animationDelay: `${0.12 + idx * 0.09}s` }}>
                    <span className="popular-dish-heart" aria-label="Favorite">❤</span>
                    <div className={styles.popularDishImage + " popular-dish-image-modern hvr-img-zoom-1 position-relative"}>
                      <img src={`/assets/images/${item.image}`} alt={item.name} />
                      <span className={styles.bestSellerBadge + " best-seller-badge-modern position-absolute"}>Best Seller</span>
                    </div>
                    <div className={styles.popularDishContent + " popular-dish-content-modern text-center"}>
                      <h4 className={styles.popularDishTitle + " popular-dish-title mb_5"}>{item.name}</h4>
                      <div className={styles.ratingStars + " rating-stars-modern mb_10"}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={styles.star + " star-modern" + (i < 4 ? ' ' + styles.filledStar + " filled-star-modern" : '')}>★</span>
                        ))}
                      </div>
                      <p className={styles.popularDishDesc + " popular-dish-desc mb_10"}>{item.description}</p>
                      <div className={styles.popularDishPrice + " popular-dish-price mb_15"}>₹{item.price}</div>
                      <button className={styles.orderNowBtn + " order-now-btn-modern"}>
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    <style jsx global>{`
      .food-menu-section-modern {
        background: linear-gradient(120deg, #f5f7fa 0%, #e0f7ef 100%);
        padding-bottom: 0 !important;
      }
      .section_heading.menu-section-heading, .section_heading.food-menu-section-modern .section_heading {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInHeading 0.8s 0.2s forwards;
      }
      @keyframes fadeInHeading {
        to { opacity: 1; transform: none; }
      }
      .menu-sidebar-modern {
        background: rgba(255,255,255,0.25);
        border-radius: 1.5rem;
        box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
        border: 1.5px solid rgba(37,211,102,0.18);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        padding: 2.1rem 1.3rem 1.5rem 1.3rem;
        margin-bottom: 2.5rem;
        min-height: 350px;
        transition: box-shadow 0.2s, border 0.2s;
      }
      .menu-category-item {
        border-radius: 1rem;
        padding: 0.7rem 1.2rem;
        margin-bottom: 0.7rem;
        font-weight: 600;
        font-size: 1.08rem;
        color: #128C7E;
        background: rgba(255,255,255,0.7);
        cursor: pointer;
        transition: background 0.2s, color 0.2s, box-shadow 0.2s;
      }
      .menu-category-item:hover, .menu-category-item.active {
        background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
        color: #fff;
        box-shadow: 0 2px 8px #25D36622;
      }
      .menu-content-modern {
        padding-left: 0.5rem;
      }
      .menu-item-modern {
        opacity: 0;
        transform: translateY(40px) scale(0.98);
        animation: fadeInMenuItem 0.7s cubic-bezier(.6,.2,.3,1) forwards;
      }
      .menu-item-modern:nth-child(1) { animation-delay: 0.10s; }
      .menu-item-modern:nth-child(2) { animation-delay: 0.18s; }
      .menu-item-modern:nth-child(3) { animation-delay: 0.26s; }
      .menu-item-modern:nth-child(4) { animation-delay: 0.34s; }
      .menu-item-modern:nth-child(5) { animation-delay: 0.42s; }
      .menu-item-modern:nth-child(6) { animation-delay: 0.50s; }
      .menu-item-block-modern {
        background: rgba(255,255,255,0.25);
        border-radius: 1.2rem;
        box-shadow: 0 4px 16px 0 rgba(31,38,135,0.08);
        border: 1.5px solid rgba(37,211,102,0.13);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        display: flex;
        align-items: center;
        gap: 1.2rem;
        padding: 1.2rem 1.1rem 1.2rem 1.1rem;
        margin-bottom: 1.2rem;
        transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
        position: relative;
      }
      .menu-item-block-modern:hover {
        box-shadow: 0 0 0 4px #25D36644, 0 8px 32px 0 #25D36633, 0 2px 8px rgba(37,211,102,0.16);
        border: 1.5px solid #25D366;
        transform: translateY(-4px) scale(1.025);
      }
      .menu-item-price-modern {
        display: block;
        margin: 0.7rem auto 0 auto;
        background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
        color: #fff;
        border-radius: 1.2rem;
        padding: 0.3rem 1.1rem;
        font-size: 1.08rem;
        font-weight: 700;
        box-shadow: 0 2px 8px #25D36622;
        min-width: 70px;
        text-align: center;
        pointer-events: auto;
      }
      .menu-item-content-modern {
        padding-top: 0;
      }
      .menu-item-img-modern {
        border-radius: 1.2rem;
        box-shadow: 0 2px 8px #25D36622;
        transition: transform 0.3s, box-shadow 0.2s;
      }
      .menu-item-image-modern:hover .menu-item-img-modern {
        transform: scale(1.13) rotate(-8deg);
        box-shadow: 0 4px 16px #25D36633;
      }
      .menu-item-name-modern {
        font-weight: 700;
        font-size: 1.13rem;
        color: #128C7E;
        margin-bottom: 0.1rem;
      }
      .menu-item-desc-modern {
        color: #222;
        font-size: 1.01rem;
        margin-bottom: 0.2rem;
      }
      .menu-item-divider-modern {
        height: 2px;
        background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
        border-radius: 1px;
        margin: 0.5rem 0 0.7rem 0;
      }
      @keyframes fadeInMenuItem {
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .popular-dish-card-modern {
        background: rgba(255,255,255,0.25);
        border-radius: 1.5rem;
        box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
        border: 1.5px solid rgba(37,211,102,0.18);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        padding: 1.7rem 1.1rem 1.5rem 1.1rem;
        margin-bottom: 2.2rem;
        transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
        opacity: 0;
        transform: translateY(40px) scale(0.98);
        animation: fadeInPopularDish 0.7s cubic-bezier(.6,.2,.3,1) forwards;
      }
      @keyframes fadeInPopularDish {
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .popular-dish-card-modern:hover {
        box-shadow: 0 0 0 4px #25D36644, 0 16px 48px 0 #25D36633, 0 2px 8px rgba(37,211,102,0.16);
        border: 1.5px solid #25D366;
        transform: translateY(-8px) scale(1.035);
      }
      .popular-dish-image-modern {
        border-radius: 1.2rem;
        overflow: hidden;
        box-shadow: 0 2px 8px #25D36622;
        margin-bottom: 1.1rem;
        transition: box-shadow 0.2s, transform 0.2s;
      }
      .popular-dish-image-modern img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 1.2rem;
        transition: transform 0.3s;
      }
      .popular-dish-image-modern:hover img {
        transform: scale(1.08) rotate(-4deg);
      }
      .best-seller-badge-modern {
        background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
        color: #fff;
        border-radius: 1.2rem;
        padding: 0.3rem 1.1rem;
        font-size: 0.98rem;
        font-weight: 700;
        box-shadow: 0 2px 8px #25D36622;
        top: 1.1rem;
        right: 1.1rem;
      }
      .popular-dish-content-modern {
        padding: 0.2rem 0.5rem 0 0.5rem;
      }
      .popular-dish-title {
        font-weight: 700;
        font-size: 1.13rem;
        color: #128C7E;
        margin-bottom: 0.1rem;
      }
      .rating-stars-modern {
        font-size: 1.2rem;
        color: #25D366;
        margin-bottom: 0.5rem;
        letter-spacing: 2px;
        display: flex;
        justify-content: center;
        gap: 0.1rem;
      }
      .star-modern {
        opacity: 0;
        transform: translateY(10px);
        animation: fadeInStar 0.7s cubic-bezier(.6,.2,.3,1) forwards;
      }
      .star-modern:nth-child(1) { animation-delay: 0.10s; }
      .star-modern:nth-child(2) { animation-delay: 0.18s; }
      .star-modern:nth-child(3) { animation-delay: 0.26s; }
      .star-modern:nth-child(4) { animation-delay: 0.34s; }
      .star-modern:nth-child(5) { animation-delay: 0.42s; }
      .filled-star-modern {
        color: #25D366;
        text-shadow: 0 2px 8px #25D36622;
      }
      @keyframes fadeInStar {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .order-now-btn-modern {
        background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
        color: #fff;
        border: none;
        border-radius: 2rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        padding: 0.7rem 2.2rem;
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 0.7rem;
        transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
      }
      .order-now-btn-modern:hover {
        background: linear-gradient(90deg, #128C7E 0%, #25D366 100%);
        color: #fff;
        transform: translateY(-2px) scale(1.04);
        box-shadow: 0 4px 16px rgba(18,140,126,0.15);
      }
      @media (max-width: 991px) {
        .menu-sidebar-modern {
          padding: 1.2rem 0.7rem 1.2rem 0.7rem;
        }
        .menu-content-modern {
          padding-left: 0;
        }
      }
      @media (max-width: 600px) {
        .menu-sidebar-modern {
          padding: 0.7rem 0.3rem 0.7rem 0.3rem;
        }
        .menu-item-block-modern {
          padding: 0.7rem 0.3rem 0.7rem 0.3rem;
          min-height: 120px;
        }
        .menu-item-price-modern {
          font-size: 0.98rem;
          padding: 0.25rem 0.8rem;
          margin: 0.5rem auto 0 auto;
        }
        .menu-item-content-modern {
          padding-top: 2.1rem;
        }
        .popular-dish-card-modern {
          padding: 1.1rem 0.3rem 1rem 0.3rem;
        }
      }
      .food-section-heading-animate span,
      .food-section-title-animate,
      .food-section-divider-animate {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInHeadingStagger 0.7s forwards;
      }
      .food-section-heading-animate span { animation-delay: 0.1s; }
      .food-section-title-animate { animation-delay: 0.22s; }
      .food-section-divider-animate { animation-delay: 0.34s; }
      @keyframes fadeInHeadingStagger {
        to { opacity: 1; transform: none; }
      }
      .sidebar-category-indicator {
        display: inline-block;
        width: 7px;
        height: 24px;
        border-radius: 6px;
        margin-right: 0.7rem;
        background: linear-gradient(180deg, #25D366 0%, #128C7E 100%);
        opacity: 0;
        transform: scaleY(0.7);
        transition: opacity 0.3s, transform 0.3s;
        vertical-align: middle;
      }
      .menu-category-item.active .sidebar-category-indicator {
        opacity: 1;
        transform: scaleY(1);
      }
      .menu-item-block-modern {
        position: relative;
        overflow: hidden;
      }
      .menu-item-card-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="g" cx="50%25" cy="40%25" r="80%25"><stop stop-color="%2325D366" stop-opacity="0.08" offset="0%25"/><stop stop-color="%23128C7E" stop-opacity="0.04" offset="100%25"/></radialGradient></defs><rect width="100%25" height="100%25" fill="url(%23g)"/></svg>') center/cover no-repeat;
      }
      .menu-item-badge-new {
        position: absolute;
        left: 1.1rem;
        top: 1.1rem;
        background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
        color: #fff;
        border-radius: 1.2rem;
        padding: 0.2rem 0.9rem;
        font-size: 0.93rem;
        font-weight: 700;
        box-shadow: 0 2px 8px #25D36622;
        z-index: 2;
      }
      .menu-item-badge-new-above {
        position: absolute;
        left: 50%;
        top: -1.1rem;
        transform: translateX(-50%);
        background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
        color: #fff;
        border-radius: 1.2rem;
        padding: 0.2rem 0.9rem;
        font-size: 0.93rem;
        font-weight: 700;
        box-shadow: 0 2px 8px #25D36622;
        z-index: 3;
        white-space: nowrap;
      }
      @media (max-width: 600px) {
        .menu-item-badge-new-above {
          top: -0.7rem;
          font-size: 0.88rem;
          padding: 0.15rem 0.7rem;
        }
      }
      .menu-item-tip {
        background: linear-gradient(90deg, #e0f7ef 0%, #f5f7fa 100%);
        color: #128C7E;
        font-size: 0.98rem;
        font-style: italic;
        border-radius: 0.8rem;
        box-shadow: 0 2px 8px 0 #25D36611;
        padding: 0.5rem 1rem 0.5rem 1.2rem;
        margin: 0.6rem 0 0.1rem 0;
        text-align: left;
        opacity: 0;
        transform: translateY(10px);
        pointer-events: none;
        transition: opacity 0.35s, transform 0.35s;
        z-index: 4;
        position: relative;
      }
      .menu-item-block-modern:hover .menu-item-tip, .menu-item-block-modern.tip-revealed .menu-item-tip {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
      .popular-dish-heart {
        position: absolute;
        top: 1.1rem;
        left: 1.1rem;
        font-size: 1.5rem;
        color: #e74c3c;
        opacity: 0.7;
        z-index: 2;
        transition: transform 0.3s, opacity 0.2s;
        pointer-events: none;
        animation: popHeart 0.7s cubic-bezier(.6,.2,.3,1) both;
      }
      .popular-dish-card-modern:hover .popular-dish-heart {
        transform: scale(1.18) rotate(-8deg);
        opacity: 1;
        animation: popHeart 0.5s cubic-bezier(.6,.2,.3,1) both;
      }
      @keyframes popHeart {
        0% { transform: scale(0.7); opacity: 0.2; }
        60% { transform: scale(1.25) rotate(-8deg); opacity: 1; }
        100% { transform: scale(1.18) rotate(-8deg); opacity: 1; }
      }
      .food-popular-bg-svg {
        z-index: 0;
        pointer-events: none;
      }
    `}</style>
    </>
  );
}

