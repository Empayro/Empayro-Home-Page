import AboutUs from "../features/home/AboutUs";
import Blogs from "../features/home/Blogs";
import BookDemo from "../features/home/BookDemo";
import Hero from "../features/home/Hero";
import Howitwork from "../features/home/Howitwork";
import HowItWorks from "../features/home/HowItWorks";
import KeyFeatures from "../features/home/KeyFeatures";
import Plans from "../features/home/Plans";
import VideoCompo from "../features/home/VideoCompo";

function Home() {
  return (
    <>
      <Hero />

      <KeyFeatures />

      {/* <HowItWorks /> */}

      <Howitwork/>

      <BookDemo />

      <Plans />

      <VideoCompo />

      <Blogs />
    </>
  );
}

export default Home;
