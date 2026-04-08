import { useEffect, useRef, useState } from "react";

export default function ScrollRevealSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const text = [
  "One", "platform.", "Total", "control.", "Zero", "chaos.",
  "EMPAYRO", "brings", "attendance,", "payroll,", "and", "people",
  "management", "into", "perfect", "sync."
];

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress =
        (windowHeight - rect.top) / (windowHeight + rect.height);

      progress = Math.min(Math.max(progress, 0), 1);

      // 🔥 IMPORTANT: Speed up animation (finish early)
      const acceleratedProgress = progress * 1.8; // adjust 1.5 → 2.5

      setScrollProgress(Math.min(acceleratedProgress, 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-40">
      <div
        ref={containerRef}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-black ">
          
          {text.map((word, i) => {
            const total = text.length;
            const start = i / total;
            const end = (i + 1) / total;

            const opacity =
              scrollProgress <= start
                ? 0
                : scrollProgress >= end
                ? 1
                : (scrollProgress - start) / (end - start);

            const translateY = 20 * (1 - opacity);



            return (
              <span
                key={i}
                className="inline-block mr-2 transition-all duration-200 text-primary "
                style={{
                  opacity,
                  transform: `translateY(${translateY}px)`,
                }}
              >
                {word}
              </span>
            );
          })}

        </p>
      </div>
    </section>
  );
}