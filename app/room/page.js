import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    const RoomSection = () => {
        // Your component code
      };
      const roomData = [
        { imageSrc: "assets/images/gallery/room20.jpg",
        startingPrice: "3700.0",
        rating: 5,
        title: "Luxury Double Bed Room",
        description: "Experience elevated comfort in our Luxury Double Bed Room, thoughtfully designed for relaxation and style. Featuring a spacious double bed, elegant décor, and premium amenities, the room includes air conditioning, high-speed Wi-Fi, a smart TV, a work desk, and a modern ensuite bathroom. Perfect for couples or two guests seeking a luxurious and restful stay.",
        detailsLink: "/room-details",
        animationDuration: ".8s",
      },
      {
        imageSrc: "assets/images/gallery/room5.jpg",
        startingPrice: "3700.0",
        rating: 5,
        title: "VIP Single Bed Room",
        description: "Enjoy a blend of comfort and style in our VIP Single Bed Room, ideal for solo travelers. The room features a cozy single bed, air conditioning, free Wi-Fi, a smart TV, a work desk, and a private bathroom with premium toiletries — perfect for a relaxed and refined stay.",
        detailsLink: "/room-details",
        animationDuration: "1.2s",
      },
      {
        imageSrc: "assets/images/gallery/room11.jpg",
        startingPrice: "3200.0",
        rating: 5,
        title: "Delux Single Bed Room",
        description: "Designed for comfort and convenience, our Deluxe Single Bed Room offers a spacious layout with a comfortable single bed, modern furnishings, and calming interiors. Enjoy amenities like air conditioning, high-speed Wi-Fi, a flat-screen TV, a work desk, and a private bathroom — ideal for solo travelers seeking a relaxed and pleasant stay.",
        detailsLink: "/room-details",
        animationDuration: "1.5s",
      },
      { imageSrc: "assets/images/gallery/room3.jpg",
        startingPrice: "2700.0",
        rating: 5,
        title: "Single Bed Room",
        description: "Perfect for solo travelers, our Single Bed Room offers a clean, comfortable space with all the essentials. It features a cozy single bed, air conditioning, Wi-Fi, a TV, and a private bathroom — ideal for a budget-friendly and restful stay.",
        detailsLink: "/room-details",
        animationDuration: ".8s",
      }
      
      // Add more room data entries as needed
    ];
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Room Style">
              <div>
                <section className="section-padding">
                    <div className="auto-container">
                      <div className="row">
                        {roomData.map((room, index) => (
                          <div key={index} className={`col-lg-4 col-md-6`}>
                            <div className={`room-1-block wow fadeInUp`} data-wow-delay=".2s" data-wow-duration={room.animationDuration}>
                              <div className="room-1-image hvr-img-zoom-1">
                                <img src={room.imageSrc} alt="" />
                              </div>
                              <div className="room-1-content">
                                <p className="room-1-meta-info">Start from <span className="theme-color">{room.startingPrice}</span>/night</p>
                                <div className="room-1-rating">
                                  {Array.from({ length: room.rating }, (_, i) => (
                                    <i key={i} className="icon-6"></i>
                                  ))}
                                  <i className="icon-7"></i>
                                </div>
                                <h4 className="room-1-title mb_20"><Link href={room.detailsLink}>{room.title}</Link></h4>
                                <p className="room-1-text mb_30">{room.description}</p>
                                <div className="link-btn"><Link href={room.detailsLink} className="btn-1 btn-alt">Book Now <span></span></Link></div>
                              </div>
                            </div>
                          </div> 
                        ))}
                        
                      </div>
                    </div>
                </section>
                </div>
            </Layout>
        </>
    )
}