import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Service1, Service2, Service3, Service4, Service5 } from "@/assets";
import Button from "../../components/ui/Button";
// import { Dash } from "@/assets";

const images = [Service1, Service2, Service3, Service4, Service5];

export default function Hero() {
  // 🔹 STATE FIRST
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const words = ["Automation", "Payroll", "HRMS", "ATS", "Insights"];
  const [wordIndex, setWordIndex] = useState(0);

  // 🔹 IMAGE SLIDER
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % images.length;

        // 🔥 Sync text with image
        setWordIndex(next);

        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  // ✅ Correct circular positioning
  const getPosition = (i) => {
    const total = images.length;
    let diff = i - index;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) return "center";
    if (diff === -1) return "left";
    if (diff === 1) return "right";

    return "hidden";
  };

  return (
    <section className="gap-y-20 bg-gradient-to-b from-[#f8fbff] to-[#e6f0ff] pt-40 py-20 overflow-hidden flex flex-col items-center justify-between">
      {/* Content */}
      <div className="w-full flex flex-col justify-center items-center">
        {/* BADGE */}
        <div className="inline-flex items-center bg-blue-100 text-[#0078D4] px-4 py-1 rounded-full text-sm mb-6">
          ● Now Available: Advanced Analytics Dashboard
        </div>

        <h1 className="text-4xl md:text-8xl font-bold text-gray-900 leading-tight text-center">
          Simplify Your HR  <br />  with{" "}
          <span className="relative inline-block h-[1.3em] w-[600px] text-start overflow-hidden align-bottom">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="absolute left-0 w-full text-[#0078d4]"
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  i === wordIndex
                    ? { y: "0%", opacity: 1 }
                    : { y: "-100%", opacity: 0 }
                }
                  transition={{ duration: 0.5 }}  // 👈 THIS LINE
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-600 max-w-full text-center">
          Streamline payroll, enhance employee engagement, and make data-driven
          decisions with our <br /> comprehensive cloud-based HRMS solution.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <Link to=""  >
            <Button>Get Started Free</Button>
            </Link>


          <Link
            to=""
            className="flex items-center gap-2 border border-[#0078d4] text-[#0078d4] px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            <FaWhatsapp />
            Contact Sales
          </Link>
        </div>
      </div>

      {/* ✅ Slider (ONLY this pauses on hover) */}
      <div
        className="relative w-full h-[520px] flex items-center justify-center perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((img, i) => {
          const position = getPosition(i);

          let styles = {};

          if (position === "center") {
            styles = {
              x: 0,
              scale: 1,
              rotateY: 0,
              zIndex: 10,
              opacity: 1,
            };
          } else if (position === "left") {
            styles = {
              x: -350,
              scale: 0.85,
              rotateY: 25,
              zIndex: 5,
              opacity: 0.6,
            };
          } else if (position === "right") {
            styles = {
              x: 350,
              scale: 0.85,
              rotateY: -25,
              zIndex: 5,
              opacity: 0.6,
            };
          } else {
            styles = {
              opacity: 0,
              scale: 0.7,
              zIndex: 0,
            };
          }

          return (
            <motion.div
              key={i}
              className="absolute w-[768px] h-[500px] cursor-grab active:cursor-grabbing"
              animate={styles}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 100) {
                  setIndex(
                    (prev) => (prev - 1 + images.length) % images.length,
                  );
                }
                if (info.offset.x < -100) {
                  setIndex((prev) => (prev + 1) % images.length);
                }
              }}
            >
              <img
                src={img}
                alt="slide"
                className="w-full h-full object-cover object-center rounded-2xl shadow-2xl"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
