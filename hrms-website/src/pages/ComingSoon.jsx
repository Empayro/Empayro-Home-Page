import Faqs from "../features/home/Faqs";
import LandingPage from "../features/home/LandingPage";
import Popup from "../features/home/Popup";
// import OurServicesSection from "../features/home/OurServicesSection";
import ServicesPreview from "../features/home/ServicesPreview";
import SignUpForm from "../features/home/SignUpForm";
import SlideSection from "../features/home/SlideSection";

function ComingSoon() {
  return (
    <>


      <LandingPage />

      {/* <OurServicesSection/> */}

      <ServicesPreview/>

      <SlideSection/>

      <Faqs/>

      <SignUpForm/>

      <Popup/>
    </>
  );
}

export default ComingSoon;
