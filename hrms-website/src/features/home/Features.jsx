import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    id: 1,
    title: "Smart Attendance",
    borderColor: "#0078D4",
    btnColor: "#0078D4",
    bgColor: "#DEEEFA",
    rotate: "-4deg",
    content:
      "No more manual fixes. Auto-handled shifts, policies, and edge cases — always accurate.",
  },
  {
    id: 2,
    title: "Effortless Payroll",
    borderColor: "#5CB400",
    btnColor: "#5CB400",
    bgColor: "#E5F3D3",
    rotate: "4deg",
    content:
      "Run payroll without chaos. Accurate, compliant, and done in minutes — not days.",
  },
  {
    id: 3,
    title: "Unified System",
    borderColor: "#F47B20",
    btnColor: "#F47B20",
    bgColor: "#FDE8D4",
    rotate: "-4deg",
    content:
      "Everything in one place. Attendance, payroll, and people — fully connected, zero gaps.",
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

function PaperCard({ card, progress }) {
  const p = Math.max(0, Math.min(1, progress));
  const eased = 1 - Math.pow(1 - p, 3);

  const translateY = (1 - eased) * 120;

  return (
    <div
      className="flex-1 min-w-0 max-w-[240px] will-change-transform"
      style={{
        transform: `translateY(${translateY}px) rotate(${card.rotate})`,
        opacity: eased,
      }}
    >
      <div
        className="w-full rounded-[11px] flex flex-col items-center justify-center p-[18px_20px_20px] relative overflow-hidden min-h-[360px]"
        style={{
          border: `3px solid ${card.borderColor}`,
          background: `${card.bgColor}`,
        //   background: "linear-gradient(140deg,#ece5d4 0%,#e2d9c6 45%,#d8cfbd 100%)",
        //   boxShadow: `0 ${8 + eased * 16}px ${20 + eased * 24}px rgba(0,0,0,${0.3 + eased * 0.35})`,
        }}
      >
        {/* grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
        />

        <div className="flex items-center justify-center py-4">
          <h3 className="text-center uppercase font-black leading-tight tracking-wide text-[24px] whitespace-pre-line text-[#111]">
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

      setProgresses(newProgresses);
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
        style={{ height: `calc(100vh + ${TOTAL_SCROLL}px)` }}
      >
        <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
          <div className="text-center p-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              One Unified Platform For  <br />
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                All HR Operations
              </span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              We eliminate scattered processes, manual chaos, and disconnected systems — <br />
so your team spends less time managing work, and more time actually doing it.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center gap-5 px-8 overflow-hidden">
            {CARDS.map((card, i) => (
              <PaperCard key={card.id} card={card} progress={progresses[i]} />
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
