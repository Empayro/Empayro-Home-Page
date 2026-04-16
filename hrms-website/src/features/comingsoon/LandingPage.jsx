import { useState, useEffect, useRef } from "react";
import Button from "../../components/ui/Button";
import { MdOutlinePayments } from "react-icons/md";
import { RiRocketLine, RiStarSmileLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { useInView } from "../../hooks/useInView";

function Digit({ value }) {
  return (
    <div className="relative h-[60px] overflow-hidden">
      <div
        className="flex flex-col transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: `translateY(-${value * 60}px)`,
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num} className="h-[60px] flex items-center justify-center">
            {num}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("waitlistCount");
    return saved ? Number(saved) : 2847;
  });

  const [animate, setAnimate] = useState(false);

  const [fadeRef, fadeVisible] = useInView();

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleMouse = (e) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    requestAnimationFrame(() => {
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    });
  };

  // ✅ Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setTimeout(() => {
      setSubmitted(true);
      setEmail("");

      // ✅ increase counter
      setCount((prev) => prev + 1);
    }, 500);
  };

  const [displayCount, setDisplayCount] = useState(count);

  useEffect(() => {
    if (displayCount === count) return;

    let start = displayCount;
    let end = count;
    let increment = Math.ceil((end - start) / 10);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setDisplayCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [count]);

  // ✅ SAVE separately
  useEffect(() => {
    localStorage.setItem("waitlistCount", count);
  }, [count]);

  const digits = displayCount.toLocaleString().split("");

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouse}
      className="relative min-h-screen bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff] dark:from-[#0b0b0b] dark:to-[#000000] text-black dark:text-white overflow-hidden"
      id="home"
    >
      {/* Gradient Mesh */}
      <div className="absolute inset-0 z-0"></div>

      {/* Mouse Glow */}
      <div
        className="absolute w-125 h-125 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Hero Section */}
      <section
        ref={fadeRef}
        className={`fade-up ${
          fadeVisible
            ? "show relative z-10 flex flex-col items-center justify-center text-center px-6 py-22 md:px-10 md:py-30 md:pb-10 gap-y-2"
            : ""
        }`}
      >
        {/* Launching Badge */}
        <div className="bg-primary/10 text-primary px-5 py-2 rounded-full text-xs md:text-sm font-medium border-primary border flex items-center gap-2 mb-5">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          India's Next-Generation HRMS Platform
        </div>

        {/* Title */}
        <h1 className="text-[clamp(32px,6vw,80px)] leading-[1.1] md:leading-[1.05] stroke text-black dark:text-white font-bold [WebkitTextStroke:2px_rgba(91,127,255,0.5)]">
          India's HR,
          <br />
          <span className=" font-bold  bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text tracking-tight ">
            Finally Sorted.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-900 dark:text-white max-w-xl text-sm md:text-base">
          From <strong>attendance & payroll</strong> to{" "}
          <strong> compliance & people analytics - </strong> <br /> everything
          for HR, in one platform. Purpose-built for the way Indian <br />{" "}
          businesses actually work.
        </p>

        {/* CTA Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mt-8 justify-center w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your work email"
            className="px-5 py-3 rounded-xl border border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition w-full sm:w-2/4 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="w-full sm:w-1/3">
            Get Early Access
          </Button>
        </form>

        {/* Feedback Messages */}
        {error && <p className="mt-2 text-red-primary">{error}</p>}
        {submitted && (
          <p className="mt-2 text-primary font-medium">
            Thank you for joining! We'll keep you updated.
          </p>
        )}

        {/* <!-- COUNTER --> */}
        <div className="flex justify-center items-center m-6 sm:mt-8 sm:mb-4 px-4">
          <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 bg-white dark:bg-black backdrop-blur-md rounded-2xl px-6 sm:px-8 py-6 shadow-sm">
            {/* MAIN COUNTER */}
            <div className="flex flex-col items-center justify-center text-center md:w-[30%]">
              {/* COUNTER */}
              <div className="flex items-center justify-center gap-[2px] text-4xl sm:text-5xl font-serif text-orange-primary leading-none">
                {digits.map((digit, index) =>
                  digit === "," ? (
                    <span key={index}>{digit}</span>
                  ) : (
                    <Digit key={index} value={Number(digit)} />
                  ),
                )}
              </div>

              {/* LABEL */}
              <div className="text-xs text-slate-400 uppercase mt-2 tracking-wide flex items-center justify-center flex-wrap gap-1">
                On the Waitlist
                <span className="inline-flex items-center gap-1 ml-1 px-2 py-1 text-[10px] font-semibold rounded-full border border-green-400/30 bg-green-400/10 text-green-400">
                  <span className="w-[5px] h-[5px] bg-green-400 rounded-full animate-pulse"></span>
                  Live
                </span>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="hidden md:block w-px h-16 bg-gray-200 dark:bg-white/10"></div>

            {/* STATS WRAPPER */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full md:w-[70%] gap-4 sm:gap-6">
              {/* STAT 1 */}
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-dblue-secondary text-black">
                  <FiUsers size={24} />
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-white">
                  Save 10+ hours weekly
                </div>
              </div>

              {/* STAT 2 */}
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-secondary text-black">
                  <RiStarSmileLine size={24} />
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-white">
                  Hire Smarter with AI
                </div>
              </div>

              {/* STAT 3 */}
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-secondary text-black">
                  <RiRocketLine size={24} />
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-white">
                  Automated HR Tasks
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div
          className="mt-5 flex flex-wrap justify-between md:justify-center items-center 
                gap-x-3 gap-y-3 sm:gap-x-4 sm:gap-y-4 md:gap-x-5 md:gap-y-5 
                w-full max-w-2xl px-2"
        >
          <span className="px-2 py-2 border rounded-[10px] border-red-primary">
            Smart Payroll
          </span>
          <span className="px-2 py-2 border rounded-[10px] border-dgreen-primary">
            Compliance
          </span>
          <span className="px-2 py-2 border rounded-[10px] border-green-primary">
            AI Recruitment
          </span>
          <span className="px-2 py-2 border rounded-[10px] border-primary">
            Performance
          </span>
          <span className="px-2 py-2 border rounded-[10px] border-dblue-primary">
            Attendance
          </span>
          <span className="px-2 py-2 border rounded-[10px] border-orange-primary">
            Leave Tracking
          </span>
        </div>
      </section>
    </div>
  );
}
