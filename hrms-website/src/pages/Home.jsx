import AboutUs from "../features/home/AboutUs";
import Blogs from "../features/home/Blogs";
import BookDemo from "../features/home/BookDemo";
import Hero from "../features/home/Hero";
import KeyFeatures from "../features/home/KeyFeatures";
import LandingPage from "../features/home/LandingPage";
import Plans from "../features/home/Plans";
import VideoCompo from "../features/home/VideoCompo";
import PlanCard from "../features/pricing/PlanCard";

function Home() {
  return (
    <>
    <Hero/>

    <AboutUs/>


    <BookDemo/>

    <Plans />

    {/* <PlanCard/> */}

    <KeyFeatures/>

    <VideoCompo/>

    <Blogs/>
    </>
  );
}

export default Home;