
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                <section className="">
                    <div className="auto-container">
                        <div className="section_heading mb_40">
                        <span className="section_heading_title_small">Our location</span>
                        <h2 className="section_heading_title_big">Hotel Ashirwad</h2>
                        </div>
                        <ul className="contact-info-1 d-flex flex-wrap mb_40">
                        <li>
                            <h4 className="fs_20 mb_10"><i className="icon-27 mr_10 fs_18"></i>Location</h4>
                            <p>Bhimashankar Road, Ambegaon, Maharashtra 412408</p>
                        </li>
                        <li>
                            <h4 className="fs_20 mb_10"><i className="icon-28 mr_10 fs_18"></i>Phone No</h4>
                            <p><Link href="tel:(+91) 9130375375">9130375375</Link></p>
                        </li>
                        <li>
                            <h4 className="fs_20 mb_10"><i className="icon-29 mr_10 fs_15"></i>Email</h4>
                            <p><Link href="mailto:mailto:dhananjayphalke7058@gmail.com">mailto:dhananjayphalke7058@gmail.com</Link></p>
                        </li>
                        </ul>
                        <div className="row no-gutters">
                        <div className="col-lg-5">
                            <div className="form-alt form-alt3 with-shadow">
                            <form method="post" id="contact-form">
                                <div className="row">
                                <div className="form-group col-md-12">
                                    <input type="text" name="form_name" placeholder="Your Name" required />
                                </div>

                                <div className="form-group col-md-12">
                                    <input type="text" name="email" placeholder="Your Email" required />
                                </div>

                                <div className="form-group col-md-12">
                                    <input type="text" name="form_subject" placeholder="Subject" required />
                                </div>

                                <div className="form-group col-md-12">
                                    <textarea name="form_message" placeholder="Massage"></textarea>
                                </div>
                                <div className="form-group col-md-12">
                                    <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" />
                                    <button className="btn-1" type="submit" data-loading-text="Please wait...">Submit Now <i className="flaticon-right-arrow-1"></i><span></span></button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="map mb_30">
                           
                            <iframe
                            title="Google Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed0!2sBhimashankar%20Road%2C%20Ambegaon%2C%20Maharashtra%20412408!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
                                        width="600" height="535" 
                                       style={{ border: 0, width: '100%' }} allowFullScreen="" aria-hidden="false" tabIndex="0"
                                        loading="lazy"
                                    ></iframe>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}