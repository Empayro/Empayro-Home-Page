import AboutUs from "../features/home/AboutUs";
import Blogs from "../features/home/Blogs";
import BookDemo from "../features/home/BookDemo";
import Hero from "../features/home/Hero";
import Howitwork from "../features/home/Howitwork";
import HRMSSections from "../features/rough/HRMSSections";
import KeyFeatures from "../features/home/KeyFeatures";
import Plans from "../features/home/Plans";
import VideoCompo from "../features/home/VideoCompo";
// import HeroSection from "../features/home/HeroSection";

function Home() {
  return (
    <>
      <Hero />

      <KeyFeatures />

      {/* <HowItWorks /> */}

      <Howitwork/>

      {/* <HRMSSections/> */}

      {/* <HeroSection/> */}

      <BookDemo />

      <Plans />

      <VideoCompo />

      <Blogs />
    </>
  );
}

export default Home;
