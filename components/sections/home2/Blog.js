import TestimonialSlider0 from "@/components/slider/TestimonialSlider0"; // Import the TestimonialSlider0 component

export default function Blog() {
    return (
        <>
            <section className="section-padding gray-bg">
                <div className="auto-container">
                    <div className="section_heading text-center mb_60">
                        <span className="section_heading_title_small">Explore Places</span>
                        <h3 className="section_heading_title_big">Places Near Hotel Ashirwad</h3>
                    </div>
                    <TestimonialSlider0 /> {/* Use the TestimonialSlider0 component here */}
                </div>
            </section>
        </>
    )
}
