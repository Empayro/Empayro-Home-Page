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
      "No more manual fixes. Auto-handled shifts, policies, and edge cases - always accurate.",
  },
  {
    id: 2,
    title: "Effortless Payroll",
    borderColor: "#5CB400",
    btnColor: "#5CB400",
    bgColor: "#E5F3D3",
    rotate: "4deg",
    content:
      "Run payroll without chaos. Accurate, compliant, and done in minutes - not days.",
  },
  {
    id: 3,
    title: "Unified System",
    borderColor: "#F47B20",
    btnColor: "#F47B20",
    bgColor: "#FDE8D4",
    rotate: "-4deg",
    content:
      "Everything in one place. Attendance, payroll, and people - fully connected, zero gaps.",
  },
  {
    id: 4,
    title: "Built for Teams",
    borderColor: "#8A6A00",
    btnColor: "#8A6A00",
    bgColor: "#FDF3C0",
    rotate: "4deg",
    content:
      "Not just for HR. Designed for employees, managers, and founders alike.",
  },
];

const SCROLL_PER_CARD = 350;
const TOTAL_SCROLL = SCROLL_PER_CARD * CARDS.length;

const EXIT_PER_CARD = 200; // same as exit animation
const TOTAL_EXIT_SCROLL = EXIT_PER_CARD * CARDS.length;

const BUFFER = 200;

function PaperCard({ card, progress, exitProgress }) {
  const p = Math.max(0, Math.min(1, progress));
  const eased = 1 - Math.pow(1 - p, 3);

  const exit = Math.max(0, Math.min(1, exitProgress));

  // ENTRY (bottom → center)
  const entryY = (1 - eased) * 120;

  // EXIT (center → top)
//   const exitY = exit * -200; // move upward

  const exitY = -200 * (1 - Math.pow(1 - exit, 3));

  

  const translateY =
  exit > 0
    ? exitY
    : (1 - eased) * 120;

  return (
    <div
      className="flex-1 min-w-0 max-w-[240px] will-change-transform"
      style={{
        transform: `translateY(${translateY}px) rotate(${card.rotate})`,
        opacity: eased * (1 - exit * 0.5), // slight fade on exit
      }}
    >
      <div
        className="w-full rounded-[11px] flex flex-col items-center justify-center p-[18px_20px_20px] relative overflow-hidden min-h-[360px] shadow-xl "
        style={{
          border: `3px solid ${card.borderColor}`,
          background: `${card.bgColor}`,
        }}
      >
        {/* grain */}
        <div className="absolute inset-0 pointer-events-none opacity-50" />

        <div className="flex items-center justify-center py-4">
          <h3 className="text-center uppercase font-bold leading-tight tracking-wide text-[24px] whitespace-pre-line text-[#111]">
            {card.title}
          </h3>
        </div>

        <p className="text-center text-[14px] leading-relaxed text-[#5a5040] mb-3 px-1">
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
      const scrolledPast = window.scrollY - zone.offsetTop;

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

  const allRevealed = progresses.every((p) => p >= 1);
  const anyRevealed = progresses.some((p) => p > 0);

  return (
    <div className=" min-h-screen">
      <div
        ref={zoneRef}
        className="relative"
        style={{
          // height: `calc(100vh + ${TOTAL_SCROLL}px)`
          height: `calc(100vh + ${TOTAL_SCROLL + TOTAL_EXIT_SCROLL + BUFFER}px)`,
        }}
      >
        <div
          ref={fadeRef}
          className={`fade-up ${fadeVisible ? "show sticky top-0 h-screen w-full flex flex-col overflow-hidden" : ""}`}
        >
          <div className="text-center p-10">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              One Unified Platform For <br />
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                All HR Operations
              </span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              We eliminate scattered processes, manual chaos, and disconnected
              systems - <br />
              so your team spends less time managing work, and more time
              actually doing it.
            </p>
          </div>

          <div
            className="flex-1 flex items-start justify-center gap-5 px-8 overflow-hidden pt-10"
            // style={{
            //   transform: `translateY(-${extraOffset}px)`,
            // }}
          >
            {CARDS.map((card, i) => (
              <PaperCard
                key={card.id}
                card={card}
                progress={progresses[i]}
                exitProgress={exitProgresses[i]}
              />
            ))}
          </div>

          {!allRevealed && (
            <p className="text-center text-black text-xs italic tracking-wide pb-6 animate-bounce">
              {anyRevealed
                ? `${progresses.filter((p) => p >= 1).length} of 4 revealed — keep scrolling ↓`
                : "scroll to reveal ↓"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
