import { useState, useEffect, useRef } from "react";
import { FiUserPlus, FiClock, FiDollarSign, FiBarChart2, FiArrowRight, FiCheck } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

/* ─── Step data ─────────────────────────────────────────────────────────────── */
const STEPS = [
  {
    id: 1,
    icon: FiUserPlus,
    label: "Step 01",
    title: "Add Employees",
    subtitle: "Build your workforce in minutes",
    description:
      "Onboard employees with smart forms. Capture roles, departments, documents, and contracts — all in one place, no paperwork chaos.",
    color: "blue",
    accent: "#0078d4",
    light: "#eff6ff",
    border: "#bfdbfe",
    mockup: <AddEmployeeMock />,
  },
  {
    id: 2,
    icon: FiClock,
    label: "Step 02",
    title: "Track Attendance",
    subtitle: "Real-time presence, zero guesswork",
    description:
      "Geo-tagged check-ins, shift management, and leave balances updated live. Managers get instant visibility across every team.",
    color: "cyan",
    accent: "#5CB400",
    light: "#f0f9ff",
    border: "#bae6fd",
    mockup: <AttendanceMock />,
  },
  {
    id: 3,
    icon: FiDollarSign,
    label: "Step 03",
    title: "Process Payroll",
    subtitle: "One click, zero errors",
    description:
      "Automated salary calculations, tax deductions, and statutory compliance. Run payroll for your entire company in under 60 seconds.",
    color: "emerald",
    accent: "#F47B20",
    light: "#ecfdf5",
    border: "#a7f3d0",
    mockup: <PayrollMock />,
  },
  {
    id: 4,
    icon: FiBarChart2,
    label: "Step 04",
    title: "Generate Reports",
    subtitle: "Insights that drive decisions",
    description:
      "Export audit-ready reports for compliance, leadership, and finance — instantly. Visualize workforce trends with beautiful dashboards.",
    color: "violet",
    accent: "#8b5cf6",
    light: "#f5f3ff",
    border: "#ddd6fe",
    mockup: <ReportsMock />,
  },
];

/* ─── Mini Mockups ──────────────────────────────────────────────────────────── */

