'use client'
import Layout from "@/components/layout/Layout"
import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'
import Link from "next/link"
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        const handleMove = (card) => (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width/2;
            const centerY = rect.height/2;
            const rotateX = (y-centerY)/10;
            const rotateY = (centerX-x)/10;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
            card.style.zIndex = 2;
        };
        const handleLeave = (card) => () => {
            card.style.transform = '';
            card.style.zIndex = '';
        };
        const cards = document.querySelectorAll('.team-1-block');
        cards.forEach(card => {
            card.addEventListener('mousemove', handleMove(card));
            card.addEventListener('mouseleave', handleLeave(card));
        });
        // Touch: tap to toggle bio
        const handleTap = (card) => (e) => {
            if (window.innerWidth <= 991) {
                card.classList.toggle('bio-revealed');
            }
        };
        cards.forEach(card => {
            card.addEventListener('click', handleTap(card));
        });
        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMove(card));
                card.removeEventListener('mouseleave', handleLeave(card));
                card.removeEventListener('click', handleTap(card));
            });
        };
    }, []);
    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Our Chef">
                <div>
                <section className="section-padding" style={{ background: 'linear-gradient(120deg, #f5f7fa 0%, #e0f7ef 100%)' }}>
            <div className="auto-container">
                <div className="section_heading text-center mb_70 team-section-heading">
                    <span className="section_heading_title_small">Dedicated Team</span>
                    <h2 className="section_heading_title_big">We Have A Professional <br /> Hotel Staff</h2>
                </div>
                <div className="team-masonry">
                    <div className="team-1-block">
                        <div className="team-1-card-bg"></div>
                        <div className="team-1-image">
                            <div className="team-1-image-wrap"><img src="assets/images/team/chef2.jpeg" alt="" /></div>
                            <div className="team-1-share-icon-area">
                                <ul className="team-1-social-icon">
                                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="team-1-title">Dhananjay Phalke</h4>
                        <p className="team-1-designaiton">Main Chef</p>
                        <div className="team-1-bio">“Passionate about authentic flavors and guest happiness. Every dish is a blessing!”</div>
                    </div>
                    <div className="team-1-block">
                        <div className="team-1-card-bg"></div>
                        <div className="team-1-image">
                            <div className="team-1-image-wrap"><img src="assets/images/team/chef2.jpeg" alt="" /></div>
                            <div className="team-1-share-icon-area">
                                <ul className="team-1-social-icon">
                                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="team-1-title">Guy Hawkins</h4>
                        <p className="team-1-designaiton">Sr. Chef</p>
                        <div className="team-1-bio">“Cooking is my art, and every plate is a canvas.”</div>
                    </div>
                    <div className="team-1-block">
                        <div className="team-1-card-bg"></div>
                        <div className="team-1-image">
                            <div className="team-1-image-wrap"><img src="assets/images/team/chef2.jpeg" alt="" /></div>
                            <div className="team-1-share-icon-area">
                                <ul className="team-1-social-icon">
                                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="team-1-title">Bessie Cooper</h4>
                        <p className="team-1-designaiton">Jr. Chef</p>
                        <div className="team-1-bio">“I love creating new tastes and making people smile.”</div>
                    </div>
                    <div className="team-1-block">
                        <div className="team-1-card-bg"></div>
                        <div className="team-1-image">
                            <div className="team-1-image-wrap"><img src="assets/images/team/chef2.jpeg" alt="" /></div>
                            <div className="team-1-share-icon-area">
                                <ul className="team-1-social-icon">
                                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="team-1-title">Esther Howard</h4>
                        <p className="team-1-designaiton">Sr. Chef</p>
                        <div className="team-1-bio">“From farm to table, I believe in fresh, local ingredients.”</div>
                    </div>
                    <div className="team-1-block">
                        <div className="team-1-card-bg"></div>
                        <div className="team-1-image">
                            <div className="team-1-image-wrap"><img src="assets/images/team/chef2.jpeg" alt="" /></div>
                            <div className="team-1-share-icon-area">
                                <ul className="team-1-social-icon">
                                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="team-1-title">Leslie Alexander</h4>
                        <p className="team-1-designaiton">Jr. Chef</p>
                        <div className="team-1-bio">“Every meal is a memory in the making.”</div>
                    </div>
                    <div className="team-1-block">
                        <div className="team-1-card-bg"></div>
                        <div className="team-1-image">
                            <div className="team-1-image-wrap"><img src="assets/images/team/chef2.jpeg" alt="" /></div>
                            <div className="team-1-share-icon-area">
                                <ul className="team-1-social-icon">
                                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="/"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <h4 className="team-1-title">Robert Fox</h4>
                        <p className="team-1-designaiton">Jr. Chef</p>
                        <div className="team-1-bio">“Cooking is love made visible.”</div>
                    </div>
                </div>
            </div>
        </section>
                </div>
            </Layout>
            <style jsx global>{`
            .team-section-heading {
                opacity: 0;
                transform: translateY(30px);
                animation: fadeInHeading 0.8s 0.2s forwards;
            }
            @keyframes fadeInHeading {
                to { opacity: 1; transform: none; }
            }
            .team-masonry {
                column-count: 3;
                column-gap: 2.5rem;
            }
            @media (max-width: 1200px) {
                .team-masonry { column-count: 2; }
            }
            @media (max-width: 767px) {
                .team-masonry { column-count: 1; }
            }
            .team-1-block {
                display: inline-block;
                width: 100%;
                margin-bottom: 2.5rem;
                position: relative;
                background: rgba(255,255,255,0.25);
                border-radius: 1.5rem;
                box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
                border: 1.5px solid rgba(37,211,102,0.18);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                overflow: hidden;
                transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
                opacity: 0;
                transform: translateY(40px);
                animation: fadeInUp 0.7s ease forwards;
                padding: 2.2rem 1.5rem;
            }
            .team-1-block:nth-child(1) { animation-delay: 0.05s; }
            .team-1-block:nth-child(2) { animation-delay: 0.12s; }
            .team-1-block:nth-child(3) { animation-delay: 0.19s; }
            .team-1-block:nth-child(4) { animation-delay: 0.26s; }
            .team-1-block:nth-child(5) { animation-delay: 0.33s; }
            .team-1-block:nth-child(6) { animation-delay: 0.40s; }
            .team-1-block:hover, .team-1-block.bio-revealed {
                box-shadow: 0 0 0 4px #25D36644, 0 16px 48px 0 #25D36633, 0 2px 8px rgba(37,211,102,0.16);
                border: 1.5px solid #25D366;
                transform: translateY(-8px) scale(1.045);
            }
            .team-1-card-bg {
                position: absolute;
                inset: 0;
                z-index: 0;
                pointer-events: none;
                background: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="g" cx="50%25" cy="40%25" r="80%25"><stop stop-color="%2325D366" stop-opacity="0.08" offset="0%25"/><stop stop-color="%23128C7E" stop-opacity="0.04" offset="100%25"/></radialGradient></defs><rect width="100%25" height="100%25" fill="url(%23g)"/></svg>') center/cover no-repeat;
            }
            @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .team-1-image-wrap {
                margin: 0 auto 0.5rem auto;
                width: 90px;
                height: 90px;
                border-radius: 50%;
                overflow: hidden;
                border: 3px solid #25D366;
                box-shadow: 0 2px 8px rgba(37,211,102,0.10);
                animation: floatPhoto 3s ease-in-out infinite alternate;
                z-index: 3;
            }
            @keyframes floatPhoto {
                to { transform: translateY(-8px) scale(1.05);}
            }
            .team-1-image-wrap img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
            .team-1-title {
                font-weight: 700;
                font-size: 1.18rem;
                color: #128C7E;
                margin-bottom: 0.2rem;
                text-align: center;
                z-index: 3;
            }
            .team-1-designaiton {
                color: #25D366;
                font-size: 1.01rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
                text-align: center;
                letter-spacing: 0.5px;
            }
            .team-1-bio {
                background: rgba(255,255,255,0.92);
                color: #128C7E;
                font-size: 1.04rem;
                font-style: italic;
                border-radius: 1rem;
                box-shadow: 0 2px 12px 0 #25D36622;
                padding: 1.2rem 1rem 1.2rem 1rem;
                margin: 0.7rem 0 0.2rem 0;
                text-align: center;
                opacity: 0;
                transform: translateY(20px);
                pointer-events: none;
                transition: opacity 0.35s, transform 0.35s;
                z-index: 4;
                position: relative;
            }
            .team-1-block:hover .team-1-bio, .team-1-block.bio-revealed .team-1-bio {
                opacity: 1;
                transform: translateY(0);
                pointer-events: auto;
            }
            .team-1-share-icon-area {
                margin-top: 0.7rem;
                text-align: center;
                z-index: 3;
            }
            .team-1-social-icon {
                display: flex;
                justify-content: center;
                gap: 0.7rem;
                padding: 0;
                margin: 0;
                list-style: none;
            }
            .team-1-social-icon li {
                opacity: 0;
                transform: translateY(16px);
                transition: opacity 0.3s, transform 0.3s;
            }
            .team-1-block:hover .team-1-social-icon li, .team-1-block.bio-revealed .team-1-social-icon li {
                opacity: 1;
                transform: translateY(0);
            }
            .team-1-social-icon li a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background: rgba(37,211,102,0.08);
                color: #128C7E;
                font-size: 1.1rem;
                transition: background 0.2s, color 0.2s, transform 0.2s;
            }
            .team-1-social-icon li a:hover {
                background: linear-gradient(90deg, #25D366 0%, #128C7E 100%);
                color: #fff;
                transform: scale(1.12);
            }
            /* Responsive adjustments */
            @media (max-width: 991px) {
                .team-1-block {
                    min-height: 320px;
                    padding: 1.7rem 1rem 1.3rem 1rem;
                }
                .auto-container {
                    padding-left: 1rem;
                    padding-right: 1rem;
                }
            }
            @media (max-width: 767px) {
                .team-masonry { column-count: 1; }
                .team-1-block {
                    min-height: 240px;
                    padding: 1.3rem 0.7rem 1.1rem 0.7rem;
                    width: 100%;
                    min-width: 0;
                    margin-bottom: 1.2rem;
                }
                .auto-container {
                    padding-left: 0.7rem;
                    padding-right: 0.7rem;
                }
            }
            @media (max-width: 600px) {
                .team-1-block {
                    width: 100%;
                    min-width: 0;
                    padding: 1.1rem 0.3rem 0.8rem 0.3rem;
                }
                .auto-container {
                    padding-left: 0.3rem;
                    padding-right: 0.3rem;
                }
            }
            /* Touch feedback for mobile */
            @media (hover: none) and (pointer: coarse) {
                .team-1-block:active {
                    box-shadow: 0 8px 32px 0 #25D36633, 0 2px 8px rgba(37,211,102,0.16);
                    transform: scale(0.98);
                    border: 1.5px solid #128C7E;
                }
            }
            `}</style>
        </>
    )
}