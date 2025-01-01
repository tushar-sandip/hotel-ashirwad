// import Layout from "@/components/layout/Layout"
// import About from "@/components/sections/home1/About"
// import Room from "@/components/sections/home1/Room"
// import Amenities from "@/components/sections/home1/Amenities"
// import Cta from "@/components/sections/home1/Cta"
// import Booking from "@/components/sections/home1/Booking"
// import Blog from "@/components/sections/home1/Blog"
// import Contact_form from "@/components/sections/home1/Contact_form"
// import Banner from "@/components/sections/home1/Banner"
// import Projects from "@/components/sections/home1/Projects"
// import Features from "@/components/sections/home1/Features"
// import Testimonial from "@/components/sections/home1/Testimonial"


export default function Home() {

    return (
        // <>
        //     <Layout headerStyle={1} footerStyle={1}>
        //         <Banner />
        //         <Booking />
        //         <Features />
        //         <About />
        //         <Room />
        //         <Projects />
        //         <Amenities />
        //         <Testimonial />
        //         <Cta />
        //         <Blog />
        //         <Contact_form />
        //     </Layout>
        // </>
        <section className="section-padding" style={{ backgroundColor: '#f8f9fa', position: 'relative', textAlign: 'center', padding: '20px 20px' }}>
        <div className="auto-container">
          <div
            style={{
              backgroundImage: 'url("assets/images/background/abouthotel.jpeg")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.5,
              zIndex: -1,
            }}
          ></div>
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="p_relative">
                <img className="offer-1-shape-1" src="assets/images/shape/pattern-1.png" alt="Decorative Shape" />
                <div className="offer-1-image hvr-img-zoom-1 mb_30">
                  <img src="assets/images/background/abouthotel.jpeg" alt="Welcome to our Resort" style={{ maxWidth: '100%', borderRadius: '15px' }} />
                </div>
              </div>
            </div>
  
            <div className="col-lg-12 mt-5">
              <div className="section_heading mb_50">
                <h2 className="section_heading_title_big mb_20" style={{ color: '#343a40', fontSize: '2.5rem' }}>
                  Hotel Ashirwad Lodging <br /> Launching Soon
                </h2>
                <p className="mb_30" style={{ color: '#6c757d', fontSize: '1.2rem' }}>
                  Junnar phata, Bhimashankar-Manchar Rd, Khatkali, Ghodegaon, Maharashtra 412408
                </p>
                <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#007bff' }}>
                  Stay Tuned for Updates!
                </p>
  
                <div style={{ marginTop: '30px' }}>
                  <h4 style={{ color: '#007bff' }}>Coming Soon</h4>
                </div>
                <div className="offer-1-btn mb_30" style={{ marginTop: '30px' }}>
                  <a href="#" className="btn-1" style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none' }}>
                    Notify Me <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}