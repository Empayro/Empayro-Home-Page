import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Default Slides Data
───────────────────────────────────────────── */
const DEFAULT_SLIDES = [
  {
    id: 1,
    title: "The Opening Hand",
    description:
      "Every journey starts with a deal. This is your first card — the one that sets the tone for everything that follows. Hold it carefully.",
    color: "#1a1a2e",
    accent: "#e94560",
  },
  {
    id: 2,
    title: "The Wild Card",
    description:
      "Surprises arrive mid-game. This card changes the rules. Embrace the unexpected and adapt your strategy on the fly.",
    color: "#16213e",
    accent: "#0f3460",
  },
  {
    id: 3,
    title: "The High Stake",
    description:
      "Fortune favors the bold. This is the card that separates the players from the gamblers. Are you ready to go all in?",
    color: "#0f3460",
    accent: "#e94560",
  },
  {
    id: 4,
    title: "The Final Reveal",
    description:
      "The last card lands and the table goes quiet. Every decision led to this moment. Lay it down — the hand is yours to own.",
    color: "#533483",
    accent: "#e8d5b7",
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

  return (
    <span className="text-[13px] opacity-25 font-serif">
      {suits[index % 4]}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Card Component
───────────────────────────────────────────── */
function Card({ slide, index, style }) {
  return (
    <div
      className="absolute w-[500px] h-[400px] rounded-[20px] overflow-hidden"
      style={{
        background: slide.color,
        boxShadow:
          "0 32px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.35)",
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
      <div className="absolute top-[22px] right-[24px] flex flex-col items-center gap-[1px] rotate-180">
        <span className="text-[18px] font-bold text-white/50 font-serif">
          {String(index + 1).padStart(2, "0")}
        </span>
        <CardSuit index={index} />
      </div>

      {/* Accent Line Top */}
      <div
        className="absolute top-0 left-[40px] right-[40px] h-[2px] opacity-70"
        style={{ background: slide.accent }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-[44px]">
        {/* Watermark Suit */}
        <div className="absolute right-[32px] top-1/2 -translate-y-1/2 text-[120px] text-white/[0.04] font-serif select-none">
          {["♠", "♥", "♦", "♣"][index % 4]}
        </div>

        <h2 className="text-[28px] font-bold text-white mb-4 font-serif">
          {slide.title}
        </h2>

        <div
          className="w-[36px] h-[2px] mb-[18px]"
          style={{ background: slide.accent }}
        />

        <p className="text-[14px] leading-[1.8] text-white/60 max-w-[340px] font-serif">
          {slide.description}
        </p>
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
export default function StackedScrollSection({
  slides = DEFAULT_SLIDES,
}) {
  const sectionRef = useRef(null);

  /* Card Animation State */
  const [cardStyles, setCardStyles] = useState(
    slides.map(() => ({
      translateX: "100%",
      rotate: "2deg",
      opacity: 0,
      top: 0,
    }))
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
        Math.min(1, sectionTop / scrollableHeight)
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
      {/* ───────── HERO SECTION ───────── */}
      <section className="w-full min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center gap-5 relative overflow-hidden">
        <h1 className="text-white text-[clamp(42px,7vw,88px)] text-center font-serif">
          The Deal <br />
          <span className="text-[#e94560]">Is On</span>
        </h1>
      </section>

      {/* ───────── STACKED SCROLL SECTION ───────── */}
      <section
        ref={sectionRef}
        className="w-full relative bg-[#0d0d0d]"
        style={{ height: `${sectionHeight}vh` }}
      >
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Card Stack */}
          <div className="relative w-[500px] h-[400px]">
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

      {/* ───────── FOOTER ───────── */}
      <section className="w-full min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <h2 className="text-white text-4xl font-serif">
          The cards have spoken.
        </h2>
      </section>
    </>
  );
}