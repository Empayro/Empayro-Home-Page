import { useEffect, useRef, useState } from "react";

export default function ScrollRevealSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const text = [
    "One", "platform.", "Total", "control.", "Zero", "chaos.",
    "EMPAYRO", "brings", "attendance,", "payroll", "and", "people",
    "management", "into", "perfect", "sync."
  ];

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress =
        (windowHeight - rect.top) / (windowHeight + rect.height);

      progress = Math.min(Math.max(progress, 0), 1);

      const acceleratedProgress = progress * 1.8;

      setScrollProgress(Math.min(acceleratedProgress, 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pb-24 sm:pb-32 md:pb-40 dark:bg-black">
      <div
        ref={containerRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center"
      >
        <p className="
          font-bold text-black
          text-xl sm:text-2xl md:text-4xl lg:text-5xl
          leading-snug sm:leading-relaxed
        ">
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

            // 👇 smaller movement on mobile, bigger on desktop
            const baseTranslate = window.innerWidth < 640 ? 10 : 20;
            const translateY = baseTranslate * (1 - opacity);

            return (
              <span
                key={i}
                className="
                  inline-block mr-2 mb-2
                  transition-all duration-300 ease-out
                  text-primary dark:text-secondary
                "
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