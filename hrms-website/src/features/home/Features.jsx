import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    id: 1,
    title: "PODCASTS\nAND IP'S",
    borderColor: "#2D7A3A",
    btnColor: "#2D7A3A",
    rotate: "-4deg",
    content:
      "Long-form conversations with India's most interesting builders, thinkers, and makers.",
  },
  {
    id: 2,
    title: "WTF\nCOMMUNITY",
    borderColor: "#B03A2E",
    btnColor: "#B03A2E",
    rotate: "-1deg",
    content:
      "A curated network of founders, operators, and creatives who actually know each other.",
  },
  {
    id: 3,
    title: "WTF\nOFFLINE",
    borderColor: "#1A3A6B",
    btnColor: "#1A3A6B",
    rotate: "1deg",
    content:
      "Real-world events, dinners, and salons where the most important conversations happen.",
  },
  {
    id: 4,
    title: "WTF\nFUND",
    borderColor: "#B8860B",
    btnColor: "#B8860B",
    rotate: "3deg",
    content:
      "Early capital and community support for the next generation of Indian builders.",
  },
];

const SCROLL_PER_CARD = 350;
const TOTAL_SCROLL = SCROLL_PER_CARD * CARDS.length;

function WTFLogo({ size = 28 }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        fontFamily: "Georgia,'Times New Roman',serif",
        fontWeight: 900,
        fontSize: size,
        letterSpacing: 1,
        lineHeight: 1,
      }}
    >
      <span style={{ color: "#2D7A3A" }}>W</span>
      <span style={{ color: "#B03A2E" }}>T</span>
      <span style={{ color: "#1A3A6B" }}>F</span>
      <span
        style={{
          color: "#B8860B",
          fontSize: size * 0.42,
          verticalAlign: "super",
          marginLeft: 1,
        }}
      >
        ✦
      </span>
    </span>
  );
}

function PaperCard({ card, progress }) {
  // progress: 0 = hidden below, 1 = fully in position
  // clamp 0–1
  const p = Math.max(0, Math.min(1, progress));
  // Easing: ease out cubic
  const eased = 1 - Math.pow(1 - p, 3);

  const translateY = (1 - eased) * 120; // slides up from 120px below
  const opacity = eased;

  return (
    <div
      style={{
        flex: "1 1 0",
        minWidth: 0,
        maxWidth: 240,
        transform: `translateY(${translateY}px) rotate(${card.rotate})`,
        opacity,
        transition: "none", // driven by scroll, not CSS transition
        willChange: "transform, opacity",
      }}
    >
      {/* Paper body */}
      <div
        style={{
          width: "100%",
          borderRadius: 11,
          border: `3px solid ${card.borderColor}`,
          background:
            "linear-gradient(140deg,#ece5d4 0%,#e2d9c6 45%,#d8cfbd 100%)",
          boxShadow: `0 ${8 + eased * 16}px ${20 + eased * 24}px rgba(0,0,0,${0.3 + eased * 0.35})`,
          display: "flex",
          flexDirection: "column",
          padding: "18px 20px 20px",
          position: "relative",
          overflow: "hidden",
          minHeight: 360,
        }}
      >
        {/* grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 9,
            pointerEvents: "none",
            opacity: 0.55,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Mini logo */}
        <div style={{ marginBottom: 6 }}>
          <WTFLogo size={15} />
        </div>

        {/* Title */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 0 10px",
          }}
        >
          <h3
            style={{
              fontFamily: "Georgia,'Times New Roman',serif",
              fontSize: 31,
              fontWeight: 900,
              color: "#111",
              textAlign: "center",
              lineHeight: 1.18,
              margin: 0,
              whiteSpace: "pre-line",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {card.title}
          </h3>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "Georgia,serif",
            fontSize: 11.5,
            color: "#5a5040",
            textAlign: "center",
            lineHeight: 1.55,
            margin: "0 0 14px",
            padding: "0 2px",
          }}
        >
          {card.content}
        </p>

        {/* Button */}
        <div
          style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}
        >
          <button
            style={{
              background: card.btnColor,
              color: "#fff",
              border: "none",
              borderRadius: 999,
              padding: "9px 26px",
              fontFamily: "Georgia,serif",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(0,0,0,0.35)",
            }}
          >
            Learn More
          </button>
        </div>

        {/* Brand mark */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 14,
            fontFamily: "Georgia,serif",
            fontWeight: 900,
            fontSize: 10,
            color: "#aaa",
            letterSpacing: 2,
          }}
        >
          ᗑᗑᗑ
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const zoneRef = useRef(null);
  // Per-card progress 0–1
  const [progresses, setProgresses] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const onScroll = () => {
      const zone = zoneRef.current;
      if (!zone) return;
      const scrolledPast = window.scrollY - zone.offsetTop;

      const newProgresses = CARDS.map((_, i) => {
        // Each card starts revealing after (i * SCROLL_PER_CARD) scroll
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
    <div
      style={{
        background: "#1c1a18",
        fontFamily: "Georgia,serif",
        minHeight: "100vh",
      }}
    >
      {/* ── Hero ── */}

      {/* ── Sticky scroll zone ── */}
      <div
        ref={zoneRef}
        style={{
          position: "relative",
          // 100vh for the visible panel + extra scroll room for 4 cards
          height: `calc(100vh + ${TOTAL_SCROLL}px)`,
        }}
      >
        {/* Sticky panel */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <section style={{ textAlign: "center", padding: "90px 24px 80px" }}>
            <WTFLogo size={58} />
            <p
              style={{
                color: "#c8c0b0",
                fontSize: 20,
                lineHeight: 1.72,
                maxWidth: 640,
                margin: "36px auto 0",
              }}
            >
              What if the most important conversations in India weren't being
              recorded? What if the next generation of builders needed momentum
              more than motivation? What if community was actually about knowing
              each other?
            </p>
          </section>

          {/* Cards row — side by side, no overlap */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center", // vertically center in remaining space
              justifyContent: "center",
              gap: 20,
              padding: "0 32px",
              overflow: "hidden",
            }}
          >
            {CARDS.map((card, i) => (
              <PaperCard key={card.id} card={card} progress={progresses[i]} />
            ))}
          </div>

          {/* Scroll cue */}
          {!allRevealed && (
            <p
              style={{
                textAlign: "center",
                color: "rgba(255,255,255,0.22)",
                fontSize: 12,
                fontStyle: "italic",
                letterSpacing: 1,
                padding: "0 0 24px",
                margin: 0,
                animation: "nudge 1.6s ease-in-out infinite",
              }}
            >
              {anyRevealed
                ? `${progresses.filter((p) => p >= 1).length} of 4 revealed — keep scrolling ↓`
                : "scroll to reveal ↓"}
            </p>
          )}
        </div>
      </div>

      {/* ── Page continues after all cards ── */}

      {/* Extra content */}

      <style>{`
        @keyframes nudge {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }
      `}</style>
    </div>
  );
}
