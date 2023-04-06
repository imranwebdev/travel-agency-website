import React from "react";
import DestinationSection from "../components/DestinationSection/DestinationSection";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import TripBooking from "../components/TripBookingSection/TripBookingSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import SubscribeSection from "../components/SubscribeSection/SubscribeSection";
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarTop from "../components/Navbar/navbar";
import BrandSection from "../components/brandSection/brandSection";
import NewsLater from "../components/newsLaterSystem/newsLater"
import "../assets/styles/global.css"
import ScrollBtn from "../components/scrollBtn/scrollBtn";
const Home = ()=>{
    return(
        <>
<header>
<NavbarTop/>
<HeroSection/>
</header>
<main>
<ServiceSection/>
<DestinationSection/>
<TripBooking/>
<SubscribeSection/>
<TestimonialSection/>
<BrandSection/>
<NewsLater />
</main>
<footer>
<Footer/>
<ScrollBtn/>
</footer>
        </>
    )
}
export default Home;