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

  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Our Menu">
        <section className={styles.menuSection}>
          <div className="auto-container">
            <div className={styles.sectionHeading + " section_heading text-center"}>
              <span className={styles.sectionHeadingTitleSmall + " section_heading_title_small"}>
                Weekly Specials
              </span>
              <h2 className={styles.sectionHeadingTitleBig + " section_heading_title_big mb_60"}>
                Menu Of The Day
              </h2>
            </div>
            <div className="row">
              {/* Sidebar */}
              <aside className={styles.menuSidebar + " col-lg-3"}>
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
                        {category.category}
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
              {/* Category Items */}
              <div className={styles.menuContent + " col-lg-9"}>
                {menuCategories.map((category, index) => (
                  <Collapse key={index} isOpened={openCategory === index}>
                    <section className={styles.categorySection + " category-section mb_60"}>
                      <h3 className={styles.categoryTitle + " category-title text-center"}>{category.category}</h3>
                      <div className="row">
                        {category.items.map((item, itemIndex) => (
                          <article key={itemIndex} className={styles.menuItem + " col-lg-6"}>
                            <div className={styles.menuItemBlock + " price-menu-1-block"}>
                              <div className={styles.menuItemContent + " p_relative"}>
                                <p className={styles.menuItemPrice + " theme-color fs_22 p_absolute r_0 t_0"}>₹{item.price}</p>
                                <h4 className={styles.menuItemName}>{item.name}</h4>
                                <div className={styles.menuItemDivider + " price-menu-1-divider mt_10 mb_10"}></div>
                                <p className={styles.menuItemDesc + " mb_0"}>{item.description}</p>
                              </div>
                              <div className={styles.menuItemImage + " price-menu-1-image"}>
                                <img
                                  src={`/assets/images/${item.image}`}
                                  alt={item.name}
                                  width={60}
                                  height={60}
                                  className={styles.menuItemImg + " border-radius"}
                                />
                              </div>
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
          <div className="feature-3-shape-1 p_absolute r_30 b_0">
            <img src="/assets/images/shape/pattern-5.png" alt="" />
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
                  <div className={styles.popularDishCard + " popular-dish-card wow fadeInUp"} data-wow-delay={`.${2+idx}s`} data-wow-duration=".8s">
                    <div className={styles.popularDishImage + " popular-dish-image hvr-img-zoom-1 position-relative"}>
                      <img src={`/assets/images/${item.image}`} alt={item.name} />
                      <span className={styles.bestSellerBadge + " best-seller-badge position-absolute"}>Best Seller</span>
                    </div>
                    <div className={styles.popularDishContent + " popular-dish-content text-center"}>
                      <h4 className={styles.popularDishTitle + " popular-dish-title mb_5"}>{item.name}</h4>
                      <div className={styles.ratingStars + " rating-stars mb_10"}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={styles.star + (i < 4 ? ' ' + styles.filledStar : '')}>★</span>
                        ))}
                      </div>
                      <p className={styles.popularDishDesc + " popular-dish-desc mb_10"}>{item.description}</p>
                      <div className={styles.popularDishPrice + " popular-dish-price mb_15"}>₹{item.price}</div>
                      <button className={styles.orderNowBtn + " order-now-btn"}>
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
    </>
  );
}

