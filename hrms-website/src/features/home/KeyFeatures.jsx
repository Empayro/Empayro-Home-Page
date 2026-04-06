import { useEffect, useRef, useState } from "react";
import { Service1, Service2, Service3, Service4 } from "@/assets";

/* ─────────────────────────────────────────────
   Default Slides Data
───────────────────────────────────────────── */
const DEFAULT_SLIDES = [
  {
    id: 1,
    img: Service1,
    title: "Smart hiring starts with Super ATS",
    description:
      "Super ATS simply automates job posting, resume screening & candidate tracking. It helps cut down hiring time & helps you pick the right match faster.",
    cta: "Explore ATS",
    color: "#0F172A",
    accent: "#0078D4",
  },
  {
    id: 2,
    img: Service2,
    title: "Smarter HR management starts here",
    description:
      "Super HRMS takes the manual work out of daily HR work by automating daily tasks and key calculations. It speeds up processing and gives you more control over your entire workforce.",
    cta: "View HRMS",
    color: "#111827",
    accent: "#5CB400",
  },
  {
    id: 3,
    img: Service3,
    title: "No-stress payroll for growing teams",
    description:
      "Super Payroll automates each & every step of the payroll processing—from salary calculations to compliance checks. No spreadsheets, no delays, no errors & no stress.",
    cta: "Run Payroll",
    color: "#0F172A",
    accent: "#F47B20",
  },
  {
    id: 4,
    img: Service4,
    title: "Maximize your assets, minimize the",
    description:
      "Stop manually tracking & hoping for optimal asset utilization. Automate monitoring & allocation of your resources, ensuring they are deployed efficiently and effectively.",
    cta: "Manage Assets",
    color: "#111827",
    accent: "#8A6A00",
  },
];

/* ─────────────────────────────────────────────
   Helpers (UNCHANGED LOGIC)
───────────────────────────────────────────── */
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const lerp = (a, b, t) => a + (b - a) * t;

/* ─────────────────────────────────────────────
   Card Suit Component
───────────────────────────────────────────── */
function CardSuit({ index }) {
  const suits = ["♠", "♥", "♦", "♣"];
}

/* ─────────────────────────────────────────────
   Floating Cards Components
───────────────────────────────────────────── */

import { motion } from "framer-motion";

const labels = [
  { text: "Payroll", bg: "#FEF2F2", color: "#DC2626" }, // red
  { text: "Attendance", bg: "#EFF6FF", color: "#2563EB" }, // blue
  { text: "Attendance", bg: "#EFF6FF", color: "#2563EB" }, // blue
  { text: "Reports", bg: "#F5F3FF", color: "#7C3AED" }, // violet
  { text: "Leave", bg: "#ECFDF5", color: "#059669" }, // green
  { text: "Analytics", bg: "#FFF7ED", color: "#EA580C" }, // orange
  { text: "Compliance", bg: "#F1F5F9", color: "#334155" }, // gray
  { text: "Compliance", bg: "#F1F5F9", color: "#334155" }, // gray
];

const FloatingCards = () => {
  // Store positions ONCE
  const positionsRef = useRef(
    labels.map((_, i) => {
      const isLeft = i % 2 === 0;

      return {
        x: isLeft
          ? Math.random() * 20 // LEFT side (0% → 20%)
          : 80 + Math.random() * 20, // RIGHT side (80% → 100%)
        y: Math.random() * 80 + 10, // vertical spread (10% → 90%)
      };
    }),
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {labels.map((label, i) => {
        const pos = positionsRef.current[i];

        return (
          <motion.div
            key={i}
            className="absolute px-4 py-2 rounded-xl text-sm font-medium pointer-events-auto border"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%)",
              background: label.bg,
              color: label.color,
              borderColor: `${label.color}22`,
              boxShadow: `0 10px 25px ${label.color}22`,
            }}
            animate={{
              x: [0, 6, -6, 0],
              y: [0, -6, 6, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3 + i * 0.5, // faster
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
          >
            {label.text}
          </motion.div>
        );
      })}
    </div>
  );
};

