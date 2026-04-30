import { useEffect, useRef, useState } from "react";

import { useInView } from "../../hooks/useInView";

const CARDS = [
  {
    id: 1,
    title: "Smart Attendance",
    borderColor: "#0078D4",
    btnColor: "#0078D4",
    bgColor: "#DEEEFA",
    rotate: "-4deg",
    content:
      "Biometric and location-verified attendance clock-in built for remote and field teams",
  },
  {
    id: 2,
    title: "Effortless Payroll",
    borderColor: "#5CB400",
    btnColor: "#5CB400",
    bgColor: "#E5F3D3",
    rotate: "4deg",
    content: "Run accurate payroll for your entire organization in minutes",
  },
  {
    id: 3,
    title: "Self-Service",
    borderColor: "#F47B20",
    btnColor: "#F47B20",
    bgColor: "#FDE8D4",
    rotate: "-4deg",
    content:
      "Leave applications, payslip downloads, profile updates & many more..",
  },
  {
    id: 4,
    title: "Analytics",
    borderColor: "#8A6A00",
    btnColor: "#8A6A00",
    bgColor: "#FDF3C0",
    rotate: "4deg",
    // content: "Age, tenure, gender, department — real-time people intelligence",
    content: "Advanced HR Reports, Interactive Dashboard, Employee Demographics",
  },
];

const SCROLL_PER_CARD = 350;
const TOTAL_SCROLL = SCROLL_PER_CARD * CARDS.length;

const EXIT_PER_CARD = 200; // same as exit animation
const TOTAL_EXIT_SCROLL = EXIT_PER_CARD * CARDS.length;

const BUFFER = 200;

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const isTablet =
  typeof window !== "undefined" &&
  window.innerWidth >= 768 &&
  window.innerWidth < 1024;

function PaperCard({ card, progress, exitProgress, index }) {
  const p = Math.max(0, Math.min(1, progress));
  const eased = 1 - Math.pow(1 - p, 3);

  const exit = Math.max(0, Math.min(1, exitProgress));

  // ENTRY (bottom → center)
  const entryY = (1 - eased) * 120;

  // EXIT (center → top)
  //   const exitY = exit * -200; // move upward

  const exitY = -200 * (1 - Math.pow(1 - exit, 3));

  const translateY = isMobile
    ? (1 - eased) * 80
    : exit > 0
      ? exitY
      : (1 - eased) * 120;

  return (
    <div
      className={`
    absolute md:relative min-w-[220px] max-w-[240px]
    w-[85%] sm:w-[70%] md:w-auto
    transition-all duration-700 ease-out
  `}
      style={{
        marginTop: isMobile
          ? `-${progress * 120}px`
          : isTablet
            ? `-${progress * 80}px`
            : "0px",

        transform: isMobile
          ? `translateY(${translateY}px) scale(${1 - (1 - eased) * 0.1})`
          : isTablet
            ? `
      translateY(${translateY}px)
      translateX(${index % 2 === 0 ? "-40px" : "40px"})
      scale(${1 - (1 - eased) * 0.05})
    `
            : `translateY(${translateY}px) rotate(${card.rotate})`,

        opacity: isMobile ? (progress > 0 ? 1 : 0) : eased * (1 - exit * 0.5),

        zIndex: isMobile
          ? 100 + index
          : isTablet
            ? 100 + Math.floor(index / 2)
            : "auto",
      }}
    >
      <div
        className="w-full rounded-[11px] flex flex-col items-center justify-center 
             p-4 sm:p-[18px_20px_20px] 
             relative overflow-hidden 
             min-h-[260px] sm:min-h-[320px] md:min-h-[360px] 
             shadow-xl"
        style={{
          rotate: `${card.rotate}`,
          border: `3px solid ${card.borderColor}`,
          background: `${card.bgColor}`,
        }}
      >
        {/* grain */}
        <div className="absolute inset-0 pointer-events-none opacity-50" />

        <div className="flex items-center justify-center py-4">
          <h3 className="text-center uppercase font-bold leading-tight tracking-wide text-[18px] sm:text-[20px] md:text-[24px]">
            {card.title}
          </h3>
        </div>

        <p className="text-center text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-[#5a5040] mb-3 px-1">
          {card.content}
        </p>

        <div className="absolute bottom-3 right-3 text-[10px] tracking-[2px] text-gray-400 font-black">
          ᗑᗑᗑ
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const zoneRef = useRef(null);
  const [progresses, setProgresses] = useState([0, 0, 0, 0]);
  //   const [extraOffset, setExtraOffset] = useState(0);
  const [exitProgresses, setExitProgresses] = useState([0, 0, 0, 0]);

  const [fadeRef, fadeVisible] = useInView();

  useEffect(() => {
    const onScroll = () => {
      const zone = zoneRef.current;
      if (!zone) return;
      //   const scrolledPast = window.scrollY - zone.offsetTop;
      const rect = zone.getBoundingClientRect();
      const scrolledPast = -rect.top;

      const newProgresses = CARDS.map((_, i) => {
        const start = i * SCROLL_PER_CARD;
        const end = start + SCROLL_PER_CARD;
        const raw = (scrolledPast - start) / (end - start);
        return Math.max(0, Math.min(1, raw));
      });

      // NEW: exit progress per card
      const exitProgresses = CARDS.map((_, i) => {
        const start = TOTAL_SCROLL + i * 200; // stagger exit
        const end = start + 200;

        const raw = (scrolledPast - start) / (end - start);
        return Math.max(0, Math.min(1, raw));
      });

      setProgresses(newProgresses);
      setExitProgresses(exitProgresses);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const allRevealed = progresses.every((p) => p >= 1);
  // const allRevealed = progresses.every((p) => p >= 0.7);
  // const anyRevealed = progresses.some((p) => p > 0);

  const REVEAL_THRESHOLD = 0.15;

  const revealedCount = progresses.filter(
    (p, i) => p >= REVEAL_THRESHOLD && exitProgresses[i] < 1,
  ).length;

  const anyRevealed = revealedCount > 0;
  const allRevealed = progresses.every((p) => p >= REVEAL_THRESHOLD);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 dark:bg-black">
      <div
        ref={zoneRef}
        className="relative"
        style={{
          // height: `calc(100vh + ${TOTAL_SCROLL}px)`
          height: `${TOTAL_SCROLL + TOTAL_EXIT_SCROLL + BUFFER}px`,
        }}
      >
        <div
          ref={fadeRef}
          className={`fade-up ${
            fadeVisible
              ? "show sticky top-0 h-screen w-full flex flex-col overflow-hidden"
              : ""
          }`}
        >
          <div className="text-center px-2 sm:px-4 md:p-10">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Everything for HR <br />
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                In one platform.
              </span>
            </h1>
            <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              From the day employee joins to the day they exit - every HR <br />{" "}
              touchpoint, covered. No more juggling 4 different tools.
            </p>
          </div>

          <div className=" flex-1 flex md:flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 md:px-8 overflow-x-auto md:overflow-hidden pt-6 md:pt-10">
            {CARDS.map((card, i) => (
              <PaperCard
                key={card.id}
                card={card}
                index={i}
                progress={progresses[i]}
                exitProgress={exitProgresses[i]}
              />
            ))}
          </div>

          {!allRevealed && (
            <p className="text-center text-black dark:text-gray-400 text-xs italic tracking-wide pb-6 animate-bounce">
              {anyRevealed
                ? `${revealedCount} of 4 revealed — keep scrolling ↓`
                : "scroll to reveal ↓"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
