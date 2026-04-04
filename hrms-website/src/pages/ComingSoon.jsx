import Faqs from "../features/home/Faqs";
import LandingPage from "../features/home/LandingPage";
import OurServicesSection from "../features/home/OurServicesSection";
import SignUpForm from "../features/home/SignUpForm";
import SlideSection from "../features/home/SlideSection";

function ComingSoon() {
  return (
    <>
      <LandingPage />

      <OurServicesSection/>

      <SlideSection/>

      <Faqs/>

      <SignUpForm/>
    </>
  );
}

export default ComingSoon;
