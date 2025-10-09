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
                <img src="/assets/Rooms/room7.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room7.jpeg"
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
                <img src="/assets/Rooms/room10.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room10.jpeg"
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
                <img src="/assets/Rooms/room3.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room3.jpeg"
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
                <img src="/assets/Rooms/room11.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room11.jpeg"
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
                <img src="/assets/Rooms/room4.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room4.jpeg"
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
                <img src="/assets/Rooms/room11.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room11.jpeg"
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
                <img src="/assets/Rooms/room12.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room12.jpeg"
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
                <img src="/assets/Rooms/room5.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room5.jpeg"
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
                <img src="/assets/Rooms/room8.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room8.jpeg"
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
                <img src="/assets/Rooms/room6.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room6.jpeg"
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
                <img src="/assets/Rooms/room10.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room10.jpeg"
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
                <img src="/assets/Rooms/room12.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room12.jpeg"
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
                <img src="/assets/Rooms/room1.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room1.jpeg"
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
                <img src="/assets/Rooms/room2.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room2.jpeg"
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
                <img src="/assets/Rooms/room3.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room3.jpeg"
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
                <img src="/assets/Rooms/room4.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room4.jpeg"
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
                <img src="/assets/Rooms/room6.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room6.jpeg"
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
                <img src="/assets/Rooms/room7.jpeg" alt="" />
              </div>
              <div className="gallery-block-1-overlay">
                <div className="gallery-block-1-lower-content">
                  <div className="gallery-block-1-link-btn">
                    <Link
                      href="/assets/Rooms/room7.jpeg"
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
