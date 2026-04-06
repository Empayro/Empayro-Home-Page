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
    label: "Step 01",
    title: "Add Employees",
    subtitle: "Build your workforce in minutes",
    description:
      "Onboard employees with smart forms. Capture roles, departments, documents, and contracts — all in one place.",
    accent: "#0078D4",
    light: "#DEEEFA",
    border: "#B6D9F2",
    image: Service1, // 👈 ADD YOUR IMAGE PATH
  },
  {
    id: 2,
    icon: FiClock,
    label: "Step 02",
    title: "Track Attendance",
    subtitle: "Real-time presence",
    description:
      "Geo-tagged check-ins, shift management, and leave balances updated live.",
    accent: "#5CB400",
    light: "#E5F3D3",
    border: "#CFE8A9",
    image: Service2,
  },
  {
    id: 3,
    icon: FiDollarSign,
    label: "Step 03",
    title: "Process Payroll",
    subtitle: "One click, zero errors",
    description:
      "Automated salary calculations, tax deductions, and compliance.",
    accent: "#F47B20",
    light: "#FDE8D4",
    border: "#F8C9A6",
    image: Service3,
  },
  {
    id: 4,
    icon: FiBarChart2,
    label: "Step 04",
    title: "Generate Reports",
    subtitle: "Insights that drive decisions",
    description:
      "Export reports and visualize workforce trends with dashboards.",
    accent: "#E8410A",
    light: "#FCDDD4",
    border: "#F5B4A3",
    image: Service4,
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
    if (!autoPlay) return;
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 3200);
    return () => clearInterval(intervalRef.current);
  }, [autoPlay]);

  const goTo = (i) => {
    setActiveStep(i);
    setAutoPlay(false);
    clearInterval(intervalRef.current);
    setTimeout(() => setAutoPlay(true), 8000);
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
        <div className="text-center mb-14">
          <div className="FadeUp text-center mb-4">
            <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium">
              ● How It Works
            </span>
          </div>

          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            Experience Smarter HR with <br />
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Empayro Demo
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            See how EMPAYRO simplifies HR operations from hiring to payroll all
            in one powerful platform.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-10 bg-white max-w-5xl m-auto rounded-lg p-4 shadow-lg">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`px-4 py-2 mx-1 rounded-lg ${
                  activeStep === i ? "bg-black text-white" : "bg-gray-100"
                }`}
              >
                <Icon />
              </button>
            );
          })}
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>

          {/* RIGHT (IMAGE REPLACED) */}
          <div className="rounded-3xl p-4 border shadow-xl bg-white">
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
