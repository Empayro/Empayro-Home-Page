import { useState, useEffect, useRef } from "react";
import { HiArrowRight, HiCheckCircle, HiXMark } from "react-icons/hi2";
import { BsBellFill } from "react-icons/bs";
import { MdOutlinePayments, MdOutlineVerifiedUser, MdOutlinePeople, MdOutlineInsights } from "react-icons/md";
import { TbBrain, TbCalendarStats, TbFileReport, TbShieldCheck } from "react-icons/tb";
import { RiRocketLine, RiStarSmileLine } from "react-icons/ri";
import { FiUsers, FiZap } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

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

/* ─── stat card ────────────────────────────────────────────────────────────── */
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
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color} bg-opacity-15`}>
        <Icon className="text-lg" style={{ color: "inherit" }} />
      </div>
      <div className="text-3xl font-black text-[#0f172a] tracking-tight leading-none">
        {num.toLocaleString()}{suffix}
      </div>
      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest text-center leading-tight">
        {label}
      </div>
    </div>
  );
}

/* ─── feature card ─────────────────────────────────────────────────────────── */
function FeatureCard({ icon: Icon, title, desc, gradient, iconColor, delay }) {
  return (
    <div
      className="group relative rounded-2xl bg-white/80 backdrop-blur-sm border border-white/90
        p-5 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
      style={{ boxShadow: "0 4px 20px rgba(59,130,246,0.06)" }}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${gradient}`} />
      <div className="relative z-10">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${iconColor}`}>
          <Icon className="text-xl text-white" />
        </div>
        <h3 className="font-bold text-[14px] text-[#0f172a] mb-1 tracking-tight">{title}</h3>
        <p className="text-[12px] text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── floating dot ─────────────────────────────────────────────────────────── */
function FloatDot({ style }) {
  return (
    <div
      className="absolute rounded-full opacity-20 pointer-events-none"
      style={style}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  MAIN PAGE                                                                  */
/* ═══════════════════════════════════════════════════════════════════════════ */
export default function EmpayroComingSoon() {
  const [email, setEmail]         = useState("");
  const [error, setError]         = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [animate, setAnimate]     = useState(false);
  const [popupDone, setPopupDone] = useState(false); // track if newsletter popup shown
  const statsRef = useRef(null);

  /* trigger counter animation when stats come into view */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      setTimeout(() => setError(false), 1800);
      return;
    }
    setSubmitted(true);
  };

  const features = [
    { icon: TbBrain,         title: "AI-Powered Payroll",     desc: "Zero-error payroll with intelligent auto-calculations and compliance built in.",      gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",    iconColor: "bg-blue-500"   },
    { icon: FiUsers,         title: "Smart Recruitment",      desc: "Source, screen and hire top talent 3× faster with AI matching and pipeline tools.",   gradient: "bg-gradient-to-br from-violet-50 to-purple-50", iconColor: "bg-violet-500" },
    { icon: TbCalendarStats, title: "Attendance & Leaves",    desc: "Real-time tracking, geo-fencing, shift management and one-tap leave approvals.",       gradient: "bg-gradient-to-br from-emerald-50 to-teal-50",  iconColor: "bg-emerald-500"},
    { icon: MdOutlineInsights,"title": "People Analytics",    desc: "Deep workforce insights with visual dashboards that drive smarter HR decisions.",      gradient: "bg-gradient-to-br from-orange-50 to-amber-50",  iconColor: "bg-orange-500" },
    { icon: TbShieldCheck,   title: "Compliance Engine",      desc: "Stay audit-ready with auto-updated statutory rules, filings, and alerts.",             gradient: "bg-gradient-to-br from-rose-50 to-pink-50",     iconColor: "bg-rose-500"   },
    { icon: TbFileReport,    title: "360° Performance",       desc: "Goal tracking, continuous feedback and appraisal cycles in one unified workspace.",    gradient: "bg-gradient-to-br from-sky-50 to-indigo-50",    iconColor: "bg-sky-500"    },
  ];

  const stats = [
    { value: 10000, suffix: "+", label: "Employees Managed",  icon: FiUsers,              color: "bg-blue-500",    delay: "0ms"   },
    { value: 98,    suffix: "%", label: "Payroll Accuracy",   icon: MdOutlinePayments,    color: "bg-emerald-500", delay: "80ms"  },
    { value: 3,     suffix: "×", label: "Faster Hiring",      icon: RiRocketLine,         color: "bg-violet-500",  delay: "160ms" },
    { value: 500,   suffix: "+", label: "Companies Trust Us", icon: RiStarSmileLine,      color: "bg-orange-500",  delay: "240ms" },
  ];

  const pills = [
    "Smart Payroll", "AI Recruitment", "Leave Management",
    "Performance Reviews", "Compliance Alerts", "Org Chart", "Expense Tracking",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        * { box-sizing: border-box; }
        body { margin: 0; }

        .emp-page { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes empFloat   { 0%,100%{transform:translateY(0);}   50%{transform:translateY(-12px);} }
        @keyframes empPulse   { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(.65);} }
        @keyframes empFadeUp  { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }
        @keyframes empSlide   { from{opacity:0;transform:translateX(-16px);} to{opacity:1;transform:translateX(0);} }
        @keyframes empSpin    { to{transform:rotate(360deg);} }
        @keyframes empShimmer { 0%{background-position:200% center;} 100%{background-position:-200% center;} }
        @keyframes empBounce  { 0%,100%{transform:translateY(0) scale(1);} 40%{transform:translateY(-6px) scale(1.04);} }
        @keyframes empOrbit   { to{transform:rotate(360deg);} }
        @keyframes empPill    { from{opacity:0;transform:translateY(8px) scale(.9);} to{opacity:1;transform:translateY(0) scale(1);} }

        .emp-fadeup  { animation: empFadeUp .7s ease both; }
        .emp-slide   { animation: empSlide  .6s ease both; }
        .emp-d1      { animation-delay: .1s; }
        .emp-d2      { animation-delay: .22s; }
        .emp-d3      { animation-delay: .34s; }
        .emp-d4      { animation-delay: .46s; }
        .emp-d5      { animation-delay: .58s; }
        .emp-d6      { animation-delay: .7s; }

        .emp-shimmer-text {
          background: linear-gradient(90deg, #1d4ed8 0%, #0ea5e9 40%, #1d4ed8 60%, #0ea5e9 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: empShimmer 3s linear infinite;
        }

        .emp-float   { animation: empFloat 4s ease-in-out infinite; }
        .emp-float2  { animation: empFloat 5s ease-in-out infinite .8s; }
        .emp-float3  { animation: empFloat 3.5s ease-in-out infinite 1.4s; }

        .emp-dot-pulse { animation: empPulse 2s ease-in-out infinite; }

        .emp-orbit-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1.5px solid rgba(59,130,246,0.18);
          animation: empOrbit 12s linear infinite;
        }
        .emp-orbit-ring-2 {
          animation-duration: 18s;
          animation-direction: reverse;
          border-color: rgba(14,165,233,0.12);
        }

        .emp-pill-item { animation: empPill .5s ease both; }

        .emp-input-ring:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
          border-color: #3b82f6;
        }

        .emp-btn-glow:hover {
          box-shadow: 0 8px 30px rgba(59,130,246,0.45);
          transform: translateY(-1px);
        }
        .emp-btn-glow:active { transform: translateY(0); }

        .emp-card-hover:hover {
          box-shadow: 0 20px 48px rgba(59,130,246,0.14);
        }

        .emp-dashboard-card {
          animation: empFadeUp .8s ease both .3s;
        }

        /* scrollbar hide */
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="emp-page min-h-screen w-full overflow-x-hidden relative"
        style={{ background: "linear-gradient(135deg, #e8f2ff 0%, #f0f7ff 30%, #ffffff 60%, #f8faff 100%)" }}>

        {/* ── Background decorative blobs ──────────────────────────────────── */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)", transform: "translateX(30%)" }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)" }} />

        {/* Floating decorative dots */}
        <FloatDot style={{ top: "12%", left: "8%",  width: 10, height: 10, background: "#3b82f6", animationName: "empFloat",  animationDuration: "4s",   animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }} />
        <FloatDot style={{ top: "25%", right: "10%", width: 7,  height: 7,  background: "#0ea5e9", animationName: "empFloat",  animationDuration: "5.5s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "1s"   }} />
        <FloatDot style={{ top: "60%", left: "5%",  width: 14, height: 14, background: "#6366f1", animationName: "empFloat",  animationDuration: "3.8s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "2s"   }} />
        <FloatDot style={{ bottom:"20%",right: "7%", width: 9,  height: 9,  background: "#22d3ee", animationName: "empFloat",  animationDuration: "4.5s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: ".5s"  }} />

        {/* ── NAV ─────────────────────────────────────────────────────────── */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12">
          {/* Logo */}
          <div className="emp-slide flex items-center gap-2.5">
            {/* Colourful logo mark matching the screenshot */}
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="10" fill="white" />
              <path d="M8 20 Q14 8 20 20 Q26 32 32 20" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
              <path d="M8 20 Q14 32 20 20 Q26 8 32 20" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
              <circle cx="8"  cy="20" r="3.5" fill="#f97316"/>
              <circle cx="32" cy="20" r="3.5" fill="#22c55e"/>
            </svg>
            <span className="font-black text-[22px] text-[#0f172a] tracking-tight leading-none">
              Emp<span className="text-blue-500">ayro</span>
            </span>
          </div>

          {/* Right side */}
          <div className="emp-slide emp-d2 flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
              <span className="emp-dot-pulse w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
              <span className="text-[11.5px] font-semibold text-blue-600 uppercase tracking-widest">Launching Soon</span>
            </div>
          </div>
        </nav>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="relative z-10 flex flex-col items-center text-center px-5 pt-8 pb-4 md:pt-12">

          {/* Pill badge */}
          <div className="emp-fadeup flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-100 rounded-full px-5 py-2 mb-8 shadow-sm">
            <HiOutlineSparkles className="text-blue-500 text-sm" />
            <span className="text-[11.5px] font-bold text-blue-600 uppercase tracking-widest">
              We Are Launching Soon
            </span>
          </div>

          {/* Main heading */}
          <h1 className="emp-fadeup emp-d1 font-black text-[#0f172a] leading-[1.08] tracking-tight mb-5"
            style={{ fontSize: "clamp(42px,7vw,88px)" }}>
            HR that{" "}
            <span className="emp-shimmer-text">thinks</span>
            {" "}ahead<br />of everything
          </h1>

          <p className="emp-fadeup emp-d2 text-slate-500 font-medium max-w-[480px] mb-10 leading-relaxed"
            style={{ fontSize: "clamp(15px,2vw,18px)" }}>
            One intelligent platform to hire, manage, pay, and grow your people — powered by AI that never sleeps.
          </p>

          {/* Email CTA row */}
          {!submitted ? (
            <div className="emp-fadeup emp-d3 flex flex-col sm:flex-row gap-3 w-full max-w-[520px] mb-12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder={error ? "Enter a valid email address" : "Enter your email"}
                className={`emp-input-ring flex-1 px-5 py-3.5 rounded-xl border bg-white/90 backdrop-blur
                  text-[14px] font-medium text-slate-700 placeholder:text-slate-400
                  transition-all duration-200
                  ${error ? "border-red-400 placeholder:text-red-400" : "border-slate-200"}`}
              />
              <button
                onClick={handleSubmit}
                className="emp-btn-glow flex items-center justify-center gap-2
                  bg-blue-500 hover:bg-blue-600 text-white font-bold
                  px-7 py-3.5 rounded-xl text-[14px] tracking-wide
                  transition-all duration-200 whitespace-nowrap cursor-pointer border-0"
              >
                Get Early Access <HiArrowRight className="text-base" />
              </button>
            </div>
          ) : (
            <div className="emp-fadeup emp-d3 flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl px-7 py-4 mb-12">
              <HiCheckCircle className="text-emerald-500 text-2xl flex-shrink-0" />
              <div className="text-left">
                <p className="font-bold text-emerald-800 text-sm">You're on the list!</p>
                <p className="text-emerald-600 text-xs mt-0.5">We'll notify you before everyone else.</p>
              </div>
            </div>
          )}

          {/* ── Stat cards (replacing the timer) ──────────────────────────── */}
          <div ref={statsRef} className="emp-fadeup emp-d4 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-[680px] mb-10">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} animate={animate} />
            ))}
          </div>

          {/* ── Feature Pills ───────────────────────────────────────────── */}
          <div className="emp-fadeup emp-d5 flex flex-wrap justify-center gap-2.5 max-w-[640px] mb-16">
            {pills.map((p, i) => (
              <span
                key={p}
                className="emp-pill-item bg-white/80 backdrop-blur border border-slate-200/80
                  text-slate-600 text-[12px] font-semibold px-4 py-1.5 rounded-full
                  hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600
                  transition-all duration-200 cursor-default"
                style={{ animationDelay: `${0.5 + i * 0.06}s` }}
              >
                {p}
              </span>
            ))}
          </div>
        </section>

        {/* ── DASHBOARD PREVIEW STRIP ─────────────────────────────────────── */}
        <section className="relative z-10 px-5 mb-20 overflow-hidden">
          <div className="max-w-5xl mx-auto">

            {/* Section label */}
            <div className="text-center mb-8">
              <span className="text-[11.5px] font-bold text-blue-500 uppercase tracking-[2px]">Platform Preview</span>
              <h2 className="font-black text-[#0f172a] text-[26px] md:text-[34px] mt-1 tracking-tight">
                Everything HR, beautifully unified
              </h2>
            </div>

            {/* Mock dashboard card */}
            <div className="emp-dashboard-card relative rounded-3xl overflow-hidden border border-white/80
              bg-white/70 backdrop-blur-xl shadow-2xl"
              style={{ boxShadow: "0 32px 80px rgba(59,130,246,0.12), 0 8px 32px rgba(0,0,0,0.06)" }}>

              {/* Fake top bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100/80 bg-white/60">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="flex-1 mx-4 h-6 rounded-lg bg-slate-100 flex items-center px-3">
                  <span className="text-[10px] text-slate-400 font-medium">app.empayro.com/dashboard</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-[8px] font-black">E</span>
                </div>
              </div>

              {/* Dashboard body */}
              <div className="grid grid-cols-3 md:grid-cols-4 gap-0 divide-x divide-slate-100">

                {/* Sidebar */}
                <div className="hidden md:flex flex-col gap-1 p-4 bg-slate-50/60 col-span-1">
                  {["Dashboard","Employees","Payroll","Leaves","Recruitment","Reports"].map((item, i) => (
                    <div key={item}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${i === 0 ? "bg-blue-500 text-white" : "text-slate-500 hover:bg-white"}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-slate-300"}`} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="col-span-3 p-4 md:p-5">
                  {/* Mini stat row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Total Employees", val: "1,284", color: "bg-blue-50",    txt: "text-blue-600",    up: "+12%" },
                      { label: "This Month Payroll", val: "₹48.2L", color: "bg-emerald-50", txt: "text-emerald-600", up: "+3%"  },
                      { label: "Open Positions", val: "27",    color: "bg-violet-50",  txt: "text-violet-600", up: "+5"   },
                    ].map((c) => (
                      <div key={c.label} className={`${c.color} rounded-xl p-3`}>
                        <p className="text-[9px] text-slate-500 font-semibold uppercase tracking-wide mb-1">{c.label}</p>
                        <p className={`text-[18px] font-black ${c.txt} leading-none`}>{c.val}</p>
                        <p className="text-[9px] text-emerald-600 font-bold mt-1">{c.up} this month</p>
                      </div>
                    ))}
                  </div>

                  {/* Two column content area */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Activity feed */}
                    <div className="bg-white rounded-xl border border-slate-100 p-3">
                      <p className="text-[10px] font-bold text-slate-700 mb-2">Recent Activity</p>
                      {[
                        { name: "Priya S.", action: "Joined Engineering", time: "2m ago",  color: "bg-blue-400" },
                        { name: "Rahul M.", action: "Payslip Generated",  time: "15m ago", color: "bg-emerald-400" },
                        { name: "Ankit D.", action: "Leave Approved",     time: "1h ago",  color: "bg-violet-400" },
                        { name: "Sara T.", action: "Performance Review",  time: "3h ago",  color: "bg-orange-400" },
                      ].map((a) => (
                        <div key={a.name} className="flex items-center gap-2 py-1.5 border-b border-slate-50 last:border-0">
                          <div className={`w-5 h-5 rounded-full ${a.color} flex items-center justify-center text-white text-[7px] font-black flex-shrink-0`}>
                            {a.name[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] font-semibold text-slate-700 truncate">{a.name} · <span className="text-slate-400 font-normal">{a.action}</span></p>
                          </div>
                          <span className="text-[8px] text-slate-400 flex-shrink-0">{a.time}</span>
                        </div>
                      ))}
                    </div>

                    {/* Attendance mini chart */}
                    <div className="bg-white rounded-xl border border-slate-100 p-3">
                      <p className="text-[10px] font-bold text-slate-700 mb-3">Attendance This Week</p>
                      <div className="flex items-end justify-between gap-1 h-16">
                        {[
                          { day: "M", pct: 95 }, { day: "T", pct: 88 }, { day: "W", pct: 92 },
                          { day: "T", pct: 78 }, { day: "F", pct: 85 },
                        ].map((b, i) => (
                          <div key={i} className="flex flex-col items-center gap-1 flex-1">
                            <div className="w-full rounded-t-sm bg-blue-500 opacity-80 transition-all"
                              style={{ height: `${(b.pct / 100) * 52}px` }} />
                            <span className="text-[8px] text-slate-400 font-semibold">{b.day}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[9px] text-slate-400">Avg attendance</span>
                        <span className="text-[9px] font-bold text-blue-600">87.6%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES GRID ───────────────────────────────────────────────── */}
        <section className="relative z-10 px-5 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[11.5px] font-bold text-blue-500 uppercase tracking-[2px]">What's Inside</span>
              <h2 className="font-black text-[#0f172a] text-[26px] md:text-[34px] mt-1 tracking-tight">
                Built for how real HR teams work
              </h2>
              <p className="text-slate-500 mt-2 text-[15px] max-w-[440px] mx-auto leading-relaxed">
                Every module connects seamlessly so your data flows, not your frustration.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <FeatureCard key={f.title} {...f} delay={`${i * 80}ms`} />
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA BAND ─────────────────────────────────────────────── */}
        <section className="relative z-10 px-5 mb-12">
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)", boxShadow: "0 24px 64px rgba(29,78,216,0.35)" }}>
            <div className="relative px-8 py-12 text-center">
              {/* Orbit rings decoration */}
              <div className="absolute left-1/2 top-1/2 w-64 h-64 rounded-full border border-white/10 pointer-events-none"
                style={{ transform: "translate(-50%,-50%)", animation: "empOrbit 12s linear infinite" }} />
              <div className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full border border-white/5 pointer-events-none"
                style={{ transform: "translate(-50%,-50%)", animation: "empOrbit 18s linear infinite reverse" }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-5">
                  <BsBellFill className="text-white/80 text-xs" />
                  <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">Limited Early Access</span>
                </div>
                <h2 className="font-black text-white text-[28px] md:text-[38px] leading-tight tracking-tight mb-3">
                  Be the first to transform<br />your HR forever
                </h2>
                <p className="text-white/70 text-[15px] max-w-[400px] mx-auto mb-8 leading-relaxed">
                  Join 2,400+ HR leaders already on the waitlist. Early members get lifetime perks and priority onboarding.
                </p>

                {!submitted ? (
                  <div className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      placeholder="Enter your work email"
                      className="emp-input-ring flex-1 px-5 py-3.5 rounded-xl bg-white/90 border border-white/0
                        text-[14px] font-medium text-slate-700 placeholder:text-slate-400"
                    />
                    <button
                      onClick={handleSubmit}
                      className="flex items-center justify-center gap-2 bg-white text-blue-600
                        font-bold px-7 py-3.5 rounded-xl text-[14px] tracking-wide whitespace-nowrap
                        hover:bg-blue-50 transition-all duration-200 cursor-pointer border-0
                        hover:shadow-lg"
                    >
                      Notify Me <FiZap className="text-base" />
                    </button>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-3 bg-white/15 border border-white/30 rounded-2xl px-7 py-4">
                    <HiCheckCircle className="text-white text-2xl" />
                    <div className="text-left">
                      <p className="font-bold text-white text-sm">You're in! Welcome to Empayro.</p>
                      <p className="text-white/65 text-xs mt-0.5">We'll reach out with exclusive early access.</p>
                    </div>
                  </div>
                )}

                <p className="text-white/45 text-[11px] mt-4">
                  No credit card required · No spam · Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
        <footer className="relative z-10 text-center py-8 px-5 border-t border-slate-100">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
              <path d="M8 20 Q14 8 20 20 Q26 32 32 20" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
              <path d="M8 20 Q14 32 20 20 Q26 8 32 20" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
              <circle cx="8"  cy="20" r="3.5" fill="#f97316"/>
              <circle cx="32" cy="20" r="3.5" fill="#22c55e"/>
            </svg>
            <span className="font-black text-[16px] text-[#0f172a]">Emp<span className="text-blue-500">ayro</span></span>
          </div>
          <p className="text-slate-400 text-[12px]">
            © 2025 Empayro. Crafted with care for modern HR teams.
          </p>
        </footer>
      </div>
    </>
  );
}