import Layout from "@/components/layout/Layout"
import Link from "next/link"
import TestimonialSlider0 from "@/components/slider/TestimonialSlider0"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog Standard">
                <div>
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="section_heading text-center mb_60">
                            <span className="section_heading_title_small">Our Articles</span>
                            <h2 className="section_heading_title_big">Get More Updates For <br /> Royalking</h2>
                        </div>
                        <TestimonialSlider0 />
                    </div>
                </section>
                </div>

            </Layout>
        </>
    )
}
