import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Floating background pills (non-scroll, subtle animation)
 */
const FloatingElements = () => {
  const items = [
    "Payroll",
    "Attendance",
    "Reports",
    "Analytics",
    "HRMS",
    "Compliance",
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((text, i) => (
        <motion.div
          key={i}
          className="absolute px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm rounded-full border border-white/20"
          style={{
            top: `${10 + i * 12}%`,
            left: `${i % 2 === 0 ? 10 : 70}%`,
          }}
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * Card Component
 */
const Card = ({ data }) => {
  return (
    <motion.div
      className="absolute w-full max-w-xl mx-auto bg-white text-black rounded-2xl shadow-xl p-10"
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -80, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
      <p className="text-gray-600">{data.description}</p>
    </motion.div>
  );
};

/**
 * Cards Controller (handles scroll locking & index switching)
 */
const Cards = ({ cards, isActive, onComplete }) => {
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!isActive) return;

    const handleWheel = (e) => {
      if (isAnimating.current) return;

      // lock scroll inside section
      e.preventDefault();

      if (e.deltaY > 0) {
        // scroll down
        if (index < cards.length - 1) {
          isAnimating.current = true;
          setIndex((prev) => prev + 1);
        } else {
          // release scroll when last card reached
          onComplete();
        }
      } else {
        // scroll up
        if (index > 0) {
          isAnimating.current = true;
          setIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [index, isActive]);

  return (
    <div className="relative h-full flex items-center justify-center">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          isAnimating.current = false;
        }}
      >
        <Card key={index} data={cards[index]} />
      </AnimatePresence>
    </div>
  );
};

/**
 * Main Sticky Section
 */
const StickyScrollSection = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const cards = [
    {
      title: "Smart Payroll",
      description: "Automate salary, taxes, and compliance seamlessly.",
    },
    {
      title: "Attendance Tracking",
      description: "Track employee attendance in real-time with ease.",
    },
    {
      title: "Reports & Insights",
      description: "Generate detailed reports and analytics instantly.",
    },
    {
      title: "Employee Management",
      description: "Manage employee lifecycle from one place.",
    },
    {
      title: "Compliance Ready",
      description: "Stay compliant with government regulations effortlessly.",
    },
  ];

  /**
   * Detect when section enters viewport
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting && !isCompleted);
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isCompleted]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-black">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Floating background UI */}
        <FloatingElements />

        {/* Cards */}
        <Cards
          cards={cards}
          isActive={isActive}
          onComplete={() => {
            setIsCompleted(true);
            setIsActive(false);
          }}
        />
      </div>
    </section>
  );
};

export default StickyScrollSection;