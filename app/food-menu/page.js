"use client";
import Layout from "@/components/layout/Layout";
import "wowjs/css/libs/animate.css";
import { WOW } from "wowjs";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";




export default function Home() {
  useEffect(() => {
    new WOW().init();
  }, []);

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
          image: "mutter-paneer.jpg",
        },
        {
          name: "Paneer Butter Masala (पनीर बटर मसाला)",
          price: 120,
          description: "Paneer in a creamy butter-based gravy.",
          image: "paneer-butter-masala.jpg",
        },
        {
          name: "Palak Paneer (पालक पनीर)",
          price: 110,
          description: "Paneer cooked with fresh spinach leaves.",
          image: "palak-paneer.jpg",
        },
        {
          name: "Paneer Kadai (पनीर कढाई)",
          price: 170,
          description: "Paneer cooked in a traditional wok with spices.",
          image: "paneer-kadai.jpg",
        },
        {
          name: "Paneer Tikka Masala (पनीर टिक्का मसाला)",
          price: 130,
          description: "Grilled paneer in a spiced tomato gravy.",
          image: "paneer-tikka-masala.jpg",
        },
        {
          name: "Shahi Paneer (शाही पनीर)",
          price: 130,
          description: "Royal paneer cooked with rich ingredients.",
          image: "shahi-paneer.jpg",
        },
        {
          name: "Paneer Methi Mutter Malai (पनीर मेथी मटर मलाई)",
          price: 120,
          description: "Paneer, fenugreek, and peas in a creamy sauce.",
          image: "paneer-methi-mutter-malai.jpg",
        },
        {
          name: "Malai Kofta (मलाई कोप्ता)",
          price: 170,
          description: "Fried dumplings of paneer in a creamy gravy.",
          image: "malai-kopta.jpg",
        },
        {
          name: "Paneer Malavani (पनीर मालवणी)",
          price: 200,
          description: "Paneer cooked with Malvani spices.",
          image: "paneer-malavani.jpg",
        },
        {
          name: "Paneer Chilli (पनीर चिल्ली)",
          price: 140,
          description: "Paneer stir-fried with Chinese spices.",
          image: "paneer-chilly.jpg",
        },
        {
          name: "Paneer Bhurji (पनीर भुर्जी)",
          price: 120,
          description:
            "Scrambled paneer cooked with onions, tomatoes, and spices.",
          image: "paneer-bhurji.jpg",
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
          image: "kolhapuri-misal.jpg",
        },
        {
          name: "Pohe (पोहे)",
          price: 35,
          description: "Spicy Pohe with peas.",
          image: "pohe.jpg",
        },
        {
          name: "Pav Jodi (पाव जोडी)",
          price: 8,
          description: "Pav served with spicy chutney.",
          image: "pav-jodi.jpg",
        },
        {
          name: "Butter Pav Jodi (बटर पाव जोडी)",
          price: 15,
          description: "Butter Pav served with spicy chutney.",
          image: "butter-pav-jodi.jpg",
        },
        {
          name: "Dahi Vati (दही वाटी)",
          price: 25,
          description: "Dahi Vati served with chutney.",
          image: "dahi-vati.jpg",
        },
        {
          name: "Khichadi (खिचडी)",
          price: 40,
          description: "Savory rice dish made with lentils.",
          image: "khichadi.jpg",
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
          image: "ashirwad-veg.jpg",
        },
        {
          name: "Veg. Kolhapuri (व्हेज कोल्हापुरी)",
          price: 105,
          description: "Spicy mixed vegetable curry.",
          image: "veg-kolhapuri.jpg",
        },
        {
          name: "Mix Veg. (मिक्स वेज)",
          price: 100,
          description: "Mixed vegetables curry.",
          image: "mix-veg.jpg",
        },
        {
          name: "Veg. Makhani (Sweet) (व्हेज मखनी (स्वीट))",
          price: 120,
          description: "Sweet Punjabi curry made with vegetables.",
          image: "veg-makhani.jpg",
        },
        {
          name: "Veg. Koram (व्हेज कोरम)",
          price: 120,
          description: "Punjabi vegetable stew.",
          image: "veg-koram.jpg",
        },
        {
          name: "Veg. Kadai (व्हेज कढाई)",
          price: 160,
          description: "Spicy vegetables cooked in a kadai.",
          image: "veg-kadai.jpg",
        },
        {
          name: "Veg. Bharata (व्हेज भरता)",
          price: 140,
          description: "Mashed spiced vegetables.",
          image: "veg-bharata.jpg",
        },
        {
          name: "Veg. Maharaja (व्हेज महाराजा)",
          price: 140,
          description: "Royal mixed vegetables.",
          image: "veg-maharaja.jpg",
        },
        {
          name: "Veg. Hydrabadi (व्हेज हैद्राबादी)",
          price: 130,
          description: "Hyderabadi style mixed vegetables.",
          image: "veg-hydrabadi.jpg",
        },
        {
          name: "Veg. Bhuna (व्हेज भुना)",
          price: 160,
          description: "Vegetables cooked in a thick gravy.",
          image: "veg-bhuna.jpg",
        },
        {
          name: "Dam Alu Kashmiri (दम आलु काश्मिरी)",
          price: 160,
          description: "Kashmiri style spicy potatoes.",
          image: "dam-alu-kashmiri.jpg",
        },
        {
          name: "Dam Alu Punjabi (दम आलु पंजाबी)",
          price: 140,
          description: "Punjabi style spicy potatoes.",
          image: "dam-alu-panjabi.jpg",
        },
        {
          name: "Alu Methi Mutter (आलु मेथी मटर)",
          price: 140,
          description: "Potatoes with fenugreek and peas.",
          image: "alu-methi-mutter.jpg",
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
        <section className="section-padding">
          <div className="auto-container">
            <div className="section_heading text-center">
              <span className="section_heading_title_small">
                Weekly Specials
              </span>
              <h2 className="section_heading_title_big mb_60">
                Menu Of The Day
              </h2>
            </div>

            <div className="row">
              {/* Left Sidebar - Filters (Optional for future use) */}
              <div className="col-lg-3">
                <div className="sidebar-menu">
                  <h3 className="category-title">Filter by Category</h3>
                  <ul>
                    {menuCategories.map((category, index) => (
                      <li
                        key={index}
                        className={`menu-category-item ${
                          openCategory === index ? "active" : ""
                        }`} // Add 'active' class if this category is selected
                        onClick={() => toggleCategory(index)} // Toggle the category
                      >
                        {category.category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Section for Category Items */}
              <div className="col-lg-9">
                {menuCategories.map((category, index) => (
                  <Collapse key={index} isOpened={openCategory === index}>
                    <div className="category-section mb_60">
                      <h3 className="category-title text-center">
                        {category.category}
                      </h3>
                      <div className="row">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="col-lg-6">
                            <div className="price-menu-1-block">
                              <div className="p_relative">
                                <p className="theme-color fs_22 p_absolute r_0 t_0">
                                  ₹{item.price}
                                </p>
                                <h4>{item.name}</h4>
                                <div className="price-menu-1-divider mt_10 mb_10"></div>
                                <p className="mb_0">{item.description}</p>
                              </div>
                              <div className="price-menu-1-image">
                                <img
                                  src={`/assets/images/desser.jpeg`}
                                  alt={item.name}
                                  width={50}
                                  height={50}
                                  className="border-radius"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Collapse>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Popular Dishes Section */}
        <section className="section-padding gray-bg">
          <div className="feature-3-shape-1 p_absolute r_30 b_0">
            <img src="assets/images/shape/pattern-5.png" alt="" />
          </div>
          <div className="auto-container">
            <div className="section_heading text-center">
              <span className="section_heading_title_small">Popular</span>
              <h2 className="section_heading_title_big mb_60">
                Popular Dishes
              </h2>
            </div>
            <div className="row p_relative">
              <div className="feature-3-shape-2"></div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="feature-3-block mb_30 wow fadeInLeft"
                  data-wow-delay=".2s"
                  data-wow-duration=".8s"
                >
                  <div className="feature-3-image hvr-img-zoom-1">
                    <img
                      src="assets/images/resource/feature-image-12.jpg"
                      alt=""
                    />
                  </div>
                  <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20">
                    <span className="fs_22 fw_medium">15%</span>
                    <br /> OFF
                  </div>
                  <div className="feature-3-lower-content">
                    <h4 className="feature-3-title mb_5">
                      Grilled with Tomatoes
                    </h4>
                    <p className="fs_15 mb_5">
                      <span className="theme-color mr_10">$55.0</span> $65.0
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="feature-3-block mb_30 wow fadeInLeft"
                  data-wow-delay=".2s"
                  data-wow-duration=".8s"
                >
                  <div className="feature-3-image hvr-img-zoom-1">
                    <img
                      src="assets/images/resource/feature-image-13.jpg"
                      alt=""
                    />
                  </div>
                  <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20">
                    <span className="fs_22 fw_medium">15%</span>
                    <br /> OFF
                  </div>
                  <div className="feature-3-lower-content">
                    <h4 className="feature-3-title mb_5">
                      Squeezing Fresh Juice
                    </h4>
                    <p className="fs_15 mb_5">
                      <span className="theme-color mr_10">$55.0</span> $65.0
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="feature-3-block mb_30 wow fadeInLeft"
                  data-wow-delay=".2s"
                  data-wow-duration=".8s"
                >
                  <div className="feature-3-image hvr-img-zoom-1">
                    <img
                      src="assets/images/resource/feature-image-14.jpg"
                      alt=""
                    />
                  </div>
                  <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20">
                    <span className="fs_22 fw_medium">15%</span>
                    <br /> OFF
                  </div>
                  <div className="feature-3-lower-content">
                    <h4 className="feature-3-title mb_5">
                      Fish with Vegetable
                    </h4>
                    <p className="fs_15 mb_5">
                      <span className="theme-color mr_10">$55.0</span> $65.0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

