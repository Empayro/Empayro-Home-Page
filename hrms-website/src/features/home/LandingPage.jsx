import { useState, useEffect, useRef } from "react";
import Button from "../../components/ui/Button";
import { MdOutlinePayments } from "react-icons/md";
import { RiRocketLine, RiStarSmileLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";

function StatCard({ label, icon: Icon, color }) {
  return (
    <div className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg ${color}`}
      >
        <Icon className="text-lg" size={24} />
      </div>
      <p className="text-sm font-medium text-gray-700 text-center">{label}</p>
    </div>
  );
}

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);
  const [animate] = useState(false);
  const statsRef = useRef(null);



  const handleMouse = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const stats = [
    { label: "Boost Team Productivity", icon: FiUsers, color: "bg-[#DEEEFA]" },
    {
      label: "Automate HR Tasks",
      icon: MdOutlinePayments,
      color: "bg-[#E5F3D3]",
    },
    {
      label: "Faster Payroll Processing",
      icon: RiRocketLine,
      color: "bg-[#FDE8D4]",
    },
    { label: "Less Manual Work", icon: RiStarSmileLine, color: "bg-[#FCDDD4]" },
  ];

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouse}
      className="relative min-h-screen bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff] text-black overflow-hidden"
      id="home"
    >
      {/* 🌌 Gradient Mesh */}
      <div className="absolute inset-0 z-0"></div>

      {/*  Mouse Glow */}
      <div
        className="absolute w-125 h-125 rounded-full bg-blue-400/10 blur-3xl pointer-events-none"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/*  Hero */}
      <section className="relative z-10 flex flex-col items-center text-center p-20 gap-y-2">
        <div className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium border-primary border flex items-center gap-2 mb-5">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          WE ARE LAUNCHING SOON
        </div>

        <h1 className="text-[clamp(42px,8vw,88px)] font-bold text-gray-900 md:text-8xl tracking-tight text-4xl">
          HR that{" "}
          <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
            thinks
          </span>{" "}
          ahead <br />
          of{" "}
          <span className="stroke [WebkitTextStroke:2px_rgba(91,127,255,0.5)]">
            everything
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          One intelligent platform to hire, manage, pay, and grow your team <br />
          all in one place.
        </p>

        {/* CTA */}
        <div className="flex gap-3 mt-8 flex-wrap justify-center">
          <input
            placeholder="Enter your work email"
            className="px-5 py-3 rounded-xl  border border-primary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />

          <Button>Get Early Access</Button>
        </div>

        {/* ── Stat cards (replacing the timer) ──────────────────────────── */}
        <div
          ref={statsRef}
          className="emp-fadeup emp-d4 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[680px] mb-5 mt-10"
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} animate={animate} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-5 flex flex-wrap justify-center items-center gap-x-4 gap-y-6 w-170">
          <span className="px-2 py-2 border rounded-[10px]  border-[#DC2626]">
            Smart Payroll
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#2563EB]">
            Attendance
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#7C3AED]">
            Compliance
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#059669]">
            AI Recruitment
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#EA580C]">
            AI Recruitment
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#334155]">
            Smart Payroll
          </span>
        </div>
      </section>
    </div>
  );
}
