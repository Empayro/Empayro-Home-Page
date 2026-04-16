import { useState, useEffect, useRef } from "react";
import Button from "../../components/ui/Button";
import { MdOutlinePayments } from "react-icons/md";
import { RiRocketLine, RiStarSmileLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { useInView } from "../../hooks/useInView";

function StatCard({ label, icon: Icon, color }) {
  return (
    <div className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl bg-white border-white dark:bg-black dark:border  shadow-sm hover:shadow-md transition">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg ${color}`}
      >
        <Icon className="text-lg text-black " size={24} />
      </div>
      <p className="text-sm font-medium text-gray-700 dark:text-white text-center">
        {label}
      </p>
    </div>
  );
}

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  const [fadeRef, fadeVisible] = useInView();

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleMouse = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const stats = [
    {
      label: "Save 10+ hours weekly",
      icon: FiUsers,
      color: "bg-dblue-secondary",
    },
    {
      label: "Automate Payroll",
      icon: MdOutlinePayments,
      color: "bg-green-secondary",
    },
    {
      label: "Automated HR Tasks",
      icon: RiRocketLine,
      color: "bg-orange-secondary",
    },
    {
      label: "Hire Smarter with AI",
      icon: RiStarSmileLine,
      color: "bg-red-secondary",
    },
  ];

  // ✅ Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate API call / submission
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
    }, 500);
  };

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
            ? "show relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:px-10 md:py-30 md:pb-10 gap-y-2"
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

        {/* Stats Cards */}
        <div
          ref={statsRef}
          className="emp-fadeup emp-d4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[680px] mb-5 mt-10"
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
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
