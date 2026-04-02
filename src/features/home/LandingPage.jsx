import { useState, useEffect, useRef } from "react";
import Button from "../../components/ui/Button";

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);

  const handleMouse = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };



  const useCountdown = (targetDate) => {
    const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

    useEffect(() => {
      const update = () => {
        const diff = targetDate - Date.now();

        if (diff <= 0) return;

        setTime({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / (1000 * 60)) % 60),
          s: Math.floor((diff / 1000) % 60),
        });
      };

      update();
      const interval = setInterval(update, 1000);

      return () => clearInterval(interval);
    }, [targetDate]);

    return time;
  };

    const launchDate = useRef(
  Date.now() + 22 * 86400000 + 14 * 3600000 + 37 * 60000
).current;

const time = useCountdown(launchDate);

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouse}
      className="relative min-h-screen bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff] text-black overflow-hidden"
    >
      {/* 🌌 Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-blue-500/20 blur-3xl -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] rounded-full  blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/*  Mouse Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/*  Hero */}
      <section className="relative z-10 flex flex-col items-center text-center p-20 pt-30">
        <div className="bg-[#0078D4]/10 text-[#0078D4] px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
          <span className="w-2 h-2 bg-[#0078D4] rounded-full animate-pulse" />
           Next-Gen HR Platform
        </div>

        <h1 className="text-[clamp(42px,8vw,88px)] font-bold text-gray-900 md:text-8xl leading-tight tracking-tight text-4xl">
          HR that{" "}
          <span className="bg-gradient-to-r from-[#0078D4] to-[#0078D4] bg-clip-text text-transparent">
            thinks
          </span>{" "}
          ahead <br />
          of{" "}
          <span className="stroke [WebkitTextStroke:2px_rgba(91,127,255,0.5)]">
            everything
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          One intelligent platform to hire, manage, pay, and grow your people.
        </p>

        {/* CTA */}
        <div className="flex gap-3 mt-8 flex-wrap justify-center">
          <input
            placeholder="Enter your email"
            className="px-5 py-3 rounded-xl bg-white/5 border border-blue-400 focus:border-blue-400 outline-none"
          />
          {/* <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:scale-105 transition">
            Get Early Access →
          </button> */}
          <Button>Get Early Access</Button>
        </div>

        {/* ⏱ Countdown */}
        <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
          {[
            { value: time.d, label: "Days" },
            { value: time.h, label: "Hours" },
            { value: time.m, label: "Minutes" },
            { value: time.s, label: "Seconds" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative px-6 py-5 rounded-2xl bg-white/5 backdrop-blur border border-[#0078d4] flex flex-col items-center min-w-[90px]"
            >
              {/* Gradient top line */}
              {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 rounded-t-2xl" /> */}

              {/* Number */}
              <span className="text-3xl font-semibold tracking-tight bg-gradient-to-b from-[#0078D4] to-[#0078D4] bg-clip-text text-transparent">
                {String(item.value).padStart(2, "0")}
              </span>

              {/* Label */}
              <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-4 gap-y-6 w-[700px]">
         <span className="px-2 py-2 border rounded-[10px]  border-[#DC2626]">Smart Payroll</span>
         {/* <span className="px-4 py-2 border rounded-[10px] border-[#2563EB]">AI Recruitment</span> */}
         <span className="px-2 py-2 border rounded-[10px]  border-[#2563EB]">AI Recruitment</span>
         {/* <span className="px-4 py-2 border rounded-[10px] border-[#2563EB]">Smart Payroll</span> */}
         <span className="px-2 py-2 border rounded-[10px]  border-[#7C3AED]">AI Recruitment</span>
         {/* <span className="px-4 py-2 border rounded-[10px] border-[#2563EB]">Time Tracking</span> */}
         <span className="px-2 py-2 border rounded-[10px]  border-[#059669]">AI Recruitment</span>
         {/* <span className="px-4 py-2 border rounded-[10px] border-[#2563EB]">Performance</span> */}
         <span className="px-2 py-2 border rounded-[10px]  border-[#EA580C]">Smart Payroll</span>
         {/* <span className="px-4 py-2 border rounded-[10px] border-[#2563EB]">Analytics</span> */}
         <span className="px-2 py-2 border rounded-[10px]  border-[#334155]">Smart Payroll</span>
         {/* <span className="px-4 py-2 border rounded-[10px] border-[#2563EB]">Complince</span> */}
         
        </div>
      </section>
    </div>
  );
}