function AddEmployeeMock() {
  return (
    <div className="w-full space-y-3">
      {/* Form card */}
      <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <FiUserPlus className="text-blue-500 text-sm" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-700">New Employee</p>
            <p className="text-[9px] text-slate-400">Fill in details below</p>
          </div>
          <div className="ml-auto bg-blue-500 text-white text-[9px] font-bold px-3 py-1 rounded-full">Save</div>
        </div>
        <div className="space-y-2">
          {[
            { label: "Full Name", val: "Priya Sharma", filled: true },
            { label: "Department", val: "Engineering", filled: true },
            { label: "Role",       val: "Senior Developer", filled: true },
          ].map((f) => (
            <div key={f.label}>
              <p className="text-[8px] text-slate-400 font-semibold mb-0.5 uppercase tracking-wide">{f.label}</p>
              <div className={`rounded-lg px-3 py-1.5 text-[10px] font-semibold border ${f.filled ? "bg-blue-50 border-blue-100 text-blue-700" : "bg-slate-50 border-slate-100 text-slate-300"}`}>
                {f.val}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Team row */}
      <div className="flex gap-2">
        {["PS", "RK", "AM", "SJ", "+8"].map((av, i) => (
          <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-black border-2 border-white shadow-sm ${i < 4 ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-500"}`}>{av}</div>
        ))}
        <div className="ml-auto bg-blue-50 rounded-lg px-3 flex items-center">
          <p className="text-[9px] font-bold text-blue-600">12 active</p>
        </div>
      </div>
    </div>
  );
}

function AttendanceMock() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const vals = [96, 82, 94, 78, 89];
  return (
    <div className="w-full space-y-3">
      <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-bold text-slate-700">This Week</p>
          <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-bold text-emerald-600">Live</span>
          </div>
        </div>
        {/* Bar chart */}
        <div className="flex items-end gap-2 h-14 mb-2">
          {vals.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-cyan-500 to-sky-400 transition-all duration-700"
                style={{ height: `${(v / 100) * 48}px` }}
              />
              <span className="text-[8px] text-slate-400 font-semibold">{days[i]}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px] text-slate-400">Avg</span>
          <span className="text-[9px] font-black text-cyan-600">87.8%</span>
        </div>
      </div>
      {/* Check-in cards */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { name: "Rahul", status: "In",  color: "bg-emerald-50 border-emerald-100", txt: "text-emerald-600", dot: "bg-emerald-400" },
          { name: "Anita", status: "Out", color: "bg-red-50 border-red-100",         txt: "text-red-500",     dot: "bg-red-400"     },
          { name: "Dev",   status: "In",  color: "bg-emerald-50 border-emerald-100", txt: "text-emerald-600", dot: "bg-emerald-400" },
        ].map((c) => (
          <div key={c.name} className={`rounded-xl border ${c.color} p-2 flex flex-col items-center gap-1`}>
            <div className={`w-6 h-6 rounded-full ${c.dot} flex items-center justify-center text-white text-[8px] font-black`}>{c.name[0]}</div>
            <p className="text-[8px] font-bold text-slate-600">{c.name}</p>
            <p className={`text-[7px] font-black ${c.txt}`}>{c.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PayrollMock() {
  return (
    <div className="w-full space-y-3">
      <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-bold text-slate-700">June Payroll</p>
          <div className="bg-emerald-500 text-white text-[9px] font-black px-3 py-1 rounded-full">Run Payroll</div>
        </div>
        {/* Breakdown rows */}
        {[
          { label: "Gross Salary",   val: "₹48,20,000", color: "text-slate-700" },
          { label: "PF Deduction",   val: "- ₹5,78,400", color: "text-red-500"   },
          { label: "TDS",            val: "- ₹4,02,000", color: "text-red-500"   },
          { label: "Net Disbursed",  val: "₹38,39,600", color: "text-emerald-600 font-black" },
        ].map((r) => (
          <div key={r.label} className="flex justify-between items-center py-1.5 border-b border-slate-50 last:border-0">
            <span className="text-[9px] text-slate-400 font-semibold">{r.label}</span>
            <span className={`text-[10px] font-bold ${r.color}`}>{r.val}</span>
          </div>
        ))}
      </div>
      {/* Status chips */}
      <div className="flex gap-2">
        <div className="flex-1 bg-emerald-50 border border-emerald-100 rounded-xl p-2.5 text-center">
          <p className="text-[14px] font-black text-emerald-600">284</p>
          <p className="text-[8px] text-emerald-500 font-semibold">Processed</p>
        </div>
        <div className="flex-1 bg-amber-50 border border-amber-100 rounded-xl p-2.5 text-center">
          <p className="text-[14px] font-black text-amber-600">3</p>
          <p className="text-[8px] text-amber-500 font-semibold">Pending</p>
        </div>
        <div className="flex-1 bg-blue-50 border border-blue-100 rounded-xl p-2.5 text-center">
          <p className="text-[14px] font-black text-blue-600">60s</p>
          <p className="text-[8px] text-blue-500 font-semibold">Run time</p>
        </div>
      </div>
    </div>
  );
}

function ReportsMock() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const vals   = [60, 75, 55, 85, 70, 95];
  return (
    <div className="w-full space-y-3">
      <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-bold text-slate-700">Workforce Analytics</p>
          <div className="text-[9px] font-bold text-violet-600 bg-violet-50 border border-violet-100 rounded-full px-3 py-1">Export ↓</div>
        </div>
        {/* Line-ish bars */}
        <div className="flex items-end gap-1.5 h-12 mb-2">
          {vals.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className={`w-full rounded-sm transition-all duration-700 ${i === 5 ? "bg-violet-500" : "bg-violet-200"}`}
                style={{ height: `${(v / 100) * 40}px` }}
              />
              <span className="text-[7px] text-slate-400">{months[i]}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {[
            { label: "Headcount",   val: "1,284", badge: "↑ 12%" },
            { label: "Attrition",   val: "2.4%",  badge: "↓ 0.8%" },
          ].map((s) => (
            <div key={s.label} className="flex-1 bg-violet-50 rounded-xl p-2">
              <p className="text-[8px] text-slate-400 font-semibold">{s.label}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[13px] font-black text-violet-700">{s.val}</span>
                <span className="text-[8px] font-bold text-emerald-600">{s.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Report type pills */}
      <div className="flex flex-wrap gap-1.5">
        {["Payroll Summary", "Attendance Log", "Tax Report", "Headcount"].map((t) => (
          <span key={t} className="text-[8px] font-bold text-violet-600 bg-violet-50 border border-violet-100 rounded-full px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Connector line between steps ─────────────────────────────────────────── */
function Connector({ active }) {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center w-12 shrink-0 mt-6">
      <div className="relative w-full flex items-center">
        <div className="h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-700"
            style={{ width: active ? "100%" : "0%" }}
          />
        </div>
        <FiArrowRight className={`absolute -right-2 text-sm transition-colors duration-500 ${active ? "text-cyan-400" : "text-slate-200"}`} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                                             */
/* ═══════════════════════════════════════════════════════════════════════════ */
export default function HowItWorks() {
  const [activeStep, setActiveStep]   = useState(0);
  const [visible, setVisible]         = useState(false);
  const [autoPlay, setAutoPlay]       = useState(true);
  const sectionRef                    = useRef(null);
  const intervalRef                   = useRef(null);

  /* Trigger entrance animation on scroll */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Auto-cycle through steps */
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
    // Resume after 8s of inactivity
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const step = STEPS[activeStep];

  return (
    <>
      <style>{`
        @keyframes empFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes empScaleIn {
          from { opacity: 0; transform: scale(.94); }
          to   { opacity: 1; transform: scale(1);   }
        }
        @keyframes empSlideRight {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes empMockIn {
          from { opacity: 0; transform: translateY(14px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1);      }
        }
        @keyframes empLineFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes empPulseRing {
          0%   { box-shadow: 0 0 0 0px rgba(59,130,246,0.3); }
          70%  { box-shadow: 0 0 0 10px rgba(59,130,246,0);   }
          100% { box-shadow: 0 0 0 0px rgba(59,130,246,0);    }
        }

        .emp-section-visible .emp-reveal {
          animation: empFadeUp .65s ease both;
        }
        .emp-section-visible .emp-reveal-1 { animation-delay: .05s; }
        .emp-section-visible .emp-reveal-2 { animation-delay: .15s; }
        .emp-section-visible .emp-reveal-3 { animation-delay: .25s; }
        .emp-section-visible .emp-reveal-4 { animation-delay: .35s; }

        .emp-mock-enter {
          animation: empMockIn .45s cubic-bezier(.16,1,.3,1) both;
        }
        .emp-content-enter {
          animation: empSlideRight .4s ease both;
        }
        .emp-step-pulse {
          animation: empPulseRing 1.8s ease-out infinite;
        }
        .emp-progress-fill {
          animation: empLineFill 3.2s linear forwards;
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`relative w-full py-20 md:py-28 px-5 overflow-hidden transition-all ${visible ? "emp-section-visible" : "opacity-0"}`}
        style={{ background: "linear-gradient(170deg, #f8faff 0%, #eff6ff 40%, #ffffff 100%)" }}
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)", transform: "translate(-25%, 25%)" }} />

        <div className="max-w-6xl mx-auto">

          {/* ── Section header ─────────────────────────────────────────────── */}
          <div className="text-center mb-14">
            <div className="text-center mb-4 ">
        <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium">
          ● How It Works
        </span>
        </div>

            <h2 className="emp-reveal emp-reveal-2 font-black text-[#0f172a] leading-tight tracking-tight mb-3"
              style={{ fontSize: "clamp(28px, 4.5vw, 48px)",  }}>
              From hire to payslip -{" "}
              <span style={{
                background: "linear-gradient(90deg, #0078d4, #00A4EF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                in four steps
              </span>
            </h2>

            <p className="emp-reveal emp-reveal-3 text-slate-500 font-medium max-w-[480px] mx-auto leading-relaxed"
              style={{ fontSize: "clamp(14px, 1.8vw, 16px)",  }}>
              Empayro fits how your team already works. No training required, no complexity — just results.
            </p>
          </div>

          {/* ── Step selector tabs ─────────────────────────────────────────── */}
          <div className="emp-reveal emp-reveal-4 flex items-center justify-center gap-0 mb-12 bg-white/80 backdrop-blur border border-slate-100 rounded-2xl p-1.5 max-w-[600px] mx-auto shadow-sm">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const isActive = activeStep === i;
              return (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`relative flex-1 flex flex-col items-center gap-1 px-2 py-2.5 rounded-xl transition-all duration-300 cursor-pointer border-0 group
                    ${isActive
                      ? "bg-primary shadow-lg"
                      : "bg-transparent hover:bg-slate-50"
                    }`}
                >
                  {/* Progress fill for active */}
                  {isActive && autoPlay && (
                    <div className="absolute bottom-0 left-0 h-[2px] bg-white/30 rounded-b-xl overflow-hidden w-full">
                      <div key={activeStep} className="emp-progress-fill h-full bg-white rounded-b-xl" />
                    </div>
                  )}

                  <Icon className={`text-lg transition-colors duration-200 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`} />
                  <span className={`text-[10px] font-bold hidden sm:block transition-colors duration-200 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`}>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Main content: left text + right mockup ─────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            {/* Left: step info */}
            <div key={`content-${activeStep}`} className="emp-content-enter space-y-6">

              {/* Step number + label */}
              <div className="flex items-center gap-3">
                <div
                  className="emp-step-pulse w-12 h-12 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${step.accent}, ${step.accent}cc)` }}
                >
                  <step.icon className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[2px]" style={{ color: step.accent }}>{step.label}</p>
                  <p className="text-[13px] font-semibold text-slate-400" style={{  }}>{step.subtitle}</p>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-black text-[#0f172a] leading-tight tracking-tight"
                style={{ fontSize: "clamp(26px, 3.5vw, 40px)",  }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 leading-relaxed"
                style={{ fontSize: "clamp(14px, 1.6vw, 16px)",  }}>
                {step.description}
              </p>

              {/* Checkpoints */}
              <ul className="space-y-2.5">
                {[
                  ["Minimal setup, instant results",          true ],
                  ["No training or technical knowledge needed", true],
                  ["Works across all devices and team sizes",  true ],
                ].map(([txt, done]) => (
                  <li key={txt} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: step.light, border: `1.5px solid ${step.border}` }}
                    >
                      <FiCheck className="text-[10px]" style={{ color: step.accent }} />
                    </div>
                    <span className="text-[13px] font-medium text-slate-600" style={{  }}>{txt}</span>
                  </li>
                ))}
              </ul>

              {/* Step dots nav (mobile) */}
              <div className="flex items-center gap-2 pt-2">
                {STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 cursor-pointer border-0 ${
                      activeStep === i
                        ? "w-8 h-2.5"
                        : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    style={activeStep === i ? { background: step.accent } : {}}
                  />
                ))}
                <span className="text-[11px] text-slate-400 font-medium ml-2" style={{  }}>
                  {activeStep + 1} / {STEPS.length}
                </span>
              </div>
            </div>

            {/* Right: mockup card */}
            <div key={`mock-${activeStep}`} className="emp-mock-enter">
              <div
                className="relative rounded-3xl p-6 border shadow-xl"
                style={{
                  background: `linear-gradient(145deg, ${step.light} 0%, #ffffff 100%)`,
                  borderColor: step.border,
                  boxShadow: `0 24px 64px ${step.accent}18, 0 4px 16px rgba(0,0,0,0.06)`,
                }}
              >
                {/* Top bar of mock window */}
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                  <div className="ml-3 flex-1 h-5 rounded-md bg-white/60 border border-slate-100 flex items-center px-2">
                    <span className="text-[8.5px] text-slate-400 font-medium">empayro.com</span>
                  </div>
                  {/* Live badge */}
                  <div className="flex items-center gap-1 bg-white border rounded-full px-2.5 py-1" style={{ borderColor: step.border }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.accent }} />
                    <span className="text-[8px] font-bold" style={{ color: step.accent }}>Live</span>
                  </div>
                </div>

                {/* Dynamic mockup content */}
                {step.mockup}

                {/* Decorative corner glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${step.accent}22 0%, transparent 70%)`,
                    transform: "translate(30%, -30%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ── Bottom step connector strip ────────────────────────────────── */}
          <div className="hidden lg:flex items-center justify-center gap-0 mt-16 max-w-[700px] mx-auto">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center flex-1">
                {/* Step node */}
                <button
                  onClick={() => goTo(i)}
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-300 cursor-pointer
                    ${activeStep === i
                      ? "border-blue-500 bg-blue-500 shadow-lg scale-110"
                      : activeStep > i
                      ? "border-blue-300 bg-blue-100"
                      : "border-slate-200 bg-white hover:border-blue-200"
                    }`}
                >
                  {activeStep > i ? (
                    <FiCheck className="text-blue-500 text-sm" />
                  ) : (
                    <s.icon className={`text-sm ${activeStep === i ? "text-white" : "text-slate-400"}`} />
                  )}
                </button>

                {/* Connector line (not after last) */}
                {i < STEPS.length - 1 && (
                  <div className="flex-1 mx-2 h-[2px] bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-500"
                      style={{ width: activeStep > i ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step labels below connector */}
          <div className="hidden lg:grid grid-cols-4 mt-2.5 max-w-[700px] mx-auto">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex flex-col items-center gap-0.5">
                <p className={`text-[10px] font-black transition-colors duration-300 ${activeStep === i ? "text-blue-600" : "text-slate-400"}`}
                  style={{  }}>
                  {s.title}
                </p>
                <p className="text-[9px] text-slate-300 font-medium" style={{  }}>{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