/* ─────────────────────────────────────────────
   Card Component
───────────────────────────────────────────── */
function Card({ slide, index, style }) {
  return (
    <div
      className="absolute w-[700px] h-[700px] rounded-[20px] overflow-hidden"
      style={{
        background: slide.color,
        boxShadow: "0 12px 40px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1)",
        ...style,
      }}
    >
      {/* Inner Border */}
      <div className="absolute inset-[10px] rounded-[12px] border border-white/10 pointer-events-none" />

      {/* Texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Left Index */}
      <div className="absolute top-[22px] left-[24px] flex flex-col items-center gap-[1px]">
        <span className="text-[18px] font-bold text-white/50 font-serif">
          {String(index + 1).padStart(2, "0")}
        </span>
        <CardSuit index={index} />
      </div>

      {/* Top Right (Mirrored) */}
      {/* <div className="absolute top-[22px] right-[24px] flex flex-col items-center gap-[1px] rotate-180">
        <span className="text-[18px] font-bold text-white/50 font-serif">
          {String(index + 1).padStart(2, "0")}
        </span>
        <CardSuit index={index} />
      </div> */}

      {/* Accent Line Top */}
      <div
        className="absolute top-0 left-[40px] right-[40px] h-[2px] opacity-70"
        style={{ background: slide.accent }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center p-[44px]">
        {/* Watermark Suit */}
        <div className="absolute right-[32px] top-1/2 -translate-y-1/2 text-[120px] text-white/[0.04] font-serif select-none">
          {["♠", "♥", "♦", "♣"][index % 4]}
        </div>

        <img
          src={slide.img}
          alt="slide"
          className="w-full h-100 object-cover rounded-2xl"
        />

        <h2 className="text-[28px] font-bold text-white mb-4 mt-4 font-serif">
          {slide.title}
        </h2>

        <div
          className="w-[36px] h-[2px] mb-[18px]"
          style={{ background: slide.accent }}
        />

        <p className="text-[14px] leading-[1.8] text-white/60 max-w-full font-serif">
          {slide.description}
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <button
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              background: slide.accent,
              color: "#fff",
              boxShadow: `0 10px 25px ${slide.accent}55`,
            }}
          >
            {slide.cta}
          </button>
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className="absolute bottom-0 left-[40px] right-[40px] h-[2px] opacity-70"
        style={{ background: slide.accent }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function KeyFeatures({ slides = DEFAULT_SLIDES }) {
  const sectionRef = useRef(null);

  /* Card Animation State */
  const [cardStyles, setCardStyles] = useState(
    slides.map(() => ({
      translateX: "100%",
      rotate: "2deg",
      opacity: 0,
      top: 0,
    })),
  );

  /* ─────────────────────────────────────────
     Scroll Logic (UNCHANGED)
  ───────────────────────────────────────── */
  useEffect(() => {
    const STACK_OFFSET = 5;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      const scrollableHeight = rect.height - window.innerHeight;

      const rawProgress = Math.max(
        0,
        Math.min(1, sectionTop / scrollableHeight),
      );

      const n = slides.length;

      const newStyles = slides.map((_, i) => {
        const start = i / n;
        const end = (i + 1) / n;

        let progress = (rawProgress - start) / (end - start);
        progress = Math.max(0, Math.min(1, progress));

        const eased = easeOut(progress);

        if (progress <= 0) {
          return {
            translateX: "100%",
            rotate: "3deg",
            opacity: 0,
            top: i * STACK_OFFSET,
            zIndex: i + 1,
          };
        }

        return {
          translateX: `${lerp(100, 0, eased)}%`,
          rotate: `${lerp(3, 0, eased)}deg`,
          opacity: lerp(0, 1, Math.min(1, eased * 2)),
          top: i * STACK_OFFSET,
          zIndex: i + 1,
        };
      });

      setCardStyles(newStyles);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slides]);

  const sectionHeight = slides.length * 100;

  return (
    <>
      {/* ───────── STACKED SCROLL SECTION ───────── */}
      <section
        ref={sectionRef}
        className="w-full relative bg-gradient-to-b from-[#f5f9ff] to-[#e6f2ff] p-20"
        style={{ height: `${sectionHeight}vh` }}
      >
        <div className="text-center">
          <span className="bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium">
            ● Features
          </span>

          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mt-6">
            Simplify HR. Amplify{" "}
            <span className="text-secondary">Productivity.</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-full mx-auto">
            From salary disbursement to employee insights - EMPAYRO handles it
            all effortlessly.
          </p>
        </div>

        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <FloatingCards />

          {/* Card Stack */}
          <div className="relative w-[700px] h-[700px]">
            {slides.map((slide, i) => {
              const s = cardStyles[i];

              return (
                <Card
                  key={slide.id}
                  slide={slide}
                  index={i}
                  style={{
                    top: s.top,
                    zIndex: s.zIndex,
                    opacity: s.opacity,
                    transform: `translateX(${s.translateX}) rotate(${s.rotate})`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
