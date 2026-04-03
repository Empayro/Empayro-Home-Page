import React from "react";
import { motion } from "framer-motion";

import {Service1, Service2, Service3, Service4, Service5} from "@/assets";

const slides = [
  {
    title: "Payroll Management",
    img: Service1,
  },
  {
    title: "Attendance Tracking",
    img: Service2,
  },
  {
    title: "Reports & Analytics",
    img: Service3,
  },
  {
    title: "Leave Management",
    img: Service4,
  },
  {
    title: "Employee Insights",
    img: Service5,
  },
];

const StickyCards = ({ activeIndex }) => {
  return (
    <div className="relative w-full max-w-5xl h-[400px] overflow-hidden">
      <motion.div
        className="flex h-full"
        animate={{
          x: `-${activeIndex * 100}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex items-center justify-center"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 w-[100%] h-full max-w-full text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.5,
                y: activeIndex === index ? 0 : 40,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="rounded-lg mb-4 object-center object-cover w-[full] "
              />
              <h3 className="text-xl font-semibold mb-2">
                {slide.title}
              </h3>
              <button className="mt-4 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Book a Demo
              </button>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StickyCards;