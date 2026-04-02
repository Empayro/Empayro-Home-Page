import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video } from "@/assets";

export default function VideoCompo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  /* ─────────────────────────────────────────
     Video Metadata Load
  ───────────────────────────────────────── */
  useEffect(() => {
    const video = videoRef.current;
    const handleLoaded = () => setDuration(video.duration);
    video?.addEventListener("loadedmetadata", handleLoaded);
    return () => video?.removeEventListener("loadedmetadata", handleLoaded);
  }, []);

  /* ─────────────────────────────────────────
     Scroll → Video + Progress
  ───────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const video = videoRef.current;
      if (!section || !video || duration === 0) return;

      const rect = section.getBoundingClientRect();
      const scrollTop = -rect.top;
      const scrollHeight = rect.height - window.innerHeight;

      let rawProgress = Math.max(0, Math.min(1, scrollTop / scrollHeight));

      // Smooth easing like Apple
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      setProgress(eased);

      video.currentTime = eased * duration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [duration]);

  return (
    <section ref={sectionRef} className="relative w-full h-[400vh] bg-black">
      {/* Sticky Video */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={Video}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: progress, y: 50 - progress * 50 }}
            className="text-white text-5xl md:text-7xl font-bold text-center"
          >
            {/* Cinematic Scroll */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: progress, y: 30 - progress * 30 }}
            className="text-white/70 text-lg md:text-2xl mt-6 max-w-xl text-center"
          >
            {/* Apple-style smooth scroll animation with video, text, and overlay effects. */}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: progress, y: 20 - progress * 20 }}
            // className="mt-12 px-8 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg"
          >
            {/* Learn More */}
          </motion.button>
        </div>
      </div>

      {/* Floating Cards */}
    </section>
  );
}

// /* ─────────────────────────────────────────
//    Floating Cards Example
// ───────────────────────────────────────── */
// const FloatingCards = ({ progress }) => {
//   const cards = [
//     { label: "Payroll", bg: "#10B981", color: "#fff" },
//     { label: "Attendance", bg: "#3B82F6", color: "#fff" },
//     { label: "Reports", bg: "#F59E0B", color: "#000" },
//     { label: "Leave", bg: "#EF4444", color: "#fff" },
//   ];

//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       {cards.map((card, i) => {
//         const xOffset = Math.sin(progress * Math.PI * (i + 1)) * 50; // smooth left-right
//         const yOffset = Math.cos(progress * Math.PI * (i + 1)) * 50; // smooth up-down

//         return (
//           <motion.div
//             key={i}
//             style={{
//               left: `${10 + i * 20}%`,
//               top: `${20 + i * 15}%`,
//               background: card.bg,
//               color: card.color,
//             }}
//             animate={{ x: xOffset, y: yOffset, opacity: progress }}
//             transition={{ duration: 0.5 }}
//             className="absolute px-4 py-2 rounded-lg font-semibold text-sm shadow-lg"
//             // style={{ background: card.bg,  }}
//           >
//             {card.label}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };