import { useState, useEffect, useRef } from "react";
import { HiXMark, HiArrowRight, HiCheckCircle } from "react-icons/hi2";
import {
  MdOutlinePayments,
  MdOutlineAccessTime,
  MdOutlineVerifiedUser,
  MdOutlineMore,
} from "react-icons/md";
import { TbChartBar } from "react-icons/tb";
import { logo, Favicon } from "@/assets";
import { CiCircleMore, CiSquareMore } from "react-icons/ci";

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const OrbitCore = () => (
  <div className="relative w-[110px] h-[110px] mx-auto mb-5 flex items-center justify-center">
    {/* Outer ring – slow reverse spin */}
    <div
      className="absolute inset-0 rounded-full border border-blue-500/10"
      style={{ animation: "empSpin 14s linear infinite reverse" }}
    />

    {/* Middle ring – faster forward spin + dots */}
    <div
      className="absolute w-[76px] h-[76px] rounded-full border border-blue-500/25"
      style={{ animation: "empSpin 8s linear infinite" }}
    >
      <span
        className="absolute -top-[3.5px] left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-blue-400"
        style={{ boxShadow: "0 0 8px rgba(0,120,212,0.8)" }}
      />
      <span className="absolute -bottom-[2.5px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-blue-300 opacity-60" />
    </div>

    {/* Core */}
    <div className="relative z-10 w-11 h-11 rounded-[13px] flex items-center justify-center ">
      <img
        src={Favicon} // 👉 your brand icon
        alt="Brand Icon"
        className="w-10 h-10 object-contain"
      />
    </div>
  </div>
);

