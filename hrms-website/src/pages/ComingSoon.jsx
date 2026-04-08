import Faqs from "../features/home/Faqs";
import HeroSection from "../features/home/HeroSection";
import LandingPage from "../features/home/LandingPage";
import Popup from "../features/home/Popup";
import ScrollRevealSection from "../features/home/ScrollRevealSection";
// import OurServicesSection from "../features/home/OurServicesSection";
import ServicesPreview from "../features/home/ServicesPreview";
import SignUpForm from "../features/home/SignUpForm";
import SlideSection from "../features/home/SlideSection";

function ComingSoon() {
  return (
    <>


      <LandingPage />

      {/* <OurServicesSection/> */}

      <HeroSection/>

      <ScrollRevealSection/>

      {/* <ServicesPreview/> */}

      {/* <SlideSection/> */}

      <Faqs/>

      <SignUpForm/>

      <Popup/>
    </>
  );
}

export default ComingSoon;
