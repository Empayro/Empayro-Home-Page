import SlideSection from "../features/home/SlideSection";
import OurServicesSection from "../features/home/OurServicesSection";
import ServicesPreview from "../features/home/ServicesPreview";
import LandingPage from "../features/comingsoon/LandingPage";
import HeroSection from "../features/comingsoon/HeroSection";
import Features from "../features/comingsoon/Features";
import ScrollRevealSection from "../features/comingsoon/ScrollRevealSection";
import Faqs from "../features/comingsoon/Faqs";
import SignUpForm from "../features/comingsoon/SignUpForm";
import Popup from "../features/comingsoon/Popup";

function ComingSoon() {
  return (
    <>


      <LandingPage />

      {/* <OurServicesSection/> */}

      <HeroSection/>
      
      <Features/>

      <ScrollRevealSection/>

      {/* <HRMSGallery/> */}

      {/* <ServicesPreview/> */}

      {/* <SlideSection/> */}

      <Faqs/>

      <SignUpForm/>

      <Popup/>
    </>
  );
}

export default ComingSoon;
