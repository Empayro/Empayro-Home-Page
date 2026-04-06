import { useState, useEffect, useRef } from "react";
import Button from "../../components/ui/Button";
import { MdOutlinePayments } from "react-icons/md";
import { RiRocketLine, RiStarSmileLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";


/* ─── tiny hook: animated counter ─────────────────────────────────────────── */
function useCounter(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let s = null;
    const step = target / (duration / 16);
    let cur = 0;
    s = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.floor(cur));
      if (cur >= target) clearInterval(s);
    }, 16);
    return () => clearInterval(s);
  }, [start, target, duration]);
  return val;
}

function StatCard({ value, suffix, label, icon: Icon, color, delay, animate }) {
  const num = useCounter(value, 1600, animate);
  return (
    <div
      className="relative group flex flex-col items-center justify-center gap-2 rounded-2xl
        bg-white/70 backdrop-blur-sm border border-white/80
        px-6 py-5 overflow-hidden cursor-default
        hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      style={{
        animationDelay: delay,
        boxShadow: "0 4px 24px rgba(59,130,246,0.08)",
      }}
    >
      {/* colour blob behind */}
      <div
        className={`absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${color}`}
      />
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} bg-opacity-15`}
      >
        <Icon className="text-2xl" style={{ color: "inherit" }} />
      </div>
      <div className="text-2xl font-semibold text-[#0f172a] tracking-tight leading-none">
        {/* {num.toLocaleString()} */}
        {/* {suffix} */}
      </div>
      <div className="text-[13px] font-medium text-black  tracking-widest text-center leading-tight">
        {label}
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const statsRef = useRef(null);

  /* trigger counter animation when stats come into view */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

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
    Date.now() + 22 * 86400000 + 14 * 3600000 + 37 * 60000,
  ).current;

  const time = useCountdown(launchDate);

  const stats = [
    {
      // value: 10000,
      // suffix: "+",
      label: "Boost Team Productivity",
      icon: FiUsers,
      color: "bg-[#DEEEFA]",
      delay: "0ms",
    },
    {
      // value: 80,
      // suffix: "%",
      label: "Automate HR Tasks",
      icon: MdOutlinePayments,
      color: "bg-[#E5F3D3]",
      delay: "80ms",
    },
    {
      // value: 10,
      // suffix: "×",
      label: "Faster Payroll Processing",
      icon: RiRocketLine,
      color: "bg-[#FDE8D4]",
      delay: "160ms",
    },
    {
      // value: 50,
      // suffix: "%",
      label: "Less Manual Work",
      icon: RiStarSmileLine,
      color: "bg-[#FCDDD4]",
      delay: "240ms",
    },
  ];

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouse}
      className="relative min-h-screen bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff] text-black overflow-hidden"
      id="home"
    >
      {/* 🌌 Gradient Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-200 h-200 rounded-full bg-blue-500/20 blur-3xl -top-40 -left-40 animate-pulse" />
        <div className="absolute w-150 h-150 rounded-full  blur-3xl bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

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
        <div className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium border-primary border flex items-center gap-2">
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          quas, repellat itaque aliquam consectetur quidem incidunt placeat
          architecto qui officia.
        </p>

        {/* CTA */}
        <div className="flex gap-3 mt-8 flex-wrap justify-center">
          <input
            placeholder="Enter your email"
            className="px-5 py-3 rounded-xl bg-white/5 border border-blue-400 focus:border-blue-400 outline-none"
          />

          <Button>Get Early Access</Button>
        </div>

        {/* ⏱ Countdown */}
        {/* <div className="mt-12 flex items-center justify-center gap-4 flex-wrap display-flex-none"> */}
        {/* {[ */}
        {/* // { value: time.d, label: "Days" }, */}
        {/* // { value: time.h, label: "Hours" }, */}
        {/* // { value: time.m, label: "Minutes" }, */}
        {/* // { value: time.s, label: "Seconds" }, */}
        {/* // ].map((item, i) => ( */}
        {/* // <div */}
        {/* // key={i} */}
        {/* // className="relative px-6 py-5 rounded-2xl bg-white/5 backdrop-blur border border-primary flex flex-col items-center min-w-[90px]" */}
        {/* > */}
        {/* Number */}
        {/* <span className="text-3xl font-semibold tracking-tight bg-gradient-to-b from-primary to-primary bg-clip-text text-transparent"> */}
        {/* {String(item.value).padStart(2, "0")} */}
        {/* </span> */}

        {/* Label */}
        {/* <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1"> */}
        {/* {item.label} */}
        {/* </span> */}
        {/* </div> */}
        {/* // ))} */}
        {/* </div> */}

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
        <div className="mt-5 flex flex-wrap justify-center items-center gap-x-4 gap-y-6 w-175">
          <span className="px-2 py-2 border rounded-[10px]  border-[#DC2626]">
            Smart Payroll
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#2563EB]">
            AI Recruitment
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#7C3AED]">
            AI Recruitment
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#059669]">
            AI Recruitment
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#EA580C]">
            Smart Payroll
          </span>
          <span className="px-2 py-2 border rounded-[10px]  border-[#334155]">
            Smart Payroll
          </span>
        </div>
      </section>
    </div>
  );
}
