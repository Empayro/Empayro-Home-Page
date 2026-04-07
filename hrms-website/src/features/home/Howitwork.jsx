import { useState, useEffect, useRef } from "react";
import {
  FiUserPlus,
  FiClock,
  FiDollarSign,
  FiBarChart2,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import { Service1, Service2, Service3, Service4 } from "@/assets";

/* ─── Step data (REPLACED mockup WITH image) ─────────────────────────────── */
const STEPS = [
  {
    id: 1,
    icon: FiUserPlus,
    label: "Add Employees",
    title: "Add Employees",
    iconheading: "Step 1",
    subtitle: "Build your workforce in minutes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi enim quam numquam? Velit, dolores, eos cupiditate laudantium sed consequuntur error ",
    accent: "#0078D4",
    light: "#DEEEFA",
    border: "#B6D9F2",
    shadow: "rgba(0, 120, 212, 0.3)",
    image: Service1, // 👈 ADD YOUR IMAGE PATH
    features: [
      "Quick employee onboarding with smart forms",
      "Store documents & contracts securely",
      "Assign roles & departments easily",
      "Centralized employee database",
    ],
  },
  {
    id: 2,
    icon: FiClock,
    label: "Track Attendance",
    title: "Track Attendance",
    iconheading: "Step 2",
    subtitle: "Real-time presence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi enim quam numquam? Velit, dolores, eos cupiditate laudantium sed consequuntur error ",
    accent: "#5CB400",
    light: "#E5F3D3",
    border: "#CFE8A9",
    shadow: "rgba(92, 180, 0, 0.3)",
    image: Service2,
    features: [
      "Real-time attendance tracking",
      "Geo-tagged check-in & check-out",
      "Shift & roster management",
      "Leave balance automation",
    ],
  },
  {
    id: 3,
    icon: FiDollarSign,
    label: "Process Payroll",
    title: "Process Payroll",
    iconheading: "Step 3",
    subtitle: "One click, zero errors",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi enim quam numquam? Velit, dolores, eos cupiditate laudantium sed consequuntur error ",
    accent: "#F47B20",
    light: "#FDE8D4",
    border: "#F8C9A6",
    shadow: "rgba(244, 123, 32, 0.3)",
    image: Service3,
    features: [
      "Automated salary processing",
      "Accurate tax deductions",
      "Compliance-ready payroll",
      "Payslip generation in one click",
    ],
  },
  {
    id: 4,
    icon: FiBarChart2,
    label: "Generate Reports",
    title: "Generate Reports",
    iconheading: "Step 4",
    subtitle: "Insights that drive decisions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi enim quam numquam? Velit, dolores, eos cupiditate laudantium sed consequuntur error ",
    accent: "#E8410A",
    light: "#FCDDD4",
    border: "#F5B4A3",
    shadow: "rgba(232, 65, 10, 0.3)",
    image: Service4,
    features: [
      "Download detailed HR reports",
      "Visual dashboards & analytics",
      "Track workforce trends",
      "Make data-driven decisions",
    ],
  },
];

export default function Howitwork() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  /* Scroll animation */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Auto-play */
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % STEPS.length);
      }, 3200);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoPlay, activeStep]);

  const goTo = (i) => {
    setActiveStep(i);

    // stop autoplay temporarily
    setAutoPlay(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // restart autoplay after delay
    setTimeout(() => {
      setAutoPlay(true);
    }, 5000); // reduce to 5s for better UX
  };

  const step = STEPS[activeStep];

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setAutoPlay(false)} // ✅ Pause on hover
      onMouseLeave={() => setAutoPlay(true)} // ✅ Resume
      className={`py-20 px-5 transition-all bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14 FadeUp">
          <div className="FadeUp text-center mb-4">
            <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium">
              ● How It Works
            </span>
          </div>

          <h2
            className="emp-reveal emp-reveal-2 font-black text-[#0f172a] leading-tight tracking-tight mb-3"
            style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
          >
            From hire to payslip -{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #0078d4, #76C3FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in four steps
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Empayro fits how your team already works. No training required, no
            complexity — just results.
          </p>
        </div>

        {/* TABS */}
        {/* STEPPER TABS */}
        <div className="flex items-center justify-center mb-12">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isActive = activeStep === i;
            const isCompleted = i < activeStep;

            return (
              <div key={i} className="flex items-center">
                {/* STEP */}
                <button
                  onClick={() => goTo(i)}
                  className="flex flex-col items-center relative"
                >
                  {/* Circle */}
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: isActive
                        ? "#0078D4"
                        : isCompleted
                          ? "#dbeafe"
                          : "#f3f4f6",
                      border: `2px solid ${
                        isActive
                          ? "#0078D4"
                          : isCompleted
                            ? "#93c5fd"
                            : "#d1d5db"
                      }`,
                      color: isActive
                        ? "#fff"
                        : isCompleted
                          ? "#3b82f6"
                          : "#9ca3af",
                      boxShadow: isActive ? "" : "none",
                    }}
                  >
                    {/* Completed = Check */}
                    {isCompleted ? <FiCheck size={18} /> : <Icon size={18} />}
                  </div>

                  {/* Label */}
                  <span
                    className={`mt-2 text-xs font-medium ${
                      isActive ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {s.label}
                  </span>

                  {/* Step Text */}
                  <span className="text-[10px] text-gray-400">
                    {s.iconheading}
                  </span>
                </button>

                {/* LINE */}
                {i !== STEPS.length - 1 && (
                  <div
                    className="w-16 h-[2px] mx-2 transition-all duration-300"
                    style={{
                      backgroundColor: i < activeStep ? "#0078D4" : "#d1d5db",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div key={activeStep} className=" animate-left">
            {/* TOP HEADER */}
            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl relative"
                style={{
                  backgroundColor: step.accent,
                  color: "#FFF",
                }}
              >
                <span
                  className="absolute inset-0 rounded-xl animate-soft-pulse"
                  style={{ backgroundColor: step.accent }}
                ></span>

                <step.icon size={22} className="relative z-10" />
              </div>

              <div>
                <p
                  className="font-bold text-[11px] tracking-[2px] uppercase leading-tight"
                  style={{
                    color: step.accent,
                  }}
                >
                  {step.iconheading}
                </p>
                <p className="text-sm text-gray-500">{step.subtitle}</p>
              </div>
            </div>

            <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
              {step.title}
            </h3>
            <p className="text-gray-500 mb-6">{step.description}</p>

            <div className="flex flex-col gap-3 mb-6">
              {step.features.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="mt-1 flex-shrink-0 w-5 h-5 flex items-center border-[1.5px] justify-center rounded-full"
                    style={{
                      backgroundColor: step.accent + "20",
                      color: step.accent,
                      borderColor: step.accent,
                    }}
                  >
                    <FiCheck size={10} />
                  </div>

                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            {/* NAVIGATION DOTS */}
            <div className="flex items-center justify-start gap-x-5 pt-2">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {STEPS.map((_, i) => {
                  const isActive = activeStep === i;

                  return (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        isActive ? "w-6" : "w-2.5"
                      }`}
                      style={{
                        backgroundColor: isActive ? step.accent : "#d1d5db",
                      }}
                    />
                  );
                })}
              </div>

              {/* Counter */}
              <div className="text-[11px] font-medium text-gray-500">
                <span>{activeStep + 1}</span> / {STEPS.length}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            key={activeStep + "-img"}
            className="rounded-3xl p-4 bg-white animate-right"
            style={{
              boxShadow: step.accent
                ? `5px 5px 0px ${step.shadow}`
                : "10px 5px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