const Feature = ({ icon: Icon, label, first }) => (
  <div
    className={`flex flex-col items-center gap-1 flex-1 px-2 ${
      !first ? "border-l border-blue-500/10" : ""
    }`}
  >
    <div className="w-12 h-12 rounded-[8px] bg-primary/10 flex items-center justify-center">
      <Icon className="text-primary text-[20px]" />
    </div>
    <span className="text-[11px] font-semibold text-primary uppercase tracking-wide text-center ">
      {label}
    </span>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main popup
// ─────────────────────────────────────────────────────────────────────────────

export default function Popup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  useEffect(() => {
  const alreadyShown = localStorage.getItem("popupShown");

  if (alreadyShown === "true") return;

  const timer = setTimeout(() => {
    setVisible(true);
    localStorage.setItem("popupShown", "true");
  }, 1500);

  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fn = (e) => {
      if (!cardRef.current) return;
      const r = cardRef.current.getBoundingClientRect();
      setGlow({
        x: (((e.clientX - r.left) / r.width) * 100).toFixed(1),
        y: (((e.clientY - r.top) / r.height) * 100).toFixed(1),
      });
    };

    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  useEffect(() => {
  const alreadyShown = localStorage.getItem("popupShown");
  if (alreadyShown === "true") return;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const scrolled = (scrollTop + windowHeight) / fullHeight;

    if (scrolled >= 0.9) {
      setVisible(true);
      localStorage.setItem("popupShown", "true");
      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 420);
  };

  const handleSubmit = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      setTimeout(() => setError(false), 1800);
      return;
    }
    setSubmitted(true);
  };

  if (!visible) return null;

  return (
    <>
      {/* ── Global keyframes + custom fonts ─────────────────────────────── */}
      <style>{`

        @keyframes empSpin { 
  to { transform: rotate(360deg); } 
}
        @keyframes empOverlayIn   { from { opacity:0; } to { opacity:1; } }
        @keyframes empOverlayOut  { from { opacity:1; } to { opacity:0; } }
        @keyframes empCardIn      { from { opacity:0; transform:translateY(34px) scale(.95); } to { opacity:1; transform:translateY(0) scale(1); } }
        @keyframes empCardOut     { from { opacity:1; transform:translateY(0) scale(1); }     to { opacity:0; transform:translateY(18px) scale(.97); } }
        @keyframes empPulseDot    { 0%,100%{ opacity:1; transform:scale(1); } 50%{ opacity:.4; transform:scale(.65); } }
        @keyframes empSuccessPop  { from { transform:scale(.45); opacity:0; } to { transform:scale(1); opacity:1; } }
        @keyframes empSlideUp     { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }

        .emp-overlay-in   { animation: empOverlayIn  .45s ease forwards; }
        .emp-overlay-out  { animation: empOverlayOut .4s  ease forwards; }
        .emp-card-in      { animation: empCardIn      .55s cubic-bezier(.16,1,.3,1) forwards; }
        .emp-card-out     { animation: empCardOut     .42s cubic-bezier(.7,0,1,.4)  forwards; }
        .emp-success-in   { animation: empSlideUp     .45s ease forwards; }
        .emp-success-ring { animation: empSuccessPop  .5s  cubic-bezier(.16,1,.3,1) forwards; }
        .emp-dot-pulse    { animation: empPulseDot    2s   ease-in-out infinite; }


        .emp-input-focus:focus {
            border-color: rgba(0,120,212,0.8) !important;
            background: rgba(0,120,212,0.08) !important;
            box-shadow: 0 0 0 3px rgba(0,120,212,0.2);
        }
        .emp-btn-hover:active { transform: translateY(0); }
      `}</style>

      {/* ── Backdrop ─────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center p-5
          bg-[#04050f]/80 backdrop-blur-[10px]
          ${closing ? "emp-overlay-out" : "emp-overlay-in"}`}
        onClick={(e) => e.target === e.currentTarget && handleClose()}
      >
        {/* ── Card ─────────────────────────────────────────────────────── */}
        <div
          ref={cardRef}
          className={`relative w-full max-w-[500px] rounded-[24px] overflow-hidden
            bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff] border border-blue-500/20
            ${closing ? "emp-card-out" : "emp-card-in"}`}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,120,212,0.042) 1px,transparent 1px)," +
                "linear-gradient(90deg,rgba(0,120,212,0.042) 1px,transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Top-left corner glow */}
          <div
            className="absolute top-0 left-0 w-40 h-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 0% 0%, rgba(0,120,212,0.18) 0%, transparent 70%)",
            }}
          />

          {/* Bottom-right corner glow */}
          <div
            className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 100% 100%, rgba(0,164,239,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Mouse-follow radial glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-[24px]"
            style={{
              background: `radial-gradient(320px circle at ${glow.x}% ${glow.y}%, rgba(0,120,212,0.08), transparent 65%)`,
            }}
          />

          {/* ── Top bar ────────────────────────────────────────────────── */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-5">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              {/* <img
                src={logo} // 👉 replace with your logo path
                alt="EMPAYRO Logo"
                className="h-8 w-auto object-contain"
              /> */}
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="w-8 h-8 rounded-full flex items-center justify-center
                bg-blue-500/15 border-blue-500/35
                transition-all duration-200 cursor-pointer"
            >
              <HiXMark className="text-[15px]" />
            </button>
          </div>

          {/* ── Content ────────────────────────────────────────────────── */}
          {!submitted ? (
            <>
              {/* Hero section */}
              <div className="relative z-10 px-8 pt-7 text-center">
                <OrbitCore />

                {/* "Coming Soon" badge */}
                <div className="inline-flex items-center gap-2 mb-[14px] px-4 py-[5px] rounded-full bg-primary/10 border border-primary">
                  <span className="emp-dot-pulse w-[6px] h-[6px] rounded-full bg-blue-500 flex-shrink-0" />
                  <span className=" text-[10.5px] font-semibold text-primary tracking-[1.6px] uppercase">
                    Coming Soon
                  </span>
                </div>

                <h1 className="emp-display text-[30px] leading-[1.18] text-[#000] mb-3 tracking-[-0.4px]">
                  HR that works
                  <br />
                  as smart as{" "}
                  <em className="text-blue-400" style={{ fontStyle: "italic" }}>
                    you do
                  </em>
                </h1>

                <p className=" text-[13.5px] leading-[1.65] text-black/50 max-w-[320px] mx-auto">
                  EMPAYRO redefines workforce management - intelligent, unified,
                  and built for the way modern teams actually operate.
                </p>
              </div>

              {/* Divider */}
              <div
                className="relative z-10 mx-8 mt-5 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,120,212,0.3), transparent)",
                }}
              />

              {/* Feature chips */}
              <div className="relative z-10 flex justify-center items-start px-6 py-4">
                <Feature icon={MdOutlinePayments} label="Payroll" first />
                <Feature icon={TbChartBar} label="Analytics" />
                <Feature icon={MdOutlineAccessTime} label="Attendance" />
                <Feature icon={MdOutlineVerifiedUser} label="Compliance" />
                <Feature icon={MdOutlineMore} label="Many More" />
              </div>

              {/* Form area */}
              <div className="relative z-10 px-7 pb-7">
                {/* Email input */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder={
                    error
                      ? "Please enter a valid email ✕"
                      : "Enter your work email"
                  }
                  className={` emp-input-focus w-full mb-3 px-[18px] py-[13px] rounded-[13px]
                    bg-white/[0.04] outline-none text-[13.5px] text-black tracking-[0.2px]
                    placeholder: transition-all duration-200
                    ${
                      error
                        ? "border border-red-500/50 placeholder:text-red-400/60"
                        : "border border-primary placeholder:text-primary"
                    }`}
                />

                {/* Submit button */}
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 w-full justify-center font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-[#78C3FF] to-primary flex items-center gap-2
                    transition-all duration-250 cursor-pointer"
                >
                  <span>Get Early Access</span>
                  <span className="w-[22px] h-[22px] rounded-full bg-white/20 flex items-center justify-center">
                    <HiArrowRight className="text-xs" />
                  </span>
                </button>

                {/* Fine print */}
                <p className=" text-center text-[11px] text-black mt-3 tracking-[0.15px]">
                  No spam. Unsubscribe anytime.{" "}
                  <span className="underline underline-offset-2 text-blue-400 cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </>
          ) : (
            /* ── Success ───────────────────────────────────────────────── */
            <div className="emp-success-in relative z-10 px-8 py-9 text-center">
              <div
                className="emp-success-ring w-[68px] h-[68px] mx-auto mb-5 rounded-full
                  bg-blue-500/10 border-2 border-blue-500/30
                  flex items-center justify-center"
              >
                <HiCheckCircle className="text-blue-400 text-3xl" />
              </div>

              <h2 className="emp-display text-[26px] text-[#F4F2FF] mb-2.5">
                You&rsquo;re{" "}
                <em className="text-blue-400" style={{ fontStyle: "italic" }}>
                  on the list!
                </em>
              </h2>

              <p className=" text-[13px] leading-[1.65] text-blue-100/55 max-w-[290px] mx-auto mb-6">
                We'll reach out before anyone else when EMPAYRO launches.
                Something exceptional is on its way — stay tuned.
              </p>

              <button
                onClick={handleClose}
                className=" inline-flex items-center gap-2 px-5 py-[9px]
                  rounded-full bg-blue-500/10 border border-blue-500/25
                  text-blue-300 text-[12.5px] font-semibold cursor-pointer
                  hover:bg-blue-500/20 hover:border-blue-500/40
                  transition-all duration-200"
              >
                Dismiss <HiXMark className="text-sm" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
