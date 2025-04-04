"use client";
import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter1() {
  // Isotope

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".items-container", {
        itemSelector: ".masonry-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".masonry-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) =>
    value === filterKey ? "filter active" : "filter";

  return (
    <>
      <div className="filters centred mb_50">
        <div className=" filter-tabs filter-btns clearfix">
          <ul className="filter-tabs filter-btns d-flex justify-content-center">
            <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
              Deluxe Room
            </li>
            <li
              className={activeBtn("LuxurySuite")}
              onClick={handleFilterKeyChange("LuxurySuite")}
            >
              Luxury Suite
            </li>
            <li
              className={activeBtn("DoubleRoom")}
              onClick={handleFilterKeyChange("DoubleRoom")}
            >
              Double Room
            </li>
            <li
              className={activeBtn("overView")}
              onClick={handleFilterKeyChange("overView")}
            >
              360
            </li>
          </ul>
        </div>
      </div>
      <div className="items-container row clearfix">
        <div className="items-container row">
          <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all LuxurySuite col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room7.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room7.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all DoubleRoom col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room10.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room10.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all LuxurySuite col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room3.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room3.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all overView col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room13.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room13.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all LuxurySuite col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room4.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room4.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all DoubleRoom col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room11.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room11.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all DoubleRoom col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room14.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room14.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all LuxurySuite col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room5.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room5.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all overView col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room8.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room8.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all DoubleRoom col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room6.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room6.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all overView col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room10.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room10.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all overView col-lg-4 col-md-6 col-sm-12">
            <div className="gallery-block-1-inner-box">
              <div className="gallery-block-1-image">
                <img src="assets/images/gallery/room13.jpg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="assets/images/gallery/room13.jpg"
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <span className="icon-24"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
