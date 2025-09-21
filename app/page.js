import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home2/About";
import Banner from "@/components/sections/home2/Banner";
import BannerSimple from "@/components/sections/home2/BannerSimple";
import BannerWithNextImage from "@/components/sections/home2/BannerWithNextImage";
import NewBanner from "@/components/sections/home2/NewBanner";
import Features from "@/components/sections/home2/Features";
import Amenities from "@/components/sections/home2/Amenities";
import Funfacts from "@/components/sections/home2/Funfacts";
import Offer from "@/components/sections/home2/Offer";
import Video from "@/components/sections/home2/Video";
import Hotel_booking from "@/components/sections/home2/Hotel_booking";
import Blog from "@/components/sections/home2/Blog";
import Room from "@/components/sections/home2/Room";
import Testimonial from "@/components/sections/home2/Testimonial";
import EnhancedScripts from "@/components/elements/EnhancedScripts";
import ImageDebugger from "@/components/elements/ImageDebugger";

export default function Home() {
  return (
    <>
      <EnhancedScripts />
      <ImageDebugger />
      <Layout headerStyle={3} footerStyle={1}>
        <NewBanner />
        <About />
        <Features />
        <Room />
        <Amenities />
        <Funfacts />
        <Offer />
        <Video />
        <Testimonial />
        {/* <Hotel_booking /> */}
        <Blog />
      </Layout>
    </>
  );
}
